import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Router, useRouter } from "next/router";
function NewUserRegistration() {
  const router = useRouter();
  const { data: session } = useSession();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  //Archit - -- - ---------------------------------
  const [blood_group,setBloodGroup] = useState("");
  const [phone_no,setPhoneNo] = useState();
  const [diabetic,setDiabetic] = useState("");
  //Archit---------------------------------------------
  console.log(address);
  const addTodoHandler = async () => {
    let databody = {
      uid: session?.user?.id,
      name: session?.user?.name,
      email: session?.user?.email,
      age: age,
      phone_no: phone_no,
      address: address,
      city: city,
      photo_url: session?.user?.image,

    };
    axios.post("/api/patients_users", databody).then(function (response) {
      console.log(response);
    });
    router.push(`/UserDashBoard/${session?.user?.id}`);
  };

  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-900 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white   backdrop-blur-3xl rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlhtmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={session?.user?.name}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={session?.user?.email}
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={address}
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        name="city"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={city}
                        placeholder=""
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country / region</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="country"
                          id="country"
                          placeholder="Country"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabindex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          htmlFor="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">State / province</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="state"
                          id="state"
                          placeholder="State"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabindex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          htmlFor="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        value=""
                      />
                    </div>

                    <div className="md:col-span-5">
                      <div className="inline-flex items-center">
                        {/* <input
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="htmlForm-checkbox"
                        /> */}
                      </div>
                    </div>

                  <div className = " flex  justify-between p-5 w-9">   



                    <div className="md:col-span-2">
                      <label htmlFor="soda">Age</label>
                      <div className="h-10 w-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          onChange={(e) => setAge(e.target.value)}
                          type="number"
                          name="soda"
                          id="soda"
                          placeholder="0"
                          className="px-2 text-center appearance-none outline-none rounded text-gray-800 w-full bg-transparent"
                          value={age}
                        />
                      </div>
                    </div>
                    {/* //Archit-------------------------------------------------- */}
                    <div className="md:col-span-2">
                      <label htmlFor="soda">Age</label>
                      <div className="h-10 w-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          onChange={(e) => setAge(e.target.value)}
                          type="number"
                          name="soda"
                          id="soda"
                          placeholder="0"
                          className="px-2 text-center appearance-none outline-none rounded text-gray-800 w-full bg-transparent"
                          value={age}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="pnum">Mob No.</label>
                      <div className="h-10 w-30 bg-gray-50 flex border border-gray-200   items-center mt-1">
                      <input
                          onChange={(e) => setPhoneNo(e.target.value)}
                          type="tel"
                          name="pnum"
                          id="pnum"
                          placeholder=""
                          className="px-2 text-center appearance-none outline-none  rounded text-gray-800 w-full bg-transparent"
                          value={phone_no}
                        />
                      </div>
                    </div>
                  </div>
                    {/* //Archit------------------------------------------------------- */}
                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          onClick={() => addTodoHandler()}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUserRegistration;
