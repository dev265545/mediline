import React, { useEffect, useState } from "react";

import axios from "axios";
import moment from "moment";

function ListofAppointments({ user }) {
  const [theArray, setTheArray] = useState([]);


  const [list, setList] = useState([]);

  let AMRAS = [];
  useEffect(()=>{
     axios
       .get(
         `http://localhost:3000/api/appointments/forpatient?id=${user?.uid}`
       )
       .then((resp) => {
         setList(resp.data.data);
       });
  
  },[user?.uid])
  console.log(list)

    useEffect(()=>{
      setTheArray([])
    
  for (let i = 0; i < list?.length; i++) {
    const x = list[i]?.doctor_id;
    axios
      .get(`http://localhost:3000/api/doctors?uid=${x}`)
      .then((resp) => setTheArray((prevArray) => [...prevArray, resp.data.data]));
  }
  
    },[list])
    console.log(theArray)
     let days = [];
     const daysRequired = 7;
     
     for (let i = 0; i < daysRequired; i++) {
       days.push(moment().add(i, "days").format("dddd  Do MMM"));
     }
     let c= [];
      for (let i = 0; i < list.length; i++) {
       if(list[i]?.time==="day1"){
        c[i]= days[0];
       }
        if(list[i]?.time==="day2"){
        c[i] = days[1];
       }
       if (list[i]?.time === "day3") {
         c[i] = days[2];
       }
       if (list[i]?.time === "day4") {
         c[i] = days[3];
       }
         if (list[i]?.time === "day5") {
           c[i] = days[4];
         }
         if (list[i]?.time === "day6") {
           c[i] = days[5];
         }if (list[i]?.time === "day7") {
           c[i] = days[6];
         }

      }
console.log(c)
console.log(theArray)

  return (
    <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Appointment List
        </h5>
        {/* <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        ></a> */}
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {theArray.map((doctor, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={doctor?.photo_url}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                     {doctor?.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {doctor?.email}
                  </p>
                  <p className="text-sm font-semibold text-gray-500 truncate dark:text-gray-400">
                    {list[index]?.typeofmeeting}
                  </p>
                </div>
                <div className=" items-center text-base font-semibold text-gray-900 dark:text-white">
                  <p className="text-sm font-semibold text-gray-500 truncate dark:text-gray-400">
                    {list[index]?.date}
                  </p>
                  <p className="text-sm font-semibold text-gray-500 truncate dark:text-gray-400">
                    {c[index]}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListofAppointments;
