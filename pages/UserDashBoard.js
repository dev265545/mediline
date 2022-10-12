import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function UserDashBoard() {
  const { data: session } = useSession();
  console.log(session);

  return <div>UserDashBoard</div>;
}

export default UserDashBoard;
