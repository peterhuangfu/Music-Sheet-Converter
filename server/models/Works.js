const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorksSchema = Schema({
  file_id: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: String,
  uploader: { type: String, required: true },
  click_times: Number,
  download_times: Number,
  collection: 'Works',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Works', WorksSchema)
