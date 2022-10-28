import React, { useState } from 'react'
import { MdEmail, MdPhoneAndroid } from 'react-icons/md'
import ForAppointementBooking from './ForAppointementBooking'

function Modal({modalhandle, doctor}) {
const [BookingModal,setBookingModal] = useState(false)
const handleonoff = ()=>{
    setBookingModal(false)
}
  return (
    <div
      id="extralarge-modal"
      tabindex="-1"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-7xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
              Dr. {doctor.name}
            </h3>
            <button
              onClick={modalhandle}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="extralarge-modal"
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
            <div className="flex flex-row p-1">
              <img src={doctor?.photo_url} />
              <div className="p-2">
                <p className=" font-bold leading-relaxed text-gray-500 dark:text-gray-400">
                  Dr. {doctor?.name}
                </p>
                <p className="   leading-relaxed text-gray-500 dark:text-gray-400">
                  <MdEmail className=" inline-block" />
                  {doctor?.email}
                </p>
                <p className="   leading-relaxed text-gray-500 dark:text-gray-400">
                  <MdPhoneAndroid className=" inline-block" />
                  {doctor?.phone}
                </p>
              </div>
            </div>
            <div className="flex flex-col p-3">
              <p className=" pt-4 text-2xl font-bold">
                Hospital/Clinic Information
              </p>
              <p className="pt-5  text-xl text-gray-600">
                {doctor?.hospitalname}
              </p>
              <p className="text-gray-600 pt-3 display-linebreak ">
                {doctor?.hospitaladdress}
              </p>
            </div>
            <div className="border bg-slate-100 border-white shadow-2xl  rounded-xl p-1">
              <p className="pt-4 font-bold text-xl">Information</p>
              <p className="text-gray-600 pt-1 display-linebreak ">
                {doctor?.info}
              </p>
            </div>
            <button
              onClick={() => setBookingModal(!BookingModal)}
              className=" bg-green-500 rounded-full p-2 text-white font-bold shadow border border-green-500"
            >
              {" "}
              Book an Appointment
            </button>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            {/* <button data-modal-toggle="extralarge-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-toggle="extralarge-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
          </div>
        </div>
        {BookingModal && (
          <ForAppointementBooking handleonoff={handleonoff} doctor={doctor} />
        )}
      </div>
    </div>
  );
}

export default Modal