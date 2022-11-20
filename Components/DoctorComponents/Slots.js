import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import moment from "moment"
import { MdOutlineDeleteOutline, MdOutlineEditAttributes, MdOutlineModeEditOutline, MdSettings } from "react-icons/md";

import axios from "axios";
import NewAppointment from "./NewAppointment";
import AddEditSlot from "./AddEditSlot";
import { CgAdd } from "react-icons/cg";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SlotGenerator({id}) {
  const [doctor, setdoctor] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/doctors?uid=${id}`).then((resp) => {
      setdoctor(resp.data.data);
    });
  }, [doctor,id]);
   const day1 = doctor?.Availableslotsfornext7days?.day1;
    const day2 = doctor?.Availableslotsfornext7days?.day2;
     const day3 = doctor?.Availableslotsfornext7days?.day3;
      const day4 = doctor?.Availableslotsfornext7days?.day4;
       const day5 = doctor?.Availableslotsfornext7days?.day5;
        const day6 = doctor?.Availableslotsfornext7days?.day6;
         const day7 = doctor?.Availableslotsfornext7days?.day7;
     
    let days = [];
    let daysRequired = 7;
const [DeleteModal,SetDeleteModal] = useState(false)
const [EditModal, SetEditModal] = useState(false);
const handleoff = ()=>{
  SetEditModal(!EditModal)
}
const deleteSlot = (index,slot,day)=>{
  if(DeleteModal){
    console.log(slot.slot);
    //  for (var i = 0; i < day[].length; i++) {
    //    if (arr[i] === slot.slot ) {
    //      arr.splice(i, 1);
    //      i--;
    //    }
    //  }

    if (day["day1"] === day1) {
      console.log(true);
       for (var i = 0; i < day["day1"].length; i++) {
         if (day["day1"][i] === slot.slot ) {
           day["day1"].splice(i, 1);
           i--;
         }
       }
      day1 = day["day1"];
    }
    if (day["day2"] === day2) {
      console.log(true);
      for (var i = 0; i < day["day2"].length; i++) {
        if (day["day2"][i] === slot.slot) {
          day["day2"].splice(i, 1);
          i--;
        }
      }
      day2 = day["day2"];
    }
    if (day["day3"] === day3) {
      console.log(true);
      for (var i = 0; i < day["day3"].length; i++) {
        if (day["day3"][i] === slot.slot) {
          day["day3"].splice(i, 1);
          i--;
        }
      }
      day3 = day["day3"];
    }
    if (day["day4"] === day4) {
      console.log(true);
      for (var i = 0; i < day["day4"].length; i++) {
        if (day["day4"][i] === slot.slot) {
          day["day4"].splice(i, 1);
          i--;
        }
      }
      day4 = day["day4"];
    }
    if (day["day5"] === day5) {
      console.log(true);
       for (var i = 0; i < day["day5"].length; i++) {
         if (day["day5"][i] === slot.slot) {
           day["day5"].splice(i, 1);
           i--;
         }
       }
      day5 = day["day5"];
    }
 if (day["day6"] === day6) {
   console.log(true);
   for (var i = 0; i < day["day6"].length; i++) {
     if (day["day6"][i] === slot.slot) {
       day["day6"].splice(i, 1);
       i--;
     }
   }
   day6 = day["day6"];
 }
 if (day["day7"] === day7) {
   console.log(true);
   for (var i = 0; i < day["day7"].length; i++) {
     if (day["day7"][i] === slot.slot) {
       day["day7"].splice(i, 1);
       i--;
     }
   }
   day7 = day["day7"];
 }
    const databody = {
      day1: day1 ,
      day2:  day2 ,
      day3:  day3 ,
      day4:  day4 ,
      day5:  day5 ,
      day6: day6 ,
      day7:day7 
    };
     axios
       .post(` http://localhost:3000/api/doctors/updateslot?uid=${doctor?.uid}`, databody)
       .then(function (response) {
         console.log(response);
       });
  }
  
}


    for (let i = 0; i < daysRequired; i++) {
      days.push(moment().add(i, "days").format("dddd  Do MMM"));
    }

  return (
    <div className="p-4 w-full   bg-white  rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className=" p-1 flex justify-end">
        {" "}
        <CgAdd
          onClick={() => {
            SetEditModal(!EditModal);
          }}
          className="text-3xl hover:bg-gradient-to-tr text-purple-900  "
        />
        <MdOutlineDeleteOutline
          onClick={() => {
            SetDeleteModal(!DeleteModal);
          }}
          className="text-3xl hover:bg-gradient-to-tr text-purple-900  "
        />
      </div>

      <Tab.Group>
        {DeleteModal && <div>DELETE MODE IS ON</div>}
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
            {doctor?.Availableslotsfornext7days?.day1.map((slot, index) => (
              <button
                onClick={() => {
                  deleteSlot({ index }, { slot }, { day1 });
                }}
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.Availableslotsfornext7days?.day2.map((slot, index) => (
              <button
                onClick={() => {
                  deleteSlot({ index }, { slot }, { day2 });
                }}
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.Availableslotsfornext7days?.day3.map((slot, index) => (
              <button
                onClick={() => {
                  deleteSlot({ index }, { slot }, { day3 });
                }}
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.Availableslotsfornext7days?.day4.map((slot, index) => (
              <button
                onClick={() => {
                  deleteSlot({ index }, { slot }, { day4 });
                }}
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.Availableslotsfornext7days?.day5.map((slot, index) => (
              <button
                onClick={() => {
                  deleteSlot({ index }, { slot }, { day5 });
                }}
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.Availableslotsfornext7days?.day6.map((slot, index) => (
              <button
                onClick={() => {
                  deleteSlot({ index }, { slot }, { day6 });
                }}
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
          <Tab.Panel className=" grid grid-cols-4 gap-3 pt-5 ">
            {doctor?.Availableslotsfornext7days?.day7.map((slot, index) => (
              <button
                onClick={() => {
                  deleteSlot({ index }, { slot }, { day7 });
                }}
                key={index}
                className="text-white shadow-lg rounded-full p-1  border border-blue-600 bg-blue-400 "
              >
                {slot}
              </button>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* <SlotDeleteModal modaltoggle= {modaltoggle} /> */}
      { EditModal &&<AddEditSlot handleoff={handleoff} doctor = {doctor} />}
    </div>

  );
}

export default SlotGenerator;
