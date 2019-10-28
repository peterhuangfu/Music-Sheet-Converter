const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
  id: { type: String, unique: true },
  username: { type: String, required: true },
  name: String,
  profile_picture_url: String,
  birthday: Date,
  upload_works: [{ type: Schema.Types.ObjectId, ref: 'Works' }],
  download_works: [{ type: Schema.Types.ObjectId, ref: 'Works' }],
  sign_up_date: Date,
  collection: 'User',
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('User', UserSchema)
