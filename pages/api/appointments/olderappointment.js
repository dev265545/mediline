import mongoose from "mongoose";
import Appointment from "../../../util/Models/Appointment";
import { initMongoose } from "../../../util/mongodb";
export default async function handler(req, res) {
  const {
    body,
    method,
    query: { id ,id2},
  } = req;
  console.log(body);
  await initMongoose();
  // try {
  //   const user = await Doctor.find({});
  //   res.json({ status: 200, data: user });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  if (method === "GET") {
    try {
      const user = await Appointment.find({doctor_id:id,patient_id : id2});
      res.json({ status: 200, data: user });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // if (method === "POST") {
  //   try {
  //     const order = await PatientUser.updateOne(
  //       { email: email },
  //       {
  //         $setOnInsert: req.body,
  //       },
  //       { upsert: true }
  //     );
  //     res.status(200).json(order);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }
  if (method === "POST") {
    try {
      const newUser = new Appointment(body);
      const order = await newUser.save();
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  // if (method === "PUT") {
  //   try {
  //     const order = await PatientUser.findById(name, req.body, {
  //       new: true,
  //     });
  //     res.status(200).json(order);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }
//   if (method === "DELETE") {
//   }
//   res.json(await Doctor.find().exec());
}
