import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorSidebar from "../../../../Components/DoctorComponents/DoctorSidebar";
import { useRouter } from "next/router";
import Patientinformation from "../../../../Components/DoctorComponents/Patientinformation";
import AppointmentInformation from "../../../../Components/DoctorComponents/AppointmentInformation";
import Prescreption from "../../../../Components/DoctorComponents/Prescreption";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import moment from "moment";
import LabTest from "../../../../Components/DoctorComponents/Labtest";
import DocumentUploader from "../../../../Components/DoctorComponents/DocumentUplaoder";
import SideNavbar from "../../../../Components/UserPatientComponents/Sidebar";
// import NewAppointment from "../../../Components/DoctorComponents/NewAppointment";
// import Example from "../../../Components/DoctorComponents/calender";

export default function PatientAppointment() {
  const router = useRouter();
  const [refresh, setrefresh] = useState(0);
  const { patient_doctor_id } = router.query;
  console.log({ patient_doctor_id });
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
  }, [patient_doctor_id, refresh]);
  const [ olderappointment,setolderappointment]=useState()
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/appointments/olderappointment?id=${appointment?.doctor_id}&id2=${appointment?.patient_id}`
      )
      .then((resp) => {
        setolderappointment(resp.data.data);
      });
  }, [appointment]);
  console.log(doctor);
  console.log(appointment?.advice);
  console.log(patient);
  console.log("old",olderappointment)
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
  let [isOpenL, setIsOpenL] = useState(false);

  function closeModalL() {
    setIsOpenL(false);
  }

  function openModalL() {
    setIsOpenL(true);
  }

  const [advice, setadvice] = useState("");
  const [notes, setnotes] = useState(appointment?.notes);

  const [val, setval] = useState();
  const [test, settest] = useState();
  const [documents, setdocuments] = useState();
  const [val1, setval1] = useState();
  const [val3, setval3] = useState();
  useEffect(() => {
    setadvice(appointment?.advice);
    setnotes(appointment?.notes);
    setval(appointment?.prescription);
    setval1(appointment?.test);
    setval3(appointment?.documents);
    setdocuments(appointment?.documents);
    settest(appointment?.test);
  }, [appointment?.advice, appointment?.notes, appointment]);

  console.log(advice);

  const [onClick, setonClick] = useState(false);
  const delteitem = async (index) => {
    let urllist = prescreption;
    if (index > -1) {
      // only splice array when item is found
      urllist.splice(index, 1); // 2nd parameter means remove one item only
    }

    setprescription(urllist);
  };
  const delteitemtest = async (index) => {
    let urllist = test;
    if (index > -1) {
      // only splice array when item is found
      urllist.splice(index, 1); // 2nd parameter means remove one item only
    }

    settest(urllist);
  };
  const delteitemdoc = async (index) => {
    let urllist = documents;
    if (index > -1) {
      // only splice array when item is found
      urllist.splice(index, 1); // 2nd parameter means remove one item only
    }

    setdocuments(urllist);
  };

  const [prescreption, setprescription] = useState();
  const [links, setlinks] = useState();
  useEffect(() => {
    setprescription(appointment?.prescription);
    setprescription(appointment?.documents);
  }, [appointment?.prescription, appointment]);
  console.log(prescreption);
  const deletemedicine = (index) => {
    delteitem(index);
    let databody = {
      patient_doctor_id: appointment?.patient_doctor_id,
      patient_id: appointment?.patient_id,
      doctor_id: appointment?.doctor_id,
      typeofmeeting: "Consultation",
      time: appointment?.date,
      date: appointment?.time,
      fnsdate: appointment?.fnsdate,
      verifiedbydoctor: appointment?.verifiedbydoctor,
      verifiedbypatient: appointment?.verifiedbypatient,
      advice: appointment?.advice,
      notes: appointment?.notes,
      documents: appointment?.documents,
      test: appointment?.test,
      reasonforappointment: appointment?.reasonforappointment,
      prescription: prescreption,
    };
    axios
      .post(
        ` http://localhost:3000/api/appointments/updatebydoctor?id=${appointment.patient_doctor_id}`,
        databody
      )
      .then(function (response) {
        console.log("delete item", index);
        console.log(response);
        setrefresh(refresh + 1);
      });
  };
  const deletedoc = (index) => {
    delteitemdoc(index);
    let databody = {
      patient_doctor_id: appointment?.patient_doctor_id,
      patient_id: appointment?.patient_id,
      doctor_id: appointment?.doctor_id,
      typeofmeeting: "Consultation",
      time: appointment?.date,
      date: appointment?.time,
      fnsdate: appointment?.fnsdate,
      verifiedbydoctor: appointment?.verifiedbydoctor,
      verifiedbypatient: appointment?.verifiedbypatient,
      advice: appointment?.advice,
      notes: appointment?.notes,
      documents: documents,
      test: appointment?.test,
      reasonforappointment: appointment?.reasonforappointment,
      prescription: appointment?.prescription,
    };
    axios
      .post(
        ` http://localhost:3000/api/appointments/updatebydoctor?id=${appointment.patient_doctor_id}`,
        databody
      )
      .then(function (response) {
        console.log("delete item", index);
        console.log(response);
        setrefresh(refresh + 1);
      });
  };
  const deletetest = (index) => {
    delteitemtest(index);
    let databody = {
      patient_doctor_id: appointment?.patient_doctor_id,
      patient_id: appointment?.patient_id,
      doctor_id: appointment?.doctor_id,
      typeofmeeting: "Consultation",
      time: appointment?.date,
      date: appointment?.time,
      fnsdate: appointment?.fnsdate,
      verifiedbydoctor: appointment?.verifiedbydoctor,
      verifiedbypatient: appointment?.verifiedbypatient,
      advice: appointment?.advice,
      notes: appointment?.notes,
      documents: appointment?.documents,
      test: test,
      reasonforappointment: appointment?.reasonforappointment,
      prescription: appointment?.prescription,
    };
    axios
      .post(
        ` http://localhost:3000/api/appointments/updatebydoctor?id=${appointment.patient_doctor_id}`,
        databody
      )
      .then(function (response) {
        console.log("delete item", index);
        console.log(response);
        setrefresh(refresh + 1);
      });
  };
  const confirmation = () => {
    let databody = {
      patient_doctor_id: appointment?.patient_doctor_id,
      patient_id: appointment?.patient_id,
      doctor_id: appointment?.doctor_id,
      typeofmeeting: "Consultation",
      time: appointment?.date,
      date: appointment?.time,
      fnsdate: appointment?.fnsdate,
      verifiedbydoctor: appointment?.verifiedbydoctor,
      verifiedbypatient: appointment?.verifiedbypatient,
      advice: advice,
      notes: notes,
      documents: appointment?.documents,
      test: appointment?.test,
      reasonforappointment: appointment?.reasonforappointment,
      prescription: appointment?.prescription,
    };
    axios
      .post(
        ` http://localhost:3000/api/appointments/updatebydoctor?id=${appointment.patient_doctor_id}`,
        databody
      )
      .then(function (response) {
        console.log(response);
      });
  };
  return (
    <div>
      <main className="bg-gray-50 min-h-screen flex max-w-[1500px] mx-auto">
        <SideNavbar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
            {greeting}{" "}
            <p className=" text-gray-900 font-bold inline-block">
              {patient?.name}
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
                {/* <label
                  for="message"
                  class="block text-lg mb-2  font-medium text-gray-900"
                >
                  My notes for the appointment
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => {
                    setnotes(e.target.value);
                  }}
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Notes"
                ></textarea> */}
                <div className=" py-4 ">
                  {/* <button
                    onClick={() => confirmation()}
                    type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                  >
                    Save Notes
                  </button> */}
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
                  value={advice}
                  onChange={(e) => {
                    setadvice(e.target.value);
                  }}
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Instructions"
                ></textarea>
                <div className=" py-4 ">
                  {/* <button
                    onClick={() => confirmation()}
                    type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                  >
                    Save Instructions
                  </button> */}
                </div>
              </div>
              <div>
                <div className="flex flex-row p-2">
                  <div className="flex flex-1 text-lg font-semibold text-purple-900 ">
                    Prescreption
                  </div>
                  <div className="px-1 py-1">
                    {/* <button
                      onClick={openModal}
                      type="submit"
                      class="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                    >
                      <MdAddCircleOutline /> Add
                    </button> */}
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
                        <th scope="col" class="py-3 px-6">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {val?.map((presc, index) => (
                        <tr
                          key={index}
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {presc?.medicinename}
                          </th>
                          <td class="py-4 px-6"> {presc?.dosage}</td>
                          <td class="py-4 px-6">{presc?.nofdays}</td>
                          <td class="py-4 px-6">{presc?.quantity}</td>
                          <td class="py-4 px-6">
                            <MdDelete onClick={() => deletemedicine(index)} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-row p-2">
                  <div className="flex flex-1 text-lg font-semibold text-purple-900 ">
                    Lab Test
                  </div>
                  <div className="px-1 py-1">
                    {/* <button
                      onClick={openModalL}
                      type="submit"
                      class="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                    >
                      <MdAddCircleOutline /> Add Test
                    </button> */}
                  </div>
                </div>

                <div class="overflow-x-auto relative shadow-lg rouned-full shadow-purple-200">
                  <table class="w-full text-sm text-left text-gray-500 rounded-lg dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 rounded-2xl dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          Lab Test
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Due Date
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Reason
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Category
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {val1?.map((presc, index) => (
                        <tr
                          key={index}
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {presc?.testname}
                          </th>
                          <td class="py-4 px-6"> {presc?.Duedate}</td>
                          <td class="py-4 px-6">{presc?.reason}</td>
                          <td class="py-4 px-6">{presc?.category}</td>
                          <td class="py-4 px-6">
                            <MdDelete onClick={() => deletetest(index)} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-row p-2">
                  <div className="flex flex-1 text-lg font-semibold text-purple-900 ">
                    Documents
                  </div>
                  <div className="px-1 py-1">
                    <button
                      onClick={() => setonClick(true)}
                      type="submit"
                      class="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                    >
                      <MdAddCircleOutline /> Upload
                    </button>
                  </div>
                </div>

                <div class="overflow-x-auto relative shadow-lg rouned-full shadow-purple-200">
                  <table class="w-full text-sm text-left text-gray-500 rounded-lg dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 rounded-2xl dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          Document Name
                        </th>

                        <th scope="col" class="py-3 px-6">
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {val3?.map((presc, index) => (
                        <tr
                          key={index}
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {presc?.name}
                          </th>
                          <td class="py-4 px-6">
                            <a
                              href={presc?.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Go to Doc
                            </a>
                          </td>

                          <td class="py-4 px-6">
                            <MdDelete onClick={() => deletedoc(index)} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-row p-2">
                  <div className="flex flex-1 text-lg font-semibold text-purple-900 ">
                    Other Appointments
                  </div>
                  {/* <div className="px-1 py-1">
                    <button
                      onClick={() => setonClick(true)}
                      type="submit"
                      class="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                    >
                      <MdAddCircleOutline /> Upload
                    </button>
                  </div> */}
                </div>

                <div class="overflow-x-auto relative shadow-lg rouned-full shadow-purple-200">
                  <table class="w-full text-sm text-left text-gray-500 rounded-lg dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 rounded-2xl dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          Appointment ID
                        </th>

                        <th scope="col" class="py-3 px-6">
                          Date
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Type of Meeting
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {olderappointment?.map((presc, index) => (
                        <tr
                          key={index}
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {presc?.patient_doctor_id}
                          </th>
                          <td class="py-4 px-6">
                            {moment(presc?.fnsdate).format(
                              "dd mm MMM YY "
                            )}{" "}
                          </td>

                          <td class="py-4 px-6">
                            <MdDelete onClick={() => deletedoc(index)} />
                          </td>
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
        appointment={appointment}
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
      <LabTest
        appointment={appointment}
        isOpen={isOpenL}
        closeModal={closeModalL}
        openModal={openModalL}
      />
      {onClick && (
        <div
          id="small-modal"
          tabIndex="-1"
          className="  overflow-y-auto overflow-x-hidden backdrop-blur-lg flex items-center justify-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Upload a Document
                </h3>
                <button
                  onClick={() => {
                    setonClick(false);
                  }}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="small-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                <DocumentUploader
                  uid={appointment?.doctor_id}
                  appointment={appointment}
                  links={links}
                />
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"></div>
            </div>
          </div>
        </div>
      )}
      Older appointments next appointment
    </div>
  );
}
