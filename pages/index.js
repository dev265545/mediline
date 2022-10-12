import { useSession, getSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  console.log(session?.user);
  return <div></div>;
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
