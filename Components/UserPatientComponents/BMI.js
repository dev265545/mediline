import { ArrowDownIcon } from '@heroicons/react/outline';
import {AiFillCaretDown} from "react-icons/ai"
import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"

function BMI({user}) {
  console.log(user)
  const bmi = parseInt(user?.weight?.weight)/(parseInt(user?.height?.height)*parseInt(user?.height?.height))*100*100
  let category ;
  if( bmi >18.5 && bmi < 25){
      category = "Normal"
  }
   if (bmi > 25) {
     category = "OverWeight";
   }
      if (bmi < 18.5) {
        category = "UnderWeight";
      }



  return (
    <div className="p-1">
      <div className="p-2 font-extrabold text-purple-900 text-2xl  font-mono">
        Body Mass Index
      </div>
      <div className=" shadow-2xl rounded-3xl bg-white">
        <h1 className=" flex justify-end items-end p-2 font-extrabold text-purple-900 text-2xl  font-mono  ">
          <BsThreeDotsVertical />
        </h1>
        <div className="p-3 grid grid-cols-2 gap-7 ">
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-xl ">
            <div className="text-sm">
              {" "}
              <AiFillCaretDown className="text-purple-800" />
            </div>
            <div className="grid grid-cols-5 gap-2 p-1 mt-3 ">
              <p className="invisible lg:visible text-slate-300 text-3xl">
                {" "}
                {parseInt(user?.weight?.weight) - 2}{" "}
              </p>
              <p className="text-slate-300 text-3xl invisible lg:visible">
                {" "}
                {parseInt(user?.weight?.weight) - 1}
              </p>
              <p className="font-semibold text-3xl text-purple-900 ">
                {user?.weight?.weight}
              </p>
              <p className="text-slate-300 text-3xl invisible lg:visible">
                {" "}
                {parseInt(user?.weight?.weight) + 1}{" "}
              </p>{" "}
              <p className="text-slate-300 text-3xl invisible lg:visible">
                {" "}
                {parseInt(user?.weight?.weight) + 2}{" "}
              </p>
            </div>
            <div className="font-semibold text-xl text-purple-900 opacity-70 mb-3">
              kg
            </div>
          </div>
          <div className="border border-gray-300 rounded-xl">
            <div className="flex flex-col items-center justify-center rounded-xl">
              <div className="text-sm">
                {" "}
                <AiFillCaretDown className="text-purple-800" />
              </div>
              <div className="grid grid-cols-3 gap-4 p-1 mt-3 ">
                <p className="text-slate-300 text-3xl">
                  {parseInt(user?.height?.height) - 1}{" "}
                </p>
                <p className="font-semibold text-3xl text-purple-900">
                  {parseInt(user?.height?.height)}{" "}
                </p>
                <p className="text-slate-300 text-3xl">
                  {parseInt(user?.height?.height) + 1}{" "}
                </p>{" "}
                {/* <p className="text-slate-300 text-3xl">74</p> */}
              </div>
              <div className="font-semibold text-xl text-purple-900 opacity-70 mb-3">
                cm
              </div>
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
        <div className=" flex flex-row items-center justify-center gap-10 lg:gap-24 pb-5 mb-4 ">
          {category === "UnderWeight" && (
            <div className="items-start  font-thin text-purple-600">
              UnderWeight
            </div>
          )}
          {category === "Normal" && (
            <div className=" items-center text-purple-600 ">
              Within Normal Limits
            </div>
          )}
          {category === "OverWeight" && (
            <div className="items-end justify-end font-thin text-purple-600">
              OverWeight
            </div>
          )}
        </div>
        <div className="text-purple-600 p-1  mt-1 flex items-center justify-center">
          {" "}
          BMI : {bmi.toFixed(3)}
        </div>
        <div className="text-purple-600 p-1  mt-1 flex items-center justify-center">
          {" "}
          Last Updated :{user?.weight?.lastchecked.substring(0, 10)}
        </div>
      </div>
    </div>
  );
}

export default BMI