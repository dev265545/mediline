import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

import moment from "moment";
import emailjs from "@emailjs/browser";
import Select from "react-select";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import axios from "axios";
import { GiPerson, GiTick } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { ImCross, ImPointRight } from "react-icons/im";
import {
  MdApproval,
  MdCalendarToday,
  MdEmail,
  MdOutlineLockClock,
  MdPerson,
  MdPhone,
  MdTimer,
} from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";
import { format, parseISO } from "date-fns";

function SingleAppointment({ patient_id, index, handleoff, doctor, list, c }) {
  const { data: session } = useSession();
  console.log(doctor);
  console.log(list);
  console.log(index);
  console.log(patient_id);
  let startDateTime = parseISO(list[index]?.fnsdate);
  let msg =
    "This is to inform you that your Appointment on" +
    format(startDateTime, "do MMMM yyyy") +
    " at " +
    list[index]?.date +
    " is confirmed. Hoping that you be on time and maintaing your health with the best of your ability. I hope i will helpful to you";
  let reject =
    "This is to inform you that your Appointment on" +
    format(startDateTime, "do MMMM yyyy") +
    " at " +
    list[index]?.date +
    " is being unfortunatelly being removed as I am not available at that time. You can go back and make another appointment at other available slots. Sorry for the inconvience";

  const confirmation = () => {
    let databody = {
      patient_doctor_id: list[index]?.patient_doctor_id,
      patient_id: list[index]?.patient_id,
      doctor_id: list[index]?.doctor_id,
      typeofmeeting: list[index]?.typeofmeeting,
      time: list[index]?.time,
      date: list[index]?.date,
      fnsdate: list[index]?.fnsdate,
      verifiedbydoctor: true,
      verifiedbypatient: true,
    };
    axios
      .post(
        ` http://localhost:3000/api/appointments/updatebydoctor?id=${list[index]?.patient_doctor_id}`,
        databody
      )
      .then(function (response) {
        console.log(response);
        let emailparams = {
          from_name: session?.user?.name,
          to_name: doctor[index]?.name,
          email: doctor[index]?.email,
          email2: doctor[index]?.email,
          message: msg,
        };
        emailjs.send(
          "service_tgxtil9",
          "template_wu8slia",
          emailparams,
          "45iOpl98A5fWuxhEd"
        );
      });
  };
  const router = useRouter();
  const rejection = () => {
    let databody = {
      patient_doctor_id: list[index]?.patient_doctor_id,
      patient_id: list[index]?.patient_id,
      doctor_id: list[index]?.doctor_id,
      typeofmeeting: list[index]?.typeofmeeting,
      time: list[index]?.time,
      date: list[index]?.date,
      fnsdate: list[index]?.fnsdate,
      verifiedbydoctor: false,
      verifiedbypatient: true,
    };
    axios
      .delete(
        ` http://localhost:3000/api/appointments/updatebydoctor?id=${list[index]?.patient_doctor_id}`,
        databody
      )
      .then(function (response) {
        console.log(response);
        let emailparams = {
          from_name: session?.user?.name,
          to_name: doctor[index]?.name,
          email: doctor[index]?.email,
          email2: doctor[index]?.email,
          message: reject,
        };
        emailjs.send(
          "service_tgxtil9",
          "template_wu8slia",
          emailparams,
          "45iOpl98A5fWuxhEd"
        );

        handleoff();
      });
  };
  return (
    <div
      id="small-modal"
      tabindex="-1"
      className=" overflow-y-auto overflow-x-hidden backdrop-blur-lg  flex items-center justify-center fixed top-0 right-0 left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full max-w-4xl  h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative  bg-rose-100 rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Appointment Details of {doctor[index].name}
            </h3>
            <button
              onClick={() => {
                handleoff();
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
          <div className="p-6 ml-10 grid grid-cols-2 ">
            <img
              className=" p-8 ml-10 rounded-full  "
              src={doctor[index]?.photo_url}
            ></img>
            <div className="p-6 ">
              <div className="font-bold ">Patient`s information</div>
              <p className=" inline font-bold">
                <MdPerson className="inline"></MdPerson> Name :
              </p>{" "}
              <p className="inline"> {doctor[index]?.name}</p>
              <div>
                <p className=" inline font-bold">
                  <MdEmail className="inline"></MdEmail> Email:
                </p>{" "}
                <p className="inline"> {doctor[index]?.email}</p>
              </div>
              <div>
                <p className=" inline font-bold">
                  <MdPhone className="inline"></MdPhone> Phone No.:
                </p>{" "}
                <p className="inline"> {doctor[index]?.phone_no}</p>
              </div>
              <div>
                <div class="text-white hover:text-white border bg-green-800 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900">
                  Confirmed
                </div>
                <p className="flex items-center justify-center">
                  By the Patient
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="font-bold ">Appointment`s information</div>
              <div>
                <p className=" inline font-bold">
                  <MdApproval className="inline"></MdApproval> Type of
                  Appointment :
                </p>{" "}
                <p className="inline"> {list[index]?.typeofmeeting}</p>
              </div>
              <div>
                <p className=" inline font-bold">
                  <MdTimer className="inline"></MdTimer> Type of Time :
                </p>{" "}
                <p className="inline"> {list[index]?.date}</p>
              </div>
              <div>
                <p className="  inline font-bold">
                  <MdCalendarToday className="inline font-extrabold text-lg"></MdCalendarToday>{" "}
                  Day and Date :
                </p>{" "}
                <p className="inline"> {c[index]}</p>
                <div>
                  <p className="font-bold inline p-1">
                    {" "}
                    <ImPointRight className="inline" />
                    Reason For appointment :
                  </p>
                  {list[index]?.reasonforappointment}
                </div>
              </div>
            </div>
            <div className=" flex  flex-row justify-center items-center  gap-4">
              Waiting for Confirmation from the Doctor
              {/* {!list[index]?.verifiedbydoctor && (
                <div className="flex  flex-row justify-center items-center  gap-4">
                  <div className="font-bold text-gray-700">
                    Choose to Confirm the Appointmentss
                  </div>
                  <button
                    onClick={() => confirmation()}
                    type="button"
                    class="text-green-700  border border-green-700 hover:bg-green-700 hover:text-green-600 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                  >
                    <TiTick className=" bg-white rounded-full " />
                  </button>
                  <button
                    onClick={() => rejection()}
                    type="button"
                    class="text-red-700 border border-red-700 hover:bg-red-700 hover:text-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                  >
                    <ImCross className=" bg-white p-1 rounded-full " />
                  </button>
                </div>
              )} */}
              {list[index]?.verifiedbydoctor && (
                <div className="flex flex-col w-2/3">
                  <div class="text-white hover:text-white border w-full  bg-green-800 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900">
                    Confirmed
                  </div>
                  <p className="flex items-center justify-center">
                    By the Doctor
                  </p>
                  <button
                    onClick={() =>
                      router.push(
                        `/UserDashBoard/${session?.user?.id}/Appointment/${list[index]?.patient_doctor_id}`
                      )
                    }
                    className="text-white hover:text-white border w-full  bg-purple-800 border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
                  >
                    Appointment Page
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"></div>
        </div>
      </div>
    </div>
  );
}

export default SingleAppointment;
