const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const { google } = require('googleapis')
const User = require('../models/User')
const Works = require('../models/Works')

exports.get_profile = async (req, res) => {
  const current_user = req.session.current_user
  let user = await User.findOne({ google_id: current_user.google_id }).lean()
  let upload_works = await Works.find({ _id: { $in: user.upload_works } })
  user.upload_works = upload_works
  res.send(user)
}

exports.edit_profile = async (req, res) => {
  const section = req.body.status
  const user = req.session.current_user
  res.send({ user: user })
}

// exports.get_converted_works = async (req, res) => {
//   const user = req.session.current_user
//   res.send({ user: user })
// }
