import mongoose from "mongoose";
const Schema = mongoose.Schema;

const recordsSchema = new Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
  },
  eMail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },

});

mongoose.models = {};
module.exports = mongoose.model("FormRecord", recordsSchema);
