const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const { google } = require('googleapis')
const User = require('../models/User')

exports.GoogleLogin = async (req, res) => {
  const access_token = req.body.access_token
  const user_id = req.body.user_id
  console.log(access_token)
  console.log(user_id)
  
  const service = await google.people({ version: 'v1', access_token })
  service.people.connections.list({
    resourceName: `people/${user_id}`,
    personFields: 'names, emailAddresses, birthdays',
  }, (err, res) => {
    if (err)
      return console.error('The API returned an error: ' + err)

    const connections = res.data.connections
    if (connections) {
      console.log('Connections:');
      connections.forEach((person) => {
        if (person.names && person.names.length > 0) {
          console.log(person.names[0].displayName)
        } else {
          console.log('No display name found for connection.')
        }
      })
    } else {
      console.log('No connections found.')
    }
  })
}
