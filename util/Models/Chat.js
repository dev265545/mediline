import mongoose, { model, models, Schema } from "mongoose";

const ChatSchema = new Schema({
  patient_id: {
    type: String,
    required: true,
  },
  doctor_id: {
    type: String,
    required: true,
  },
  message: {
    message: {
      type: String,
    },
    sender : {
        type : Number,
    }
  },
});
const Chats =
  models?.Chats || model("Chats", ChatSchema);
export default Chats;
