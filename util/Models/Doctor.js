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
  hospitalemail: {
    type: String,
  },
  photo_url: {
    type: String,
  },
  city: {
    type: String,
  },
  hospitalcity: {
    type: String,
  },
  post: {
    type: String,
  },
  address: {
    type: String,
  },
  hospitalname: {
    type: String,
  },
  hospitaladdress: {
    type: String,
  },
  info: {
    type: String,
  },
  services: {
    type: String,
  },
  timings: {
    type: String,
  },
  fees: {
    type: String,
  },
  country: {
    type: String,
  },
  hospitalcountry: {
    type: String,
  },
  reviews: [
    {
      rating: {
        type: Number,
      },
      review: {
        type: String,
      },
      name: {
        type: String,
      },
      reviewDate: { type: Date },
    },
  ],
  registrationnumber: {
    type: String,
  },
  pincode: {
    type: String,
  },
  hospitalpincode: {
    type: String,
  },
  state: {
    type: String,
  },
  hospitalstate: {
    type: String,
  },
  phone: {
    type: Number,
  },
  hospitalphone: {
    type: Number,
  },
  Qualification: {
    type: String,
  },
  Specialization: {
    type: String,
  },
  PatientList: [{ type: String }],
  slotsfornext7days: {
    day1: [{ type: String }],
    day2: [{ type: String }],
    day3: [{ type: String }],
    day4: [{ type: String }],
    day5: [{ type: String }],
    day6: [{ type: String }],
    day7: [{ type: String }],
  },
  daysinweek: { type: String },
  Bookedslotsfornext7days: {
    day1: [{ type: String }],
    day2: [{ type: String }],
    day3: [{ type: String }],
    day4: [{ type: String }],
    day5: [{ type: String }],
    day6: [{ type: String }],
    day7: [{ type: String }],
  },
  Availableslotsfornext7days: {
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
