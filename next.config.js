require('dotenv').config()
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
})