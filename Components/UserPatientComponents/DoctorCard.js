/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";

import { FaAddressBook, FaAddressCard, FaHospital, FaPhone,  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Modal from "./Modal";

function DoctorCard({ doctor }) {
  const [modal, setmodal] = useState(false)
  const onclickmodal =()=>{
    setmodal(!modal)
  }
  return (
    <>
      <a
        href="#"
        className="flex flex-col p-2 items-center w-full bg-white rounded-lg border border-gray-300 shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 "
      >
        <img
          className=" h-20 rounded-full md:h-auto md:w-48 md:rounded-full "
          src={doctor.photo_url}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {doctor?.name}
          </h5>
          <div className=" font-normal text-gray-700  ">
            <div className="flex flex-row gap-2">
              <div className="inline-block flex flex-row gap-1">
                <MdEmail className=" text-xs inline-block " />
                <p className=" inline-block  font-light text-xs ">
                  {doctor?.email}
                </p>
              </div>

              <div className="inline-block flex flex-row gap-1 ">
                <FaPhone className=" text-xs inline-block " />
                <p className=" inline-block  font-light text-xs ">
                  {doctor?.phone}
                </p>
              </div>
            </div>
            <div className=" flex flex-row gap-1 pt-3 ">
              <FaHospital className=" text-base inline-block " />

              <p className=" inline-block  font-bold text-base ">
                {doctor?.hospitalname}
              </p>
            </div>
            <div>
              <p className="text-gray-700 pt-2">
                <FaAddressBook /> <p className="text-sm font-semibold" > Hospital Address</p>
                <p className="text-sm text-gray-600">
                  {doctor?.hospitaladdress}
                </p>
              </p>
              <p className="text-sm font-bold ">Specialization  </p>
              <p className="text-gray-800 text-sm ">{doctor?.Specialization}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setmodal(true)}
          className="py-2 px-4 text-3xl bg-transparent text-blue-600 font-semibold border border-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >
          +
        </button>
        {modal && <Modal modalhandle={onclickmodal} doctor={doctor} />}
      </a>
    </>
  );
}

export default DoctorCard;
