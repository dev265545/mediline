import React from "react";
import SideNavbar from "../../../Components/UserPatientComponents/Sidebar";
import  { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useRouter } from "next/router";
import Image from "next/image"
import "react-calendar/dist/Calendar.css";
import logo from "../../../public/doctor-patient (1).svg";
import axios from "axios";
import { FaDownload, FaUpload } from "react-icons/fa";
import {useSession} from "next-auth/react"
import NewAppointment from "../../../Components/DoctorComponents/NewAppointment";
import Example from "../../../Components/UserPatientComponents/calender";
import BMI from "../../../Components/UserPatientComponents/BMI";
import BloodLevel from "../../../Components/UserPatientComponents/BloodLevel";
import { ArrowCircleDownIcon, ArrowCircleRightIcon, ArrowCircleUpIcon } from "@heroicons/react/outline";
import { AiFillCaretDown } from "react-icons/ai";
import { BiArrowToTop, BiCloudDownload, BiDownload } from "react-icons/bi";
import { MdDownload, MdFileDownload, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function UserProfileDashBoard() {
   const router = useRouter();
   const { id } = router.query;
   const [user, setUser] = useState([]);
const [value, onChange] = useState(new Date());

useEffect(()=>{
 axios.get(`/api/patients_users?uid=${id}`).then((resp) => {
   setUser(resp.data.data);
 });
},[id])
  
   const date = new Date();
   const currentTime = date.getHours();
   const [onClick, setonClick] = useState(false);
   let greeting;

   if (currentTime >= 0 && currentTime <= 12) {
     greeting = "Good Morning";
   } else if (currentTime > 12 && currentTime <= 18) {
     greeting = "Good Afternoon";
   } else {
     greeting = "Good Evening";
   }
console.log(user)
  return (
    <div>
      <main className="bg-purple-50 min-h-screen flex max-w-screen mx-auto">
        <SideNavbar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
            <p className=" text-gray-900 font-bold inline-block">
              {greeting} {user?.name}
            </p>
            <p className="py-1 text-xl text-gray-600"></p>
          </div>
          <div className=" invisible lg:visible  top-2 right-[150px] absolute md:rounded-full ">
            <Image
              width={450}
              height={400}
              className=""
              src={logo}
              alt="asset"
              layout="fixed"
            ></Image>
          </div>
          <div className="flex flex-col mt-12">
            <NewAppointment />
          </div>

          <div className=" flex flex-col gap-5 mt-24 pt-10 shadow-3xl shadow-rose-800 ">
            <div className="flex flex-col md:flex-row  md:gap-36">
              <BMI user={user} className=" border border-black flex-1 " />
              <div className="">
                <div className=" p-2 font-extrabold text-blue-900 text-2xl  font-mono">
                  Upcoming Appointment
                </div>
                <div className=" shadow-2xl rounded-3xl bg-white">
                  <h1 className="p-2 font-extrabold text-blue-900 text-2xl  font-mono  "></h1>
                  <div className="p-3 grid grid-cols-1 gap-7  ">
                    <div className="rounded-md">
                      <div className="grid grid-cols-2 gap-28">
                        <div className="text-xl text-gray-500  p-1 mt-1 ">
                          Family Doctor Visit
                          <div className="text-base">
                            23 November 2022 at 12:30
                          </div>
                        </div>
                        <div className="flex flex-row gap-4 text-xl p-5  items-end justify-end">
                          <div className="rounded-full  border border-blue-900">
                            <MdKeyboardArrowUp className="text-3xl font-bold " />
                          </div>
                          <div className="rounded-full border border-blue-900">
                            <MdKeyboardArrowDown className="text-3xl font-bold " />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 p-1  text-md text-gray-600 "> </div>
                      <div className="p-3">
                        <div className="p-1 flex items-center justify-center bg-purple-700 text-white rounded-lg">
                          Details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row gap-36 ">
              <BloodLevel user={user} className=" border border-black" />
              <div className="">
                <div className=" p-2 font-extrabold text-blue-900 text-2xl  font-mono">
                  Certificates and Reports
                </div>
                {user?.documents?.map((document, index) => (
                  <div
                    key={index}
                    className=" shadow-2xl rounded-3xl bg-white mt-1 mb-2"
                  >
                    <div className="p-3 grid grid-cols-1 gap-7  ">
                      <div className="rounded-md">
                        <div className="grid grid-cols-2 gap-28">
                          <div className="text-xl text-gray-500    ">
                            {document?.name}
                          </div>
                          <div className="flex flex-row gap-4 text-xl  items-end justify-end">
                            Download
                            <div className="rounded-full border border-blue-900">
                              <a href={document?.link} target="_blank" rel="noreferrer">
                                <BiCloudDownload
                               
                                  className="text-3xl font-bold "
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-24 pt-10 shadow-3xl shadow-rose-800 ">
            {!(user === undefined) && (
              <Example user={user} className=" border border-black" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
