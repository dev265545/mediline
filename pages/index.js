import { useSession, getSession, signIn, signOut } from "next-auth/react";
import {useRouter}  from "next/router"
import { useState,useEffect } from "react";
import axios from "axios";
import Choice from "../Components/Choice";
import { CircleLoaderComponent } from "../Components/Loader";
export default function Home() {
 const router = useRouter()
  const { data: session } = useSession();
  const [doctor,setdoctor] = useState()
  const [patient, setpatient] = useState();
  useEffect(() => {
     axios
       .get(`http://localhost:3000/api/doctors?uid=${session?.user?.id}`)
       .then((resp) => {
         setdoctor(resp.data.data);
       });

        axios
          .get(`http://localhost:3000/api/patients_users?uid=${session?.user?.id}`)
          .then((resp) => {
            setpatient(resp.data.data);
          });
  
    
  }, [session?.user?.id])
   console.log(doctor)
   console.log(patient)
  if(doctor!=null){
      router.push(`/DoctorDashBoard/${session?.user?.id}`)
  }else if(patient!=null){
router.push(`/UserDashBoard/${session?.user?.id}`);
  }
  else{

  }

  
  if (session) {
   

    return (
      <>
        <CircleLoaderComponent />
      </>
    );
  }
  return (
    <>
      <Choice />
      {/* <button onClick={() => signIn()}>Sign in</button> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
