import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Router, useRouter } from "next/router";
import DoctorvsPatient from "./DoctorvsPatient";
import MLvsPatient from "./MLvsPatient";

function Choice() {
  const router = useRouter();
  const [Doctor, setDoctor] = useState(false);
  const [DoctorPatient, setDoctorPatient] = useState(true);
  const [Patient, setPatient] = useState(false);
  const handleClick = () => {
    setPatient(true);
    setDoctorPatient(false);
  };
  return (
    <div className=" min-h-screen">
      {DoctorPatient && <DoctorvsPatient handleClick={handleClick} />}

      {Patient && <MLvsPatient />}
    </div>
  );
}

export default Choice;
