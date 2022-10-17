import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import axios from "axios";
function NewDoctorRegistration() {
  const router = useRouter();
  const { data: session } = useSession();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [user, setUser] = useState("");

  const addTodoHandler = async () => {
    let databody = {
      uid: session?.user?.id,
      name: session?.user?.name,
      email: session?.user?.email,
      age: age,
      address: address,
      city: city,
      photo_url: session?.user?.image,
      slotsfornext7days: {
        day1: [ "8:00 AM","9:00AM","10:00 AM","11:00AM","12:00 PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM"],
        day2: ["8:00 AM","9:00AM","10:00 AM","11:00AM","12:00 PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM"],
        day3: ["8:00 AM","9:00AM","10:00 AM","11:00AM","12:00 PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM"],
        day4: ["8:00 AM","9:00AM","10:00 AM","11:00AM","12:00 PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM"],
        day5: ["8:00 AM","9:00AM","10:00 AM","11:00AM","12:00 PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM"],
        day6: ["8:00 AM","9:00AM","10:00 AM","11:00AM","12:00 PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM"],
        day7: ["8:00 AM","9:00AM","10:00 AM","11:00AM","12:00 PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM"],
      },
    };
    axios.post("/api/doctors", databody).then(function (response) {
      console.log(response);
    });
    router.push("/DoctorDashBoard");
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
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={session?.user?.name}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label for="email">Email Address</label>
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
                      <label for="address">Address / Street</label>
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
                      <label for="city">City</label>
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
                      <label for="country">Country / region</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="country"
                          id="country"
                          placeholder="Country"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex="-1"
                          for="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label for="state">State / province</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="state"
                          id="state"
                          placeholder="State"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabIndex="-1"
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabIndex="-1"
                          for="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <label for="zipcode">Zipcode</label>
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
                          className="form-checkbox"
                        /> */}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label for="soda">Age</label>
                      <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          onChange={(e) => setAge(e.target.value)}
                          type="number"
                          name="soda"
                          id="soda"
                          placeholder="0"
                          className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value={age}
                        />
                      </div>
                    </div>

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

export default NewDoctorRegistration;
