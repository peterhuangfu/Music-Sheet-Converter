const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorksSchema = Schema({
  file_id: { type: String, unique: true, required: true },
  pdf_file_path: { type: String, unique: true },
  sep_piano_path: { type: String, unique: true },
  sep_human_path: { type: String, unique: true },
  title: { type: String, required: true },
  description: String,
  uploader: { type: Schema.Types.ObjectId, ref: 'User' },
  click_times: Number,
  download_times: Number,
  separate: Boolean,
  convert: Boolean,
  public: Boolean
},  {
  collection: 'Works',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Works', WorksSchema)
