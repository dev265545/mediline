import React from "react";
import { Router, useRouter } from "next/router";
import { signIn } from "next-auth/react";
function MLvsPatient() {
  const router = useRouter();
  return (
    <div>
      {" "}
      <button
        className=" border  border-solid border-black bg-pink-400 rounded-t-full rounded-b-full  p-4"
        onClick={() => signIn("google", { callbackUrl: "/UserDashBoard" })}
      >
        Look for Doctors Basically to loginpage
      </button>
      <button
        className=" border  border-solid border-black bg-orange-400 rounded-t-full rounded-b-full  p-4"
        onClick={() => router.push("/DiseasePredictor")}
      >
        ML THINGY
      </button>
    </div>
  );
}

export default MLvsPatient;
