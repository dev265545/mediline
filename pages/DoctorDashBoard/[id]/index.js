import axios from "axios";
import Image from "next/image";
import "react-calendar/dist/Calendar.css";
import logo from "../../../public/lady-doctor.jpg";

import React, { useEffect, useState } from "react";
import DoctorSidebar from "../../../Components/DoctorComponents/DoctorSidebar";
import {useRouter} from "next/router"
import NewAppointment from "../../../Components/DoctorComponents/NewAppointment";
import Example from "../../../Components/DoctorComponents/calender";

import { BiCalendar } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import AppointmentList from "../../../Components/DoctorComponents/AppointmentList";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import moment from "moment";



export default function ProfileDoctorDashBoard() {
  const router = useRouter();
  const { id } = router.query;
const [doctor,setdoctor]= useState()
   useEffect(() => {
     axios
       .get(`http://localhost:3000/api/doctors?uid=${id}`)
       .then((resp) => {
         setdoctor(resp.data.data);
       });},[id])
    const [list, setList] = useState([]);
 const key = "patient_id";

 const uniquepatients = [
   ...new Map(list.map((item) => [item[key], item])).values(),
 ];
 var newArray = list.filter(function (el) {
   return el.verifiedbydoctor == true
 });
 console.log(newArray);
 

 console.log(uniquepatients);

    useEffect(() => {
      axios
        .get(`http://localhost:3000/api/appointments?id=${doctor?.uid}`)
        .then((resp) => {
          setList(resp.data.data);
        });
    }, [doctor?.uid]);
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  if (currentTime >= 0 && currentTime <= 12) {
    greeting = "Good Morning";
  } else if (currentTime > 12 && currentTime <= 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <div>
      <main className="bg-gray-50 min-h-screen flex max-w-[1500px] mx-auto">
        <DoctorSidebar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
            {greeting}{" "}
            <p className=" text-gray-900 font-bold inline-block">
              Dr. {doctor?.name}
            </p>
            <p className="py-1 text-xl text-gray-600">
              Happiness is the highest form of health.
            </p>
            <div className=" invisible  lg:visible  top-2 right-0 absolute md:rounded-full ">
              <Image
                width={250}
                height={200}
                className=""
                src={logo}
                alt="asset"
                layout="fixed"
              ></Image>
            </div>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            <div className="bg-purple-200 rounded-lg shadow-md shadow-purple-200 p-2 grid grid-cols-2 ">
              <div className="bg-purple-800 rounded-full w-16 h-16  flex items-center justify-center">
                <BiCalendar className="text-4xl text-white " />
              </div>

              <div className="p-1 text-purple-900 font-semibold mr-4 ">
                Appointments
                <p className="flex items-center justify-center text-purple-500  text-3xl font-extrabold">
                  {list?.length}
                </p>
              </div>
              <div className=" flex flex-1  p-3"></div>
              <hr className=" shadow-lg shadow-purple-900 mx-auto w-full h-2 rounded-full bg-purple-300  border-0"></hr>
            </div>
            <div className="bg-pink-200 rounded-lg shadow-md shadow-purple-200 p-2 grid grid-cols-2 ">
              <div className="bg-pink-800 rounded-full w-16 h-16  flex items-center justify-center">
                <ImProfile className="text-4xl text-white " />
              </div>

              <div className="p-1 text-pink-900 font-semibold mr-4 flex flex-col items-center justify-center ">
                Patients
                <p className="flex items-center justify-center text-pink-500  text-3xl font-extrabold">
                  {uniquepatients?.length}
                </p>
              </div>
              <div className=" flex flex-1  p-3"></div>
              <hr className=" shadow-lg shadow-pink-900 mx-auto w-full h-2 rounded-full bg-pink-300  border-0"></hr>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            {!(doctor === undefined) && <AppointmentList doctor={doctor} />}
            {!(doctor === undefined) && <Example doctor={doctor} />}
          </div>
          <div className="flex flex-row p-2">
            <div className="flex flex-1 text-lg font-semibold text-purple-900 ">
              Confirmed Appointments
            </div>
            <div className="px-1 py-1">
              {/* <button
                onClick={() => setonClick(true)}
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
              >
                <MdAddCircleOutline /> Upload
              </button> */}
            </div>
          </div>

          <div class="overflow-x-auto relative shadow-lg rouned-full shadow-purple-200">
            <table class="w-full text-sm text-left text-gray-500 rounded-lg dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 rounded-2xl dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Id
                  </th>

                  <th scope="col" class="py-3 px-6">
                    Date
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Time
                  </th>

                  <th scope="col" class="py-3 px-6">
                    Type of Meeting
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Page
                  </th>
                </tr>
              </thead>
              <tbody>
                {newArray?.map((presc, index) => (
                  <tr
                    key={index}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {presc?.patient_doctor_id}
                    </th>
                    <td class="py-4 px-6">
                      {moment(presc?.fnsdate).format("dddd D MMM YY ")}{" "}
                    </td>

                    <td class="py-4 px-6">{presc?.date}</td>

                    <td class="py-4 px-6">{presc?.typeofmeeting}</td>

                    <td
                      onClick={() =>
                        router.push(
                          `/DoctorDashBoard/${presc?.doctor_id}/Appointment/${presc?.patient_doctor_id}`
                        )
                      }
                      class="py-4 px-6"
                    >
                      {" "}
                      Go to Page
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}