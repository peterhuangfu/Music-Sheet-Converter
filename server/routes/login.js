const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const { google } = require('googleapis')
const User = require('../models/User')
// const OAuth2 = google.auth.OAuth2
// const OAuth2Client = new OAuth2(config.OAUTH2_CLIENT_ID, config.OAUTH2_CLIENT_SECRET, config.OAUTH2_CALLBACK)
// const scopes = [
//   'https://www.googleapis.com/auth/contacts.readonly'
// ]
// const url = OAuth2Client.generateAuthUrl({
//   access_type: 'offline',
//   scope: scopes
// })

exports.GoogleLogin = async (req, res) => {
  const user = req.body.user
  const current_user = await User.findOne({ google_id: user.El })

  if (!current_user) {
    const user_id = ObjectId()
    const newUser = new User({
      _id: user_id,
      google_id: user.El,
      username: user.w3.ig,
      name: user.w3.wea+user.w3.ofa,
      email: user.w3.U3,
      profile_picture_url: user.w3.Paa,
      upload_works: [],
      download_works: [],
      google_token: user.Zi.access_token,
      google_token_type: user.Zi.token_type,
      google_token_update_date: new Date(),
      sign_up_date: new Date()
    })
    await newUser.save()

    req.session.current_user = newUser.toObject()
  }
  else {
    const access_token = user.Zi.access_token
    await User.updateOne({ _id: current_user._id },{ $set:{ google_token: access_token, google_token_update_date: new Date() } })
    req.session.current_user = current_user.toObject()
  }

  res.status(200).json({
    message: 'success login',
    user: req.session.current_user
  })

  // const baseUrl = 'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses'

  // OAuth2Client.getToken(code, (err, tokens) => {
  //   if (!err)
  //     OAuth2Client.setCredentials(tokens)
  // })

  // console.log(OAuth2Client)
}

exports.CheckLoginStatus = async (req, res) => {
  console.log(req.session.current_user)
  if (req.session.current_user) {
    return res.json({
      message: 'login',
      type: 'success',
      user: req.session.current_user
    })
  }
  else {
    return res.json({
      message: 'not_login',
      type: 'fail'
    })
  }
}

exports.Logout = async (req, res) => {
  req.session.destroy()
  res.status(200).json({
    message: 'logout',
    type: 'success'
  })
}
