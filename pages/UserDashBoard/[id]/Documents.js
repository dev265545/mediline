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
          `/api/patients_users?uid=${id}`
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
              Here are your Medical Records, Lab Reports and Medical
              Certificates.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10 ">
            {!(user === undefined) && (
              <ImageUploader
                uid={user?.data?.uid}
                links={user?.data?.documents}
              />
            )}
            <div className="flex  lg:flex-row flex-col ">
              {user?.data?.documents.map((link, index) => (
                <div
                  key={index}
                  className=" cursor-pointer text-4xl"
                >
                  <img src={link} class="md:w-1/4 rounded-lg md:rounded-lg " />
HELLO
                  {/* shine box */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Documents