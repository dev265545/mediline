import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorCard from "../Components/DoctorCard";
import SideNavbar from "../Components/Sidebar";

function Search() {
  const [listdoctors, setlistdoctors] = useState([]);
  const [searchdoctors, setsearchdoctors] = useState([]);
   const [Query, setQuery] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3000/api/doctors/alldoctors`).then((resp) => {
      setlistdoctors(resp.data.data);
    });
  }, []);
  console.log(listdoctors);
  const HandleSearch =(e)=>{
    e.preventDefault()
    if(Query===""){
      axios.get(`http://localhost:3000/api/doctors/alldoctors`).then((resp) => {
        setlistdoctors(resp.data.data);
      });
    }else{
    axios.get(`http://localhost:3000/api/doctors/searchdoctors?query=${Query}`).then((resp) => {
      setlistdoctors(resp.data.data);
    });}
    setQuery("")
  }
  return (
    <div className="grid grid-rows-1  ">
      <div className="  flex   justify-center  ">
        <SideNavbar />
        <div className="flex flex-col">
          <div className="flex justify-center p-5 flex-col">
            <p className="pt-6 text-3xl font-extrabold">Search</p>
            <p className="pb-5 text-md font-thin ">Try searching for a city, practice, practitioner or procedure</p>
          </div>
          <form>
            <div class="flex flex-auto">
              <label
                for="search-dropdown"
                class=" hidden mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Your Email
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600
         dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                type="button"
              >
                All categories{" "}
                <svg
                  aria-hidden="true"
                  class="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown"
                class=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                style={{
                  position: "absolute",
                  inset: "auto auto 0px 0px",
                  margin: "0px",
                }}
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mockups
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Templates
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Design
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logos
                    </button>
                  </li>
                </ul>
              </div>
              <div class=" w-full relative">
                <input
                onChange={(e)=>setQuery(e.target.value)}
                value={Query}
                  type="search"
                  id="search-dropdown"
                  class=" p-4 w-96 z-50 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
             dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos, Design Templates..."
                 
                />
                <button
                onClick={(e)=>{HandleSearch(e)}}
                  type="submit"
                  class="absolute top-0 right-0 p-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className=" p-2 mt-2  gap-4 flex items-center flex-col">
        {listdoctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default Search;
