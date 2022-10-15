import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Choice from "../Components/Choice";
import axios from "axios";
import{ useRouter} from "next/router"
import { CircleLoaderComponent } from "../Components/Loader";

function Login() {
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

export default Login;
