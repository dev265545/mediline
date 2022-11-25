import React from "react";
import { Router, useRouter } from "next/router";
import { signIn } from "next-auth/react";
import asset2 from "../public/sick-female.svg";
import asset from "../public/415.jpg";
import Image from "next/image";
function MLvsPatient() {
  const router = useRouter();
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-row justify-center items-center">
      {" "}
      <div className="p-1">
        <Image
          className=" invisible lg:visible md:visible rounded-full "
          height={400}
          width={400}
          src={asset}
        />
      </div>
      <button
        className="  blob  font-extrabold text-4xl p-3"
        onClick={() => signIn("google", { callbackUrl: "/UserDashBoard" })}
      >
        Search for Doctors
      </button>
      <button
        className=" blob2 font-extrabold text-4xl text-white p-3"
        onClick={() => router.push("/DiseasePredictor")}
      >
        Disease Predictor
      </button>
      <div className="p-1">
        <Image
          className=" invisible lg:visible md:visible rounded-full  "
          height={600}
          width={600}
          src={asset2}
        />
      </div>
    </div>
  );
}

export default MLvsPatient;
