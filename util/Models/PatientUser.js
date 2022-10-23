import mongoose, { model, models, Schema } from "mongoose";

const PatientUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo_url: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  age: {
    type: Number,
  },
  //Archit--------------------------------
  blood_group: {
    type: String,
  },
  
  phone_no: {
    type: Number,
  },
  allergies: {
    type: String,
  },
  diabetic: {
    type: Boolean,
  },
  dobirth: {
    type: String,
  },
  bp_pateint: {
    type: Boolean,
  }
//archit------------------------------------
});
const PatientUser =
  models?.PatientUsers || model("PatientUsers", PatientUserSchema);
export default PatientUser;
