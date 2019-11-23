const request = require('request-promise')
const exploreRoute = require('./explore')
const convertRoute = require('./convert')
const profileRoute = require('./profile')
const loginRoute = require('./login')
const fs = require('fs')

const wrap = fn => (...args) => fn(...args).catch(args[2])

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('hello world.')
  })

  app.get('/api/explore/downloadpdf', wrap(exploreRoute.downloadPDF))
  app.get('/api/explore/openpdf', wrap(exploreRoute.openPDF))
  app.post('/api/explore/convert', wrap(convertRoute.convert))

  // login
  app.post('/api/login/google', wrap(loginRoute.GoogleLogin))
  app.get('/api/login/check_status', wrap(loginRoute.CheckLoginStatus))
  app.get('/api/logout', wrap(loginRoute.Logout))

  //profile
  app.post('/api/profile/edit_profile', wrap(profileRoute.edit_profile))
  app.get('/api/profile/get_profile', wrap(profileRoute.get_profile))
}
