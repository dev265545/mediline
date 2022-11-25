import React, { useEffect, useState } from "react";

import axios from "axios";
import moment from "moment";
import { BiArrowFromLeft } from "react-icons/bi";
import SingleAppointment from "../UserPatientComponents/SingleAppointment";

function ListofAppointments({user }) {
    const [EditModal, SetEditModal] = useState(false);
    const handleoff = () => {
      SetEditModal(!EditModal);
    };

  const [theArray, setTheArray] = useState([]);

  const [list, setList] = useState([]);
  var now = moment().format("h:mm a");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/appointments/forpatient?id=${user?.uid}`)
      .then((resp) => {
        setList(resp.data.data);
      });
  }, [user?.uid]);
  const [appointmentlist, setal] = useState([]);
  const [modalinfo, setmodalinfo] = useState();
  console.log(list);
  const getdata = async () => {
    let i = 0;
    let urllist = [];
    for (i; i < list?.length; i++) {
      const x = list[i]?.doctor_id;
      const response = await axios.get(
        `http://localhost:3000/api/doctors?uid=${x}`
      );
      console.log(response);

      urllist.push(response.data.data);
    }
    setal(urllist);
  };

  useEffect(() => {
    getdata();
  }, [list]);
 
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
          {appointmentlist.map((doctor, index) => (
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
                  {!list[index]?.verifiedbydoctor && (
                    <button
                      type="button"
                      class="text-white hover:text-red-700 border border-red-700 bg-red-700 focus:ring-1 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      Unconfirmed
                    </button>
                  )}
                  {list[index]?.verifiedbydoctor && (
                    <button
                      type="button"
                      class="text-white hover:text-green-700 border border-green-700 bg-green-700 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
                    >
                      Confirmed
                    </button>
                  )}
                  <BiArrowFromLeft
                    onClick={() => {
                      setmodalinfo(index);
                      SetEditModal(!EditModal);
                    }}
                    className="text-3xl hover:bg-gradient-to-tr text-purple-900  "
                  ></BiArrowFromLeft>

                  {EditModal && (
                    <SingleAppointment
                      patient_id={list[index]?.patient_id}
                      index={modalinfo}
                      key={index}
                      c={c}
                      handleoff={handleoff}
                      doctor={appointmentlist}
                      list={list}
                    />
                  )}
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
