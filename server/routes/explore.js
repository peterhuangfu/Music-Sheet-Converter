const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const fs = require('fs')

// ......express is so amazing = =
exports.downloadPDF = async (req, res) => {
  const filePath = '/Users/huangfu/Downloads/ML/hw2/report.pdf'
  res.download(filePath)
}

exports.openPDF = async (req, res) => {
  const filePath = '/Users/huangfu/Downloads/ML/hw2/report.pdf'
  await fs.readFileSync(filePath , (err, data) => {
    if (err)
      console.error(err)

    res.contentType('application/pdf')
    res.send(data)
  })
}
