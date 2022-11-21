import React, { useState } from 'react'

import moment from 'moment';
import Select from "react-select";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import axios from 'axios';

function AddEditSlot({handleoff,doctor}) {
     const [value, setValue] = useState("00:00 AM");

     
     let days = [];
     const daysRequired  =7
      const [timeoptions, settimeoptions] = useState();
     for (let i = 0; i < daysRequired; i++) {
       days.push(moment().add(i, "days").format("dddd  Do MMM"));
     }


   const options = [
     { value: "day1", label: days[0] },
     { value: "day2", label: days[1] },
     { value: "day3", label: days[2] },
     { value: "day4", label: days[3] },
     { value: "day5", label: days[4] },
     { value: "day6", label: days[5] },
     { value: "day7", label: days[6] },
   ];
   const[dayselected,setdaySelected]=useState()
   const handleChange = (selectedOption) => {
     setdaySelected(selectedOption.value);
      if (selectedOption.value === "day1") {
        settimeoptions(doctor?.Availableslotsfornext7days?.day1);

  
      }
      if (selectedOption.value === "day2") {
        settimeoptions(doctor?.Availableslotsfornext7days?.day2);
        
  
      }
      if (selectedOption.value === "day3") {
        settimeoptions(doctor?.Availableslotsfornext7days?.day3);
  
      }
      if (selectedOption.value === "day4") {
        settimeoptions(doctor?.Availableslotsfornext7days?.day4);
  
      }
      if (selectedOption.value === "day5") {
        settimeoptions(doctor?.Availableslotsfornext7days?.day5);
  
      }
      if (selectedOption.value === "day6") {
        settimeoptions(doctor?.Availableslotsfornext7days?.day7);
  
      }
      if (selectedOption.value === "day7") {
        settimeoptions(doctor?.Availableslotsfornext7days?.day7);
  
      }
            console.log(timeoptions);
           
   };
   let day1,day2,day3,day4,day5,day6,day7;
    const submit = () => {
      timeoptions.push(value)
      console.log(timeoptions);
       if (dayselected === "day1") {
        day1 = (timeoptions)
  
      }
      else{
      day1=(doctor?.Availableslotsfornext7days?.day1);
      }
        if (dayselected === "day2") {
          day2 = timeoptions;
        } else {
          day2 = doctor?.Availableslotsfornext7days?.day2;
        }
          if (dayselected === "day3") {
            day3 = timeoptions;
          } else {
            day4 = doctor?.Availableslotsfornext7days?.day3;
          }  if (dayselected === "day4") {
            day4 = timeoptions;
          } else {
            day4 = doctor?.Availableslotsfornext7days?.day4;
          }  if (dayselected === "day5") {
            day5 = timeoptions;
          } else {
            day5 = doctor?.Availableslotsfornext7days?.day5;
          }  if (dayselected === "day6") {
            day6 = timeoptions;
          } else {
            day6 = doctor?.Availableslotsfornext7days?.day6;
          }  if (dayselected === "day1") {
            day7 = timeoptions;
          } else {
            day7 = doctor?.Availableslotsfornext7days?.day7;
          }
      
           
   
 
        const databody = {
          day1: day1,
          day2: day2,
          day3: day3,
          day4: day4,
          day5: day5,
          day6: day6,
          day7: day7,
        };
        axios
          .post(
            ` http://localhost:3000/api/doctors/updateslot?uid=${doctor?.uid}`,
            databody
          )
          .then(function (response) {
            console.log(response);
          });
    };

  return (
    <div
      id="small-modal"
      tabindex="-1"
      className="  overflow-y-auto overflow-x-hidden backdrop-blur-lg flex items-center justify-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Add a Slot
            </h3>
            <button
              onClick={() => {
                handleoff();
              }}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="small-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-400">
              Select a Day from the next 7 days
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <Select
                  onChange={handleChange}
                  autoFocus={true}
                  options={options}
                />
              </p>
            </p>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
              
                placeholder="00:00 AM/PM"
                className="px-2 text-center appearance-none outline-none  rounded text-gray-800 w-1/3 bg-transparent"
                value={value}
              />
            </p>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              onClick={submit}
              data-modal-toggle="small-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                handleoff();
              }}
              data-modal-toggle="small-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEditSlot