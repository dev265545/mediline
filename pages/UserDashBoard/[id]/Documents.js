import React, { useEffect, useState } from 'react'
import ImageUploader from '../../../Components/UserPatientComponents/ImageUploader'
import SideNavbar from '../../../Components/UserPatientComponents/Sidebar'
import { useRouter } from "next/router";
import axios from 'axios';

function Documents() {
  const router = useRouter()
   const { id } = router.query;

   const [user, setUser] = useState([]);

        axios
        .get(
          `http://localhost:3000/api/patients_users?uid=${id}`
        )
        .then((resp) => {
          setUser(resp.data);
        })
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
      <main className="bg-white min-h-screen flex max-w-[1500px] mx-auto">
        <SideNavbar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
        
            <p className=" text-gray-900 font-bold inline-block">
            {greeting} {user?.data?.name}
            </p>
            <p className="py-1 text-xl text-gray-600">
              Here are your documents, lab reports and certificates.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10 ">
            <ImageUploader/>
            <div className="flex  lg:flex-row flex-col ">
           
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Documents