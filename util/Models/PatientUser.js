import mongoose, { model, models, Schema } from "mongoose";

const PatientUserSchema = new Schema({
  name: {
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
});
const PatientUser =
  models?.PatientUsers || model("PatientUsers", PatientUserSchema);
export default PatientUser;
