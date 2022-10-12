import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function UserDashBoard() {
  const { data: session } = useSession();
  console.log(session);

  return <div className="text-3xl">UserDashBoard</div>;
}

export default UserDashBoard;
