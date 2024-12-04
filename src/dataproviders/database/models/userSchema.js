const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  consentCode: {
    type: String,
    required: true,
  },
  consentCodeDate: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('Emp',userSchema);