import axios from "axios";
import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/Sidebar";

function Search() {
  const [listdoctors, setlistdoctors] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/doctors/alldoctors`).then((resp) => {
      setlistdoctors(resp.data.data);
    });
  }, []);
  console.log(listdoctors);
  return (
    <div className="grid  ">
      <div className="  flex justify-center   ">
        <div className="">
          <SideNavbar />
        </div>

        <div class="flex justify-center  p-6 space-x-6 bg-white rounded-xl shadow-lg  transition duration-500">
          <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              class="bg-gray-100 outline-none"
              type="text"
              placeholder="Article name or keyword..."
            />
          </div>
          <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
            <span>All categorie</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div class="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <span>Search</span>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3">
        {listdoctors.map((doctor, index) => (
          <div key={index} class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <img className=" rounded-full w-16" src={doctor.photo_url} />
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                {doctor.name}
              </h5>
              <p class="text-gray-900 text-bold leading-tight font-medium mb-2">
                {doctor.email}
              </p>
              <p class="text-gray-700 text-base mb-4">{doctor?.address}</p>
              <p class="text-gray-700 text-base mb-4">{doctor?.city}</p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
