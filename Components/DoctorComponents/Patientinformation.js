import React from 'react'
import Image from "next/image"
import { AiFillCaretDown } from 'react-icons/ai';
import { format, parse, parseISO } from 'date-fns';
import moment from 'moment/moment';
import axios from 'axios';

function Patientinformation({patient}) {
  
   
    // console.log(format(parseISO(patient?.weight?.lastchecked), "MMM-yyyy"))
  return (
    <div className="p-1">
      <div className=" flex items-center justify-center p-2 font-extrabold text-purple-900 text-2xl  font-mono">
        Pateint Information
      </div>
      <div className=" shadow-2xl rounded-3xl bg-white flex flex-col">
        <h1 className="p-2 font-extrabold text-purple-900 text-2xl  font-mono  "></h1>
        <div className="flex flex-col items-center justify-center">
          <Image
            width={100}
            height={100}
            className="w-50 p-3 rounded-full"
            src={patient?.photo_url}
          />
        </div>
        <div className="flex flex-col items-center justify-center font-bold text-2xl">
          {patient?.name}{" "}
          <div className=" font-thin text-lg ">Male,{patient?.age} yrs old</div>
        </div>
        <hr className=" mx-auto w-1/2  h-0.5 bg-black  border-0 "></hr>
        <div className=" p-5 flex flex-col items-center justify-center ">
          <div className="font-semibold"> Contact Information</div>
          <div className=" p-3 flex flex-col items-center justify-center">
            <div className="font-semibold ">Address </div>
            <p>
              {patient?.address} {patient?.city} {""}
            </p>
          </div>
          <div className=" p-1 flex flex-col items-center justify-center">
            <div className="font-semibold ">Phone No. </div>
            <p>{patient?.phone_no}</p>
          </div>
          <div className=" p-1 flex flex-col items-center justify-center">
            <div className="font-semibold ">Email </div>
            <p>{patient?.email}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-red-200 rounded-lg shadow-md shadow-red-200 p-2 ">
              <div className="p-1 text-red-600 font-semibold mr-4 ">
                Blood Pressure
              </div>
              <div>
                <hr className=" shadow-lg shadow-red-900 mx-auto w-full h-2 rounded-full bg-red-300  border-0"></hr>
              </div>

              <div className="text-red-600 brightness-125 font-semibold">
                {patient?.pressure?.pressure}{" "}
              </div>
              <div className="text-gray-500">
                Last checked{" "}
                {moment(patient?.pressure?.lastchecked).format("mm MMM YY ")}{" "}
              </div>
            </div>
            <div className="bg-purple-200 rounded-lg shadow-md shadow-purple-200 p-2 ">
              <div className="p-1 text-purple-900 font-semibold mr-4 ">
                Body Temperature
              </div>
              <div>
                <hr className=" shadow-lg shadow-purple-900 mx-auto w-full h-2 rounded-full bg-purple-300  border-0"></hr>
              </div>

              <div className="text-purple-800 brightness-125 font-semibold">
                {patient?.temperature?.temperature}{" "}
              </div>
              <div className="text-gray-500">
                Last checked{" "}
                {moment(patient?.temperature?.lastchecked).format("mm MMM YY ")}{" "}
              </div>
            </div>
            <div className="bg-blue-200 rounded-lg shadow-md shadow-blue-200 p-2 ">
              <div className="p-1 text-blue-900 font-semibold mr-4 ">
                Body Weight
              </div>
              <div>
                <hr className=" shadow-lg shadow-blue-900 mx-auto w-full h-2 rounded-full bg-blue-300  border-0"></hr>
              </div>

              <div className="text-blue-800 brightness-125 font-semibold">
                {patient?.weight?.weight}{" "}
              </div>
              <div className="text-gray-500">
                Last checked{" "}
                {moment(patient?.weight?.lastchecked).format("mm MMM YY ")}{" "}
              </div>
            </div>
            <div className="bg-yellow-200 rounded-lg shadow-md shadow-yellow-200 p-2 ">
              <div className="p-1 text-yellow-600 font-semibold mr-4 ">
                Body Height
              </div>
              <div>
                <hr className=" shadow-lg shadow-yellow-900 mx-auto w-full h-2 rounded-full bg-yellow-300  border-0"></hr>
              </div>

              <div className="text-yellow-800 brightness-125 font-semibold">
                {patient?.height?.height}
              </div>
              <div className="text-gray-500">
                Last checked{"  "}
                {moment(patient?.height?.lastchecked).format("mm MMM YY ")}
              </div>
            </div>
            <div className="bg-teal-200 rounded-lg shadow-md shadow-teal-200 p-2 ">
              <div className="p-1 text-teal-600 font-semibold mr-4 ">
                Blood Level
              </div>
              <div className='text-red-500 font-semibold'>
                {patient?.blood_group}
                <hr className=" shadow-lg shadow-teal-900 mx-auto w-full h-2 rounded-full bg-teal-300  border-0"></hr>
              </div>

              <div className="text-teal-600 brightness-125 font-semibold">
                {patient?.hemoglobin?.hemoglobin}{" "}
              </div>
              <div className="text-gray-500">
                Last checked{" "}
                {moment(patient?.hemoglobin?.lastchecked).format("mm MMM YY ")}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patientinformation