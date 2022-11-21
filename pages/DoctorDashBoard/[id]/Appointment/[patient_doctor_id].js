import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorSidebar from "../../../../Components/DoctorComponents/DoctorSidebar";
import { useRouter } from "next/router";
import Patientinformation from "../../../../Components/DoctorComponents/Patientinformation";
import AppointmentInformation from "../../../../Components/DoctorComponents/AppointmentInformation";
import Prescreption from "../../../../Components/DoctorComponents/Prescreption";
import { MdAddCircleOutline } from "react-icons/md";
// import NewAppointment from "../../../Components/DoctorComponents/NewAppointment";
// import Example from "../../../Components/DoctorComponents/calender";

export default function DoctorAppointment() {
  const router = useRouter();
  const { patient_doctor_id } = router.query;
   console.log({patient_doctor_id})
  const [appointment, setappointment] = useState([]);
   const [doctor, setdoctor] = useState([]);
      const [patient, setpatient] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/appointments/patient_doctor_id?id=${patient_doctor_id}`
      )
      .then((resp) => {
        setappointment(resp.data.data[0]);
      });
  }, [patient_doctor_id]);
  console.log(doctor)
    console.log(appointment);
      console.log(patient);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/doctors?uid=${appointment?.doctor_id}`)
      .then((resp) => {
        setdoctor(resp.data.data);
      });
       axios
         .get(
           `http://localhost:3000/api/patients_users?uid=${appointment?.patient_id}`
         )
         .then((resp) => {
           setpatient(resp.data.data);
         });
  }, [appointment]);
  const [val,setval] = useState([appointment?.prescreption])

  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  if (currentTime >= 0 && currentTime <= 12) {
    greeting = "Good Morning";
  } else if (currentTime > 12 && currentTime <= 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
   let [isOpen, setIsOpen] = useState(false);

   function closeModal() {
     setIsOpen(false);
   }

   function openModal() {
     setIsOpen(true);
   }
  return (
    <div>
      <main className="bg-gray-50 min-h-screen flex max-w-[1500px] mx-auto">
        <DoctorSidebar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
            {greeting}{" "}
            <p className=" text-gray-900 font-bold inline-block">
              Dr. {doctor?.name}
            </p>
            <p className="py-1 text-xl text-gray-600">
              Happiness is the highest form of health.
            </p>
          </div>
          <div className="flex  flex-col lg:flex-row-reverse ">
            <div>
              <AppointmentInformation appointment={appointment} />
              <Patientinformation patient={patient} />
            </div>
            <div className=" flex-col flex-1">
              <div className="flex-1 p-3">
                <label
                  for="message"
                  class="block text-lg mb-2  font-medium text-gray-900"
                >
                  My notes for the appointment
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Notes"
                ></textarea>
                <div className=" py-4 ">
                  <button
                    type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                  >
                    Post comment
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <label
                  for="message"
                  class="block text-lg mb-2  font-medium text-gray-900"
                >
                  Instructions for the Patient
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Instructions"
                ></textarea>
                <div className=" py-4 ">
                  <button
                    type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                  >
                    Post comment
                  </button>
                </div>
              </div>
              <div>
                <div className="flex flex-row p-2">
                  <div className="flex flex-1 text-lg font-semibold text-purple-900 ">
                    Prescreption
                  </div>
                  <div className="px-1 py-1">
                    <button
                    onClick={openModal}
                      type="submit"
                      class="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                    >
                      <MdAddCircleOutline /> Add
                    </button>
                  </div>
                </div>

                <div class="overflow-x-auto relative shadow-lg rouned-full shadow-purple-200">
                  <table class="w-full text-sm text-left text-gray-500 rounded-lg dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 rounded-2xl dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          Medication
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Dosage
                        </th>
                        <th scope="col" class="py-3 px-6">
                          No of days
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Quantity
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {val.map((presc, index) => (
                        <tr
                          key={index}
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            Apple MacBook Pro 17
                          </th>
                          <td class="py-4 px-6">Sliver</td>
                          <td class="py-4 px-6">Laptop</td>
                          <td class="py-4 px-6">$2999</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Prescreption
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
      Older appointments
      Lab reports 
      Upload document
      next appointment


    </div>
  );
}
