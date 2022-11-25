import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

function LabTest({ isOpen, closeModal, openModal, appointment }) {
  const getdata = async () => {
    setprescription(appointment?.test);

    let urllist = prescreption;
    let x = {
      testname: medname,
      category: dosage,
      Duedate: noofdays,
      reason: quantity,
      instructiontopatient: instructiontopatient,
      labinfo : labinfo
    };
    urllist.push(x);

    setprescription(urllist);
  };

  const [prescreption, setprescription] = useState();
  useEffect(() => {
    setprescription(appointment?.test);
  }, [appointment?.test]);
  console.log(prescreption);
  const [medname, setname] = useState("");
  const [dosage, setdosage] = useState("");
  const [noofdays, setnoofdays] = useState("");
  const [quantity, setquantity] = useState("");
   const [labinfo, setlabinfo] = useState("");
const [instructiontopatient, setinstructiontopatient] = useState("");
  const confirmation = () => {
    getdata();
    console.log(prescreption);
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
      documents:appointment?.documents ,
      test: prescreption,
      reasonforappointment: appointment?.reasonforappointment,
      prescription: appointment?.prescreption,
    };
    axios
      .post(
        ` http://localhost:3000/api/appointments/updatebydoctor?id=${appointment.patient_doctor_id}`,
        databody
      )
      .then(function (response) {
        console.log(response);
        setname("");
        setdosage("");
        setquantity("");
        setnoofdays("");
        setlabinfo("")
        setinstructiontopatient("")
        
        closeModal();
      });
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-2xl "
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add a Lab Test
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 border-t pt-2">
                    Lab Name
                  </p>
                  <input
                    onChange={(e) => setname(e.target.value)}
                    value={medname}
                  ></input>
                  <p className="text-sm text-gray-500 border-t pt-2">
                    Category
                  </p>
                  <input
                    onChange={(e) => setdosage(e.target.value)}
                    value={dosage}
                  ></input>
                  <p className="text-sm text-gray-500 border-t pt-2">
                    Due Date
                  </p>
                  <input
                    onChange={(e) => setnoofdays(e.target.value)}
                    value={noofdays}
                  ></input>
                  <p className="text-sm text-gray-500 border-t pt-2">Reason</p>
                  <textarea
                    className="rounded-2xl"
                    onChange={(e) => setquantity(e.target.value)}
                    value={quantity}
                  />
                  <p className="text-sm text-gray-500 border-t pt-2">
                    Lab Info
                  </p>
                  <textarea
                    className="rounded-2xl"
                    onChange={(e) => setlabinfo(e.target.value)}
                    value={labinfo}
                  />
                  <p className="text-sm text-gray-500 border-t pt-2">
                    Instructions to patient if any
                  </p>
                  <textarea
                    className="rounded-2xl"
                    onChange={(e) => setinstructiontopatient(e.target.value)}
                    value={instructiontopatient}
                  />
                </div>

                <div className="flex flex-row gap-56 mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 duration-300"
                    onClick={confirmation}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default LabTest;
