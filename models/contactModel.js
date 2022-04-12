import mongoose from "mongoose";

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
  created_date: {
      type: String,
      default:new Date()
  },
});

const Contact = mongoose.model("contact", schema);
export default Contact;