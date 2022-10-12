import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Router, useRouter } from "next/router";

function Choice() {
  const router = useRouter();
  const [Doctor, setDoctor] = useState(false);
  const [DoctorPatient, setDoctorPatient] = useState(true);
  const [Patient, setPatient] = useState(false);
  const handleClick = () => {
    setDoctor(true);
    setDoctorPatient(false);
  };
  return (
    <div className="p-3 grid grid-cols-2 gap-3">
      {/* make a new component */}
      {DoctorPatient && (
        <button
          className=" border  border-solid border-black bg-purple-400 rounded-t-full rounded-b-full  p-4"
          onClick={() => signIn("google", { callbackUrl: "/DoctorDashBoard" })}
        >
          Doctor
        </button>
      )}
      {DoctorPatient && (
        <button
          className=" border  border-solid border-black bg-green-400 rounded-t-full rounded-b-full  p-4"
          onClick={() => {
            setPatient(true);
            setDoctorPatient(false);
          }}
        >
          patient
        </button>
      )}
      {/* // make a new component */}
      {Patient && (
        <button
          className=" border  border-solid border-black bg-pink-400 rounded-t-full rounded-b-full  p-4"
          onClick={() => signIn("google", { callbackUrl: "/UserDashBoard" })}
        >
          Look for Doctors Basically to loginpage
        </button>
      )}
      {Patient && (
        <button
          className=" border  border-solid border-black bg-orange-400 rounded-t-full rounded-b-full  p-4"
          onClick={() => router.push("/DiseasePredictor")}
        >
          ML THINGY
        </button>
      )}
    </div>
  );
}

export default Choice;
