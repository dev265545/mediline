import React from 'react'

function AppointmentInformation({appointment}) {
    console.log(appointment)
  return (
    <div className="p-1">
      <div className=" flex items-center justify-center p-2 font-extrabold text-purple-900 text-2xl  font-mono">
        Appointment Information
      </div>
      <div className=" shadow-2xl rounded-3xl bg-white flex flex-col">
        <h1 className="p-2 font-extrabold text-purple-900 text-2xl  font-mono  "></h1>
        <div className="flex flex-col items-center justify-center"></div>
        <div className="flex flex-col items-center justify-center font-bold text-2xl">
          {appointment?.typeofmeeting}
          <div className=" font-thin text-lg ">
            {appointment?.patient_doctor_id}
          </div>
        </div>
        <hr className=" mx-auto w-1/2  h-0.5 bg-black  border-0 "></hr>
        <div className=" p-5 flex flex-col items-center justify-center ">
          <div className="font-semibold"> Information</div>
          <div className=" p-1 flex flex-col items-center justify-center">
            <div className="font-semibold ">Day and Date </div>
            <p>{appointment?.fnsdate}</p>
          </div>
          <div className="  flex flex-col items-center justify-center">
            <div className="font-semibold ">Time </div>
            <p>{appointment?.date}</p>
            <div className="font-semibold ">Reason for Appointment </div>
            <p>{appointment?.reasonforappointment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentInformation