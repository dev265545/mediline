import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Choice from "../Components/Choice";
import axios from "axios";
import { useRouter } from "next/router";
import { CircleLoaderComponent } from "../Components/Loader";

function App() {
  const router = useRouter();
  const { data: session } = useSession();
  const [doctor, setdoctor] = useState();
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
  }, [session?.user?.id]);
  console.log(doctor);
  console.log(patient);
  if (doctor != null) {
    router.push(`/DoctorDashBoard/${session?.user?.id}`);
  } else if (patient != null) {
    router.push(`/UserDashBoard/${session?.user?.id}`);
  } else {
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

export default App;
// return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
