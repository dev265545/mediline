import React from "react";
import SideNavbar from "../../../Components/UserPatientComponents/Sidebar";
import  { useEffect, useState } from "react";

import { useRouter } from "next/router";
import axios from "axios";
import { FaUpload } from "react-icons/fa";
import {useSession} from "next-auth/react"

export default function UserProfileDashBoard() {
  const {data:session} =useSession()
   const [user, setUser] = useState([]);

useEffect(()=>{
  console.log(session)
 axios.get(`/api/patients_users?uid=${session?.user?.id}`).then((resp) => {
   setUser(resp.data.data);
 });
},[session?.user?.id])
  
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
     <main className="bg-green-50 min-h-screen flex max-w-[1500px] mx-auto">
        <SideNavbar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
            <p className=" text-gray-900 font-bold inline-block">
              {greeting} {user?.name}
            </p>
            <p className="py-1 text-xl text-gray-600">
             
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10 ">
    </div>
    </div>
    </main>
    </div>
  );
}
