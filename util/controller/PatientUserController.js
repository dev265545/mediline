import PatientUser from "../Models/PatientUser";

export const getAllUserPatient = async (req, res) => {
  let alluserpatient;
  try {
    alluserpatient = await PatientUser.find();
  } catch (err) {
    return new Error(err);
  }
  if (!alluserpatient) {
    return res.status(500).json({ message: "internal server error" });
  }
  if (alluserpatient.lenght === 0) {
    return res.status(404).json({ message: "no users found" });
  }
  return res.status(200).json({ alluserpatient });
};
