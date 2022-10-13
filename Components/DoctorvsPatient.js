import React from "react";

function DoctorvsPatient({ handleClick }) {
  return (
    <div className="p-3 grid grid-cols-2 gap-3">
      <button
        className=" border  border-solid border-black bg-purple-400 rounded-t-full rounded-b-full  p-4"
        onClick={() => signIn("google", { callbackUrl: "/DoctorDashBoard" })}
      >
        Doctor
      </button>
      <button
        className=" border  border-solid border-black bg-green-400 rounded-t-full rounded-b-full  p-4"
        onClick={handleClick}
      >
        patient
      </button>
    </div>
  );
}

export default DoctorvsPatient;
