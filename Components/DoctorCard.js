/* eslint-disable @next/next/no-img-element */
import React from "react";

import { FaPhone,  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function DoctorCard({ doctor }) {
  return (
    <a
      href="#"
      class="flex flex-col p-2 items-center w-full bg-white rounded-lg border border-gray-300 shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 "
    >
      <img
        class=" h-20 rounded-full md:h-auto md:w-48 md:rounded-full "
        src={doctor.photo_url}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {doctor.name}
        </h5>
        <div class=" font-normal text-gray-700  ">
          <div className="flex flex-row gap-2">
            <div className="inline-block flex flex-row gap-1">
              <MdEmail className=" text-xs inline-block " />
              <p className=" inline-block  font-light text-xs ">
                {doctor.email}
              </p>
            </div>

            <div className="inline-block flex flex-row gap-1 ">
              <FaPhone className=" text-xs inline-block " />
              <p className=" inline-block  font-light text-xs ">
                {doctor.email}
              </p>
            </div>
          </div>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </div>
      </div>
    </a>
  );
}

export default DoctorCard;
