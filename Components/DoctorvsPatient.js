import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image"
import asset from "../public/3763028.jpg";
import asset2 from "../public/4990224.jpg";

function DoctorvsPatient({ handleClick }) {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-white">
      <div className="p-10">
        <Image
          className=" invisible lg:visible md:visible "
          height={800}
          width={600}
          src={asset}
        />
      </div>
      <div></div>
      <div class=" z-50 min-h-screen flex items-center items-center  px-16">
        <div class="relative w-full max-w-lg  ">
          <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div class="m-8 relative space-y-4">
            <div className=" flex flex-row gap-10 rounded-full ">
              <button
                className=" border  border-solid border-purple-100 bg-purple-200 opacity-70 00 rounded-full   w-64 h-64 "
                onClick={() =>
                  signIn("google", { callbackUrl: "/DoctorDashBoard" })
                }
              >
                <p className="font-extrabold text-4xl opacity-100 ">Doctor</p>
              </button>
              <button
                className=" border border-yellow-100  border-solid  bg-yellow-100 rounded-full opacity-70  w-64 h-64 "
                onClick={handleClick}
              >
                <p className="font-extrabold text-4xl opacity-100 ">Patient</p>
              </button>
            </div>
          </div>
  
        </div>
      </div>
      <div></div>
      <div className="p-10">
        <Image
          className=" invisible lg:visible md:visible  "
          height={600}
          width={600}
          src={asset2}
        />
      </div>
    </div>
  );
}

export default DoctorvsPatient;
