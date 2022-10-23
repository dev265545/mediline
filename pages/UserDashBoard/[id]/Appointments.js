
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NewAppointment from "../../../Components/DoctorComponents/NewAppointment.js";
import SideNavbar from "../../../Components/UserPatientComponents/Sidebar.js";

function Appointments() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/patients_users?uid=${id}`).then((resp) => {
      setUser(resp.data.data);
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
      <main className="bg-white min-h-screen flex max-w-[1500px] mx-auto">
<SideNavbar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
            {greeting}{" "}
            <p className=" text-gray-900 font-bold inline-block">
           {user?.name}
            </p>
            <p className="py-1 text-xl text-gray-600">
              Here is the information of your Appointments.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10 ">
            <NewAppointment />
            <div className="flex  lg:flex-row flex-col ">
              <div className="flex-1">
       
              </div>

              <div className=" flex-1  ">
            
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Appointments;
