const Mongoose = require('mongoose')

const schema = new Mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  contact :{
    type: String,
    default: '',
    unique: true,
    required: true,
    trim: true,
    minlength: 10
  } ,
  countryCode :{
    type: Number,
    default: 92
  } 

}, {
  timestamps: true
})
const newLocal = 'Users'
module.exports = Mongoose.model(newLocal, schema)  