import mongoose, { model, models, Schema } from "mongoose";

const AppointmentSchema = new Schema({
  patient_doctor_id: {
    type: String,
    required: true,
  },
  patient_id: {
    type: String,
    required: true,
  },
  doctor_id: {
    type: String,
    required: true,
  },
  typeofmeeting: {
    type: String,
  },
  time: {
    type: String,
  },
  date: {
    type: String,
  },
  fnsdate: {
    type: String,
  },
  reasonforappointment: {
    type: String,
  },
  notes: {
    type: String,
  },
  advice: {
    type: String,
  },
  prescription: [
    {
      medicinename: { type: String },
      nofdays: { type: Number },
      dosage: { type: String },
      quantity: { type: Number },
    },
  ],
  documents: [
    {
      name: { type: String },
      link: { type: Number },
    },
  ],
  test: [
    {
      category: { type: String },
      testname: { type: String },
      reason: { type: String },
      labinfo: { type: String },
      Duedate :  {type : String},
      instructiontopatient : {type : String}
    },
  ],
  verifiedbydoctor: {
    type: Boolean,
  },

  verifiedbypatient: {
    type: Boolean,
  },
});
const Appointments = models?.Appointments || model("Appointments", AppointmentSchema);
export default Appointments;
