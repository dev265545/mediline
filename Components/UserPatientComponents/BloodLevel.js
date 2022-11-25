import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import asset from "../../public/blood-donation.png"
import Image from "next/image"
import moment from 'moment';

function BloodLevel({user}) {
  return (
    <div className="p-1">
      <div className="p-2 font-extrabold text-purple-900 text-2xl  font-mono">
        Blood Research
      </div>
      <div className=" px-10 shadow-2xl rounded-3xl bg-white">
        <div className="p-3 flex flex-row">
          <div className=" p-4 flex flex-cols gap-5 ">
            <div className="p-1 rounded-full bg-red-100">
              <Image src={asset} width={55} height={50} />
            </div>
            <div className="text-gray-400">
              Blood Type
              <div className="font-bold text-2xl text-purple-900">
                {user?.blood_group}
              </div>
            </div>
          </div>
          <div className="p-4 px-10 ">
            <div className="text-gray-400">Last Date</div>
            <div className="text-lg font-semibold text-purple-900">
              {moment(user?.hemoglobin?.lastchecked).format("D MMM YY ")}{" "}
            </div>
          </div>
        </div>
        <div className="p-1 grid grid-cols-3 gap-0">
          <hr class=" mx-auto w-full h-2 bg-purple-300  border-0 dark:bg-gray-700 opacity-60 rounded-l-full "></hr>
          <div className="shadow-lg shadow-purple-500">
            <hr class=" shadow-lg shadow-purple-700  mx-auto w-full h-2 bg-purple-900  border-0  dark:bg-gray-700  brightness-200 "></hr>
          </div>

          <hr class=" mx-auto w-full h-2 bg-purple-300  border-0  dark:bg-gray-700 rounded-r-full opacity-60 "></hr>
        </div>
        <div className=" flex flex-row items-center justify-center gap-24 ">
          <div className="items-start  font-thin text-purple-600"></div>
          <div className=" items-center text-sm text-purple-600 ">
            within normal limits
          </div>
          <div className="items-end justify-end font-thin text-purple-600"></div>
        </div>
        <div className="p-3 ">
          <div className=" hover:bg-purple-200 p-1 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            Details
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloodLevel