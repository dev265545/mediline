import mongoose from "mongoose";
import PatientUser from "../../../util/Models/PatientUser";
import { connectToDatabase, initMongoose } from "../../../util/mongodb";
export default async function handler(req, res) {
  const {
    body,
    method,
    query: { email },
  } = req;
  console.log(body);
  await initMongoose();

  if (method === "GET") {
    try {
      const user = await PatientUser.findOne({ email: email });
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
      const newUser = new PatientUser(body);
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
  if (method === "DELETE") {
  }
  res.json(await PatientUser.find().exec());
}
