
import AppointmentList from '../../../Components/DoctorComponents/AppointmentList';
import DoctorSidebar from '../../../Components/DoctorComponents/DoctorSidebar'
import SlotGenerator from '../../../Components/DoctorComponents/SlotGenerator';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Appointments() {
     const router = useRouter();
     const { id } = router.query;
     const [doctor, setdoctor] = useState();
     useEffect(() => {
       axios.get(`http://localhost:3000/api/doctors?uid=${id}`).then((resp) => {
         setdoctor(resp.data.data);
       });
     }, [id]);
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
            <p className=" text-gray-900 font-bold inline-block">Dr. {doctor?.name}</p>
            <p className="py-1 text-xl text-gray-600">
              Here is the information of your Appointments.
            </p>
          </div>
          <div className="flex flex-row gap-10 mt-10 ">
            <div className='flex-1'>
              <AppointmentList />
            </div>

            <div className="flex-1 ">
              <SlotGenerator />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Appointments