const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const { google } = require('googleapis')
const User = require('../models/User')
const Works = require('../models/Works')

exports.get_profile = async (req, res) => {
  const current_user = req.session.current_user
  let user = await User.findOne({ google_id: current_user.google_id }).populate('upload_works').populate('download_works')
  res.send(user)
}

exports.edit_profile = async (req, res) => {
  const section = req.body.status
  const user = req.session.current_user
  res.send({ user: user })
}
