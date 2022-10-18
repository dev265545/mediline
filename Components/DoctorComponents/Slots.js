import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import moment from "moment"
import { MdOutlineEditAttributes, MdSettings } from "react-icons/md";
import { CgAdd, CgEditContrast } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { BiEdit, BiPencil } from "react-icons/bi";
import SlotEditModal from "./SlotEditModal";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SlotGenerator({doctor}) {
   
    let days = [];
    let daysRequired = 7;
const [EditModal,SetEditModal] = useState(false)
const modaltoggle = ()=>{
  SetEditModal(!EditModal);
}

    for (let i = 0; i < daysRequired; i++) {
      days.push(moment().add(i, "days").format("dddd  Do MMM"));
    }

  
  return (
    <div class="p-4 w-full  bg-slate-200   rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className=" p-1 flex justify-end">
        {" "}
        <CgAdd
          onClick={(e) => {modaltoggle()}}
          className="text-3xl hover:bg-gradient-to-tr text-purple-900  "
        />
      </div>
      <Tab.Group>
        {/* TO DO -database actions onclick - delete the time slot, inset a new slot  disable all the slots a disable a  day */}
        <Tab.List className="flex justify-between  ">
          {days.map((day, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg p-1 py-2.5 text-sm font-medium leading-5 text-white",
                  "ring-white  ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",
                  selected
                    ? " shadow bg-red-400"
                    : "text-gray-600 hover:bg-white/[0.12] hover:text-black"
                )
              }
            >
              {day}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.slotsfornext7days?.day1.map((slot, index) => (
              <button
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.slotsfornext7days?.day2.map((slot, index) => (
              <button
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.slotsfornext7days?.day3.map((slot, index) => (
              <button
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.slotsfornext7days?.day4.map((slot, index) => (
              <button
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.slotsfornext7days?.day5.map((slot, index) => (
              <button
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.slotsfornext7days?.day6.map((slot, index) => (
              <button
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.slotsfornext7days?.day7.map((slot, index) => (
              <button
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* <SlotEditModal modaltoggle= {modaltoggle} /> */}
    </div>
  );
}

export default SlotGenerator;
