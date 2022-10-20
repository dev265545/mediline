import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineExplore,
  MdReport,
} from "react-icons/md";
import { CgFileDocument, CgProfile } from "react-icons/cg";
import { FaPills, FaRegComments } from "react-icons/fa";
import { BiCalendarEvent, BiMessageSquareDots } from "react-icons/bi";

function SideNavbar() {
  const router = useRouter();
  const {data:session} = useSession()
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gradient-radial  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block lg:hidden z-50  h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-lg text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              MEDILINE
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div
                on
                onClick={() =>
                  router.push(`/UserDashBoard/${session?.user?.id}`)
                }
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-radial  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <MdOutlineSpaceDashboard className="text-2xl text-purple-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Dashboard
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-radial  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-purple-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Profile
                </h3>
              </div>
              <div
                onClick={() => router.push("/Search")}
                className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-radial p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <MdOutlineExplore className="text-2xl text-purple-600 group-hover:text-white  " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Search for Doctors
                </h3>
              </div>
              <div className="flex   mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-radial  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaPills className="text-2xl text-purple-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Prescription
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-radial  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiCalendarEvent className="text-2xl text-purple-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Appointments
                </h3>
              </div>
              <div onClick={()=>router.push(`/UserDashBoard/${session?.user?.id}/Documents`)} className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-radial  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgFileDocument className="text-2xl text-purple-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Documents
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-radial  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-purple-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gradient-radial  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-purple-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <div
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gradient-radial  p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
              >
                <MdOutlineLogout className="text-2xl text-purple-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
