import React, { useEffect, useRef, useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

function UserDashBoard() {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState();

  useEffect(() => {
    axios(
      `http://localhost:3000/api/patients_users?email=${session?.user?.email}`
    )
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.error("error fetching", error);
      });
    if (user === null && user != undefined) {
      router.push("/NewUserRegistration");
    }
  }, [session?.user.email]);
  console.log(user);

  return <div className="text-3xl">UserDashBoard</div>;
}

export default UserDashBoard;
