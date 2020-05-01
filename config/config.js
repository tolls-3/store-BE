require('dotenv').config()

const { NODE_ENV } = process.env
console.log(process.env.DB_CONNECTION)
let mongoURI = ''

if (NODE_ENV === 'test') {
  mongoURI = process.env.DB_CONNECTION_TEST || 'mongodb://localhost/test'
} else {
  mongoURI = process.env.DB_CONNECTION
}

module.exports = mongoURI
