const Cart = require('../../models/cart')
const Store = require('../../models/store')
const {
  validateCartInput,
  validateEmail
} = require('../../middleware/validateCartData')
const Mailgen = require('mailgen')
const baseUrl = require('../../helpers/baseUrl')

async function addCart (req, res) {
  const { errors, isValid } = validateCartInput(req.body)
  const { errorEmail, isValidEmail } = validateEmail(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }
  if (!isValidEmail) {
    return res.status(400).json(errorEmail)
  }
  const id = req.params.store_id
  try {
    const store = await Store.findById({ _id: id })
    if (!store) {
      return res.status(404).json({ message: 'This store does not exist' })
    }
    const cart = req.body
    cart.storeId = store._id
    cart.currency = store.currency
    const newCart = new Cart(cart)
    const result = await newCart.save()
    const cartId = result._id
    // link to FE route of buyers saved cart
    const link = `${baseUrl}/cart/${cartId}`
    // Configure mailgen by setting a theme and your product info
    
    const mailGenerator = new Mailgen({
      theme: 'salted',
      product: {
        // Appears in header & footer of e-mails
        width: '100px',
        name: 'Dev Shop',
        link: link,
        textDirection: 'rtl',
        copyright: 'Copyright © 2020 Dev Shop. All rights reserved.'
      }
    })
    // Prepare email contents
    console.log('hey')
    const email = {
      body: {
        name: `${result.email}`,
        intro: `Welcome to ${store.storeName}! We’re very excited to have you shopping with us.`,
        action: {
          instructions: `To access your saved cart at ${store.storeName}, please click below:`,
          button: {
            color: 'blue',
            text: 'Saved Cart',
            link: link
          }
        },
        outro: 'You can not reply to this email.'
      }
    }


    // Generate an HTML email using mailgen
    const emailBody = mailGenerator.generate(email)
    const msg = {
      to: `${result.email}`,
      from: process.env.FROM_EMAIL,
      subject: 'Dev Shop email Notification for your Saved Cart',
      text: 'This link will lead you to your saved cart',
      html: emailBody
    }
  } catch (err) {
    return res.status(500).json(err.message)
  }
}

module.exports = addCart
