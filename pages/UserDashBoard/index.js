import React, { useEffect, useRef, useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import { CircleLoaderComponent } from "../../Components/Loader";

function UserDashBoard() {
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState();
  useEffect(() => {
    if (session?.user?.id != undefined) {
      axios
        .get(
          `http://localhost:3000/api/patients_users?uid=${session?.user?.id}`
        )
        .then((resp) => {
          setUser(resp.data);
        });
    }
  }, [session?.user?.id]);

  if (user?.data === null) {
    router.push("/NewUserRegistration");
  }

  useEffect(() => {
    if (user?.data?.uid !== undefined) {
      router.push(`/UserDashBoard/${user?.data?.uid}`);
    }
  }, [router, user?.data?.uid]);

  return <div className="text-3xl"><CircleLoaderComponent /></div>;
}

export default UserDashBoard;
export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
