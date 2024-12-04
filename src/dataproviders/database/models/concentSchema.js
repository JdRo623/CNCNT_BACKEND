const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    required: true,
  },
  id_user_s: {
    type: String,
    required: true,
  },
  id_user_r: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
})
module.exports = mongoose.model('Emp',userSchema);