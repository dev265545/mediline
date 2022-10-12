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
    <div>
      {DoctorPatient && (
        <button
          onClick={() => signIn("google", { callbackUrl: "/DoctorDashBoard" })}
        >
          Doctor
        </button>
      )}
      {DoctorPatient && (
        <button
          onClick={() => {
            setPatient(true);
          }}
        >
          patient
        </button>
      )}

      {Patient && (
        <button
          onClick={() => signIn("google", { callbackUrl: "/UserDashBoard" })}
        >
          Look for Doctors Basically to loginpage
        </button>
      )}
      {Patient && (
        <button onClick={() => router.push("/DiseasePredictor")}>
          ML THINGY
        </button>
      )}
    </div>
  );
}

export default Choice;
