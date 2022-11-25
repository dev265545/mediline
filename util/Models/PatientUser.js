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
  temperature: {
    temperature: { type: String },
    lastchecked: { type: Date },
  },
  weight: {
    weight: { type: String },
    lastchecked: { type: Date },
  },
  hemoglobin : {
    hemoglobin : {type :String},
    lastchecked : {type : Date}
  },
  height: {
    height: { type: String },
    lastchecked: { type: Date },
  },
  pressure: {
    pressure: { type: String },
    lastchecked: { type: Date },
  },
  documents: [{ name: { type: String }, link: { type: String } }],
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  age: {
    type: Number,
  },
  geneder : {
    type : String
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
  diseases : {
    type :String
  },
  diabetic: {
    type: Boolean,
  },
  medication: {
    type: String,
  },
  information: {
    type: String,
  },

  country: {
    type: String,
  },
  state: {
    type: String,
  },
  bp_pateint: {
    type: Boolean,
  },
  //archit------------------------------------
});
const PatientUser =
  models?.PatientUsers || model("PatientUsers", PatientUserSchema);
export default PatientUser;
