import React, { useEffect, useRef, useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import axios from "axios";
import { Router, useRouter } from "next/router";

function DoctorDashBoard() {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState();

  useEffect(() => {
    axios(`http://localhost:3000/api/doctors?email=${session?.user?.email}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.error("error fetching", error);
      });
    if (user === null && user != undefined) {
      router.push("/NewDoctorRegistration");
    }
  }, [session?.user.email]);
  console.log(user);
  // if (user === null) {
  //   router.push("/NewDoctorRegistration");
  // }

  return <div className="text-3xl">DoctorDashBoard</div>;
}

export default DoctorDashBoard;
