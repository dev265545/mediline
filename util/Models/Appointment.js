import mongoose, { model, models, Schema } from "mongoose";

const AppointmentSchema = new Schema({
    patient_doctor_id: {
        type :String,
        required : true,
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
  verfiedbydoctor: {
    type: Boolean,
  },
  verfiedbypatient: {
    type: Boolean,
  },
 
 
});
const Appointments = models?.Appointments || model("Appointments", AppointmentSchema);
export default Appointments;
