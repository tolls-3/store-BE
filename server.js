require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const mongoURI = require('./config/config')

const passport = require('passport')

const stripeAuth = require('./authentication/stripeAuthentication')
const authRouter = require('./routes/authRouter')
const productRouter = require('./routes/productRouter')
const storeRouter = require('./routes/storeRouter')
const cartRouter = require('./routes/cartRouter')
const paymentRouter = require('./routes/paymentRouter.js')
const stripeAuthRouter = require('./routes/stripeAuthRouter')
const server = express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use(cors())

server.use(passport.initialize())
server.use(passport.session())

server.use('/api/auth', authRouter)
server.use('/api/store', productRouter)
server.use('/api/store', storeRouter)
server.use('/api/store', cartRouter)
server.use('/api/payment', paymentRouter)
server.use('/api/auth/stripe', stripeAuthRouter)

passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use(stripeAuth)


mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .catch(err => console.log(err))

server.get('/', (req, res) => {
  res.status(200).send('Api is running!!')
})

server.all('*', (req, res) => {
  res.status(404).json({ message: 'This URL can not be found' })
})

module.exports = server
