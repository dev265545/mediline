import Select from "react-select";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { uuid } from "uuidv4";
import { format, startOfToday } from "date-fns";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NewAppointmentModal({ isOpen ,openModal,closeModal, doctor }) {
  const { data: session } = useSession();

  let days = [];
  let arrayforfns = [];
  let daysRequired = 7;
  const today = format(startOfToday(), "dddd,MMM,yyyy");
  console.log(today);
  for (let i = 0; i < daysRequired; i++) {
    days.push(moment().add(i, "days").format("dddd Do MMM"));
    arrayforfns.push(
      new Date(
        moment().add(i, "days").format("yyyy"),
        moment().add(i, "days").format("MM") - 1,
        moment().add(i, "days").format("D")
      )
    );
  }
  console.log(days);
  console.log(arrayforfns);
  const options = [
    { value: "day1", label: days[0] },
    { value: "day2", label: days[1] },
    { value: "day3", label: days[2] },
    { value: "day4", label: days[3] },
    { value: "day5", label: days[4] },
    { value: "day6", label: days[5] },
    { value: "day7", label: days[6] },
  ];
  let optionsslots = [];
  const [timeoptions, settimeoptions] = useState();
  const [ patient_id,setpatient_id]= useState()

  const [selectedday, SetSelectedDay] = useState("day1");
  const [selectedtime, SetSelectedTime] = useState("");
  const handleChangetime = (selectedOption) => {
    console.log(selectedOption.value);
    SetSelectedDay(selectedOption.value);
  };
  const [dateFNS, setdatefns] = useState();
  const handleChange = (selectedOption) => {
    console.log(selectedOption.value);
    SetSelectedTime(selectedOption.value);
    if (selectedOption.value === "day1") {
      settimeoptions(doctor?.Availableslotsfornext7days?.day1);
      console.log(timeoptions);
      setdatefns(arrayforfns[0]);
    }
    if (selectedOption.value === "day2") {
      settimeoptions(doctor?.Availableslotsfornext7days?.day2);
      console.log(timeoptions);
      setdatefns(arrayforfns[1]);
    }
    if (selectedOption.value === "day3") {
      settimeoptions(doctor?.Availableslotsfornext7days?.day3);
      console.log(timeoptions);
      setdatefns(arrayforfns[2]);
    }
    if (selectedOption.value === "day4") {
      settimeoptions(doctor?.Availableslotsfornext7days?.day4);
      console.log(timeoptions);
      setdatefns(arrayforfns[3]);
    }
    if (selectedOption.value === "day5") {
      settimeoptions(doctor?.Availableslotsfornext7days?.day5);
      console.log(timeoptions);
      setdatefns(arrayforfns[4]);
    }
    if (selectedOption.value === "day6") {
      settimeoptions(doctor?.Availableslotsfornext7days?.day7);
      console.log(timeoptions);
      setdatefns(arrayforfns[5]);
    }
    if (selectedOption.value === "day7") {
      settimeoptions(doctor?.Availableslotsfornext7days?.day7);
      console.log(timeoptions);
      setdatefns(arrayforfns[6]);
    }
  };

  console.log(selectedday);
  console.log(optionsslots)
  const unique_id = uuid();
  const [reasonforappointment, setforappointment] = useState("");
  const small_id = unique_id.slice(0, 8);
  const handleconfirm = () => {
    let databody = {
      patient_doctor_id: small_id,
      patient_id: patient_id,
      doctor_id: doctor?.uid,
      typeofmeeting: "Consultation",
      time: selectedtime,
      date: selectedday,
      fnsdate: dateFNS,
      verifiedbydoctor: true,
      verifiedbypatient: true,
      advice: "",
      notes: "",
      documents: [],
      test: [],
      reasonforappointment: reasonforappointment,
      prescription: [],
    };
    axios.post(`/api/appointments`, databody).then(function (response) {
      console.log(response);
    });

 closeModal()
  };
  useEffect(() => {
    for (var i = 0; i < timeoptions?.length; i++) {
      optionsslots[i] = { value: timeoptions[i], label: timeoptions[i] };
    }
    console.log(optionsslots);
  }, [timeoptions]);

  return (
    <div
      id="small-modal"
      tabindex="-1"
      className="  overflow-y-auto overflow-x-hidden fixed top-0 backdrop-blur-3xl flex items-center justify-center right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Confirm your Booking
            </h3>
            <button
              onClick={() => {
                closeModal();
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
            <div>
              <label
                for="message"
                class="block text-lg mb-2  font-medium text-gray-900"
              >
                Patient id
              </label>
              <input
                onChange={(e) => {
                  setpatient_id(e.target.value);
                }}
                value={patient_id}
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Ask for Patient ID "
              ></input>
            </div>
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
              Choose A time from the available slots These slots are not final
              can change as per doctor&apos;s requirement
              <Select
                onChange={handleChange}
                autoFocus={true}
                options={options}
              />
              <label
                for="slots"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select a Time Slot
              </label>
              <Select onChange={handleChangetime} options={optionsslots} />
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                This Booking is not final can change as per doctor&apos;s
                requirement
              </p>
            </p>
            <div>
              <label
                for="message"
                class="block text-lg mb-2  font-medium text-gray-900"
              >
                Reason for Appointment
              </label>
              <textarea
                onChange={(e) => {
                  setforappointment(e.target.value);
                }}
                value={reasonforappointment}
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Write down the reasons for appointment"
              ></textarea>
            </div>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              onClick={() => {
                handleconfirm();
              }}
              data-modal-toggle="small-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                closeModal();
              }}
              data-modal-toggle="small-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAppointmentModal;
