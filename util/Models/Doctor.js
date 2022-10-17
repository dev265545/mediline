import mongoose, { model, models, Schema } from "mongoose";

const DoctorSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
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
  phone: {
    type: Number,
  },
  Qualification: {
    type: String,
  },
  Specialization: {
    type: String,
  },
  slotsfornext7days: {
   
    day1: [{ type: String }],
    day2: [{ type: String }],
    day3: [{ type: String }],
    day4: [{ type: String }],
    day5: [{ type: String }],
    day6: [{ type: String }],
    day7: [{ type: String }],
  },
});
const Doctor = models?.Doctors || model("Doctors", DoctorSchema);
export default Doctor;
