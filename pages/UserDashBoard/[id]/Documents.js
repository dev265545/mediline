import React, { useEffect, useState } from 'react'
import ImageUploader from '../../../Components/UserPatientComponents/ImageUploader'
import SideNavbar from '../../../Components/UserPatientComponents/Sidebar'
import { useRouter } from "next/router";
import axios from 'axios';
import { FaUpload } from 'react-icons/fa';

function Documents() {
  const router = useRouter()
   const { id } = router.query;
   const checkValidUrl = (url) => {
     //define some image formats
     var types = ["pdf"];

     //split the url into parts that has dots before them
     var parts = url.split(".");

     //get the last part
     var extension = parts[parts.length - 1];

     //check if the extension matches list
     if (types.indexOf(extension) !== -1) {
       return true;
     }
   };

   const [user, setUser] = useState([]);

        axios
        .get(
          `/api/patients_users?uid=${id}`
        )
        .then((resp) => {
          setUser(resp.data);
        })
  const date = new Date();
  const currentTime = date.getHours();
const [onClick,setonClick] = useState(false)
  let greeting;

  if (currentTime >= 0 && currentTime <= 12) {
    greeting = "Good Morning";
  } else if (currentTime > 12 && currentTime <= 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div>
      <main className="bg-green-50 min-h-screen flex max-w-[1500px] mx-auto">
        <SideNavbar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
            <p className=" text-gray-900 font-bold inline-block">
              {greeting} {user?.data?.name}
            </p>
            <p className="py-1 text-xl text-gray-600">
              Here are your Medical Records, Lab Reports and Medical
              Certificates.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10 ">
            <div className="grid grid-rows-4 lg:grid-cols-3 gap-2">
              {!(user === undefined) && (
                <div className="mt-4 flex justify-start items-start">
                  <button
                    onClick={() => setonClick(true)}
                    className="text-5xl p-10 m-4 bg-purple-500 rounded-full "
                  >
                    <FaUpload className="text-3xl text-white font-bold"></FaUpload>
                  </button>
                </div>
              )}
              {user?.data?.documents.map((link, index) => (
                <div key={index} className="">
                  <a href={link} target="_blank" rel="noreferrer">
                    {checkValidUrl(link) ? (
                      <img
                        src="https://res.cloudinary.com/dfx9p6tpc/image/upload/v1666953849/mediline-uploads/download_sap3qb.png"
                        className="md:w-1/2  border shadow-lg rounded-lg md:rounded-lg "
                      />
                    ) : (
                      <img
                        src={link}
                        className="md:w-1/2 border shadow-lg rounded-lg md:rounded-lg "
                      />
                    )}
                  </a>

                  {/* shine box */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </div>
              ))}

              {onClick && (
                <div
                  id="small-modal"
                  tabindex="-1"
                  className="  overflow-y-auto overflow-x-hidden backdrop-blur-lg flex items-center justify-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
                >
                  <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      {/* <!-- Modal header --> */}
                      <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          Upload a Document
                        </h3>
                        <button
                          onClick={() => {
                            setonClick(false);
                          }}
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle="small-modal"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      {/* <!-- Modal body --> */}
                      <div className="p-6 space-y-6">
                        <ImageUploader
                          uid={user?.data?.uid}
                          links={user?.data?.documents}
                        />
                      </div>
                      {/* <!-- Modal footer --> */}
                      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Documents