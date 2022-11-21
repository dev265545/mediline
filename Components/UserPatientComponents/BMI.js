import { ArrowDownIcon } from '@heroicons/react/outline';
import {AiFillCaretDown} from "react-icons/ai"
import React from 'react'

function BMI() {
  return (
    <div className="p-1">
      <div className="p-2 font-extrabold text-purple-900 text-2xl  font-mono">
        Body Mass Index
      </div>
      <div className=" shadow-2xl rounded-3xl bg-white">
        <h1 className="p-2 font-extrabold text-purple-900 text-2xl  font-mono  "></h1>
        <div className="p-3 grid grid-cols-2 gap-7 ">
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-xl ">
            <div className="text-sm">
              {" "}
              <AiFillCaretDown className="text-purple-800" />
            </div>
            <div className="grid grid-cols-5 gap-2 p-1 mt-3 ">
              <p className="text-slate-300 text-3xl">70</p>
              <p className="text-slate-300 text-3xl">71</p>
              <p className="font-semibold text-3xl text-purple-900">72</p>
              <p className="text-slate-300 text-3xl">73</p>{" "}
              <p className="text-slate-300 text-3xl">74</p>
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
                <p className="text-slate-300 text-3xl">179</p>
                <p className="font-semibold text-3xl text-purple-900">180</p>
                <p className="text-slate-300 text-3xl">181</p>{" "}
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
          <div className="items-start  font-thin text-purple-600">UnderWeight</div>
          <div className=" items-center text-purple-600 ">Normal</div>
          <div className="items-end justify-end font-thin text-purple-600">
            OverWeight
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMI