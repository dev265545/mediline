import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Choice from "../Components/Choice";

function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
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
