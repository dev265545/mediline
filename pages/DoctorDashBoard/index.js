import React, { useEffect, useRef, useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import axios from "axios";
import { Router, useRouter } from "next/router";
import { CircleLoaderComponent } from "../../Components/Loader";

function DoctorDashBoard() {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState();
  useEffect(() => {
    if (session?.user?.id != undefined) {
      axios
        .get(`http://localhost:3000/api/doctors?uid=${session?.user?.id}`)
        .then((resp) => {
          setUser(resp.data);
        });
    }
  }, [session?.user?.id]);

  if (user?.data === null) {
    router.push("/NewDoctorRegistration");
  }
  useEffect(() => {
    if (user?.data?.uid !== undefined) {
      router.push(`/DoctorDashBoard/${user?.data?.uid}`);
    }
  }, [router, user?.data?.uid]);

  // axios(`http://localhost:3000/api/doctors?uid=${session?.user?.id}`)
  //   .then((response) => {
  //     setUser(response.data.data);
  //   })
  //   .catch((error) => {
  //     console.error("error");
  //   });

  // if (user === null) {
  //   router.push("/NewDoctorRegistration");
  // }

  return <div className="text-3xl"><CircleLoaderComponent /></div>;
}

//Ekansh Panwar

export default DoctorDashBoard;
export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
