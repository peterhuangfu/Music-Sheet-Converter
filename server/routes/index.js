const request = require('request-promise')
const fs = require('fs')
const exploreRoute = require('./explore')

const wrap = fn => (...args) => fn(...args).catch(args[2])

const login_check = (req, res, next) => {
  if(!req.session.current_user) {
    return res.status(403).json({
      error: 'Not Login'
    })
  }

  //api user type check
  const user_type = req.path.split("/")[2]
  if(['advertiser', 'influencer'].indexOf(user_type) > -1 && req.session.current_user.user_type != user_type) {
    return res.status(403).json({
      message: 'Forbidden',
      type: 'Forbidden'
    })
  }

  return next()
}

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/readpdf', wrap(exploreRoute.downloadPDF))

  // app.get("/advertiser/overview",(req,res)=>{
  //  res.render("advertiser/overview")
  // })

  //api
  // app.get('/api/user/status',wrap(userRoute.get_user_status))
}
