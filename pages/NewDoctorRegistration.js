import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import axios from "axios";
import { sub } from "date-fns";
import { info } from "autoprefixer";
function NewDoctorRegistration() {
  const router = useRouter();
  const { data: session } = useSession();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("India");
  const [phone, setphone] = useState("");
  const [name, setName] = useState(session?.user?.name);
  const [hospitalname, setHospitalName] = useState("");
  const [hospitaladdress, setHospitalAddress] = useState("");
  const [hospitalcity, setHospitalCity] = useState("");
  const [email, setEmail] = useState(session?.user?.email);
  const [hosptialemail, setHospitalEmail] = useState("");
  const [user, setUser] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [info, setInfo] = useState("");
  const [hospitalpincode, setHospitalPincode] = useState("");
  const [hospitalphone, setHospitalphone] = useState("");
  const [hospitalstate, setHospitalState] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [qualification, setQualification] = useState("");
  const [registrationnumber, setRegNumber] = useState("");
  const [timings, setTimings] = useState("");
    const [services, setServices] = useState("");
const  [ dayofweek,setdayofweek] = useState("")



  const [fees, setFees] = useState("");

  const addTodoHandler = async () => {
    let databody = {
      uid: session?.user?.id, //--
      name: session?.user?.name, //--
      email: session?.user?.email, //--
      hospitaladdress: hospitaladdress, //--
      hospitalcity: hospitalcity, //--
      hospitalname: hospitalname, //--
      state: state, //--
      registrationnumber :registrationnumber,
      hospitalstate: hospitalstate, //--
      hospitalphone: hospitalphone, //--
      hospitalpincode: hospitalpincode, //--
services : services,
fees : fees,
timings  : timings,
dayofweek : dayofweek,
      hosptialemail: hosptialemail, //--
      address: address, //--
      city: city, //--
      pincode: pincode, //--
      Specialization: specialization, //---
      Qualification: qualification, //---
      info: info,
      photo_url: session?.user?.image, //------
      phone : phone,

      slotsfornext7days: {
        day1: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day2: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day3: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day4: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day5: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day6: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day7: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
      },

      Bookedlotsfornext7days: {
        day1: [],
        day2: [],
        day3: [],
        day4: [],
        day5: [],
        day6: [],
        day7: [],
      },
      Availableslotsfornext7days: {
        day1: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day2: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day3: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day4: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day5: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day6: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
        day7: [
          "8:00 AM",
          "9:00AM",
          "10:00 AM",
          "11:00AM",
          "12:00 PM",
          "1:00PM",
          "2:00PM",
          "3:00PM",
          "4:00PM",
          "5:00PM",
          "6:00PM",
          "7:00PM",
          "8:00PM",
        ],
      },
    };
    axios.post("/api/doctors", databody).then(function (response) {
      console.log(response);
    });
    router.push("/DoctorDashBoard");
  };
  const [click, SetClick] = useState(1);
  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-900 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white   backdrop-blur-3xl rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600 grid  grid-cols-3 lg:grid-cols-1 ">
                  <div onClick={() => SetClick(1)} className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div onClick={() => SetClick(2)} className="text-gray-600">
                    <p className="font-medium text-lg">
                      Clinic/Hospital Details
                    </p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div onClick={() => SetClick(3)} className="text-gray-600">
                    <p className="font-medium text-lg">Specific Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                </div>

                {click == 1 && (
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={name}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="email">Email Address</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={email}
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
                            onChange={(e) => setCountry(e.target.value)}
                            name="country"
                            id="country"
                            placeholder="Country"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={country}
                          />
                          <button
                            tabIndex="-1"
                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                          ></button>
                          <button
                            tabIndex="-1"
                            for="show_more"
                            className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                          ></button>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label for="state">State / province</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => setState(e.target.value)}
                            name="state"
                            id="state"
                            placeholder="State"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={state}
                          />
                          <button
                            tabIndex="-1"
                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                          ></button>
                          <button
                            tabIndex="-1"
                            for="show_more"
                            className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                          ></button>
                        </div>
                      </div>

                      <div className="md:col-span-1">
                        <label for="zipcode">Zipcode</label>
                        <input
                          onChange={(e) => setPincode(e.target.value)}
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          value={pincode}
                        />
                      </div>

                      <div className="md:col-span-1">
                        <label for="soda">Phone</label>

                        <input
                          onChange={(e) => setphone(e.target.value)}
                          type="string"
                          name="soda"
                          id="soda"
                          placeholder=""
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={phone}
                        />
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            onClick={() => SetClick(2)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* clinic details */}
                {click == 2 && (
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Clinic/Hospital Name</label>
                        <input
                          onChange={(e) => setHospitalName(e.target.value)}
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={hospitalname}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="email"> Hospital Email Address</label>
                        <input
                          onChange={(e) => setHospitalEmail(e.target.value)}
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={hosptialemail}
                          placeholder="email@domain.com"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label for="address">Address / Street</label>
                        <input
                          onChange={(e) => setHospitalAddress(e.target.value)}
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={hospitaladdress}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="city">City</label>
                        <input
                          onChange={(e) => setHospitalCity(e.target.value)}
                          type="text"
                          name="city"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={hospitalcity}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="country">Country / region</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => setCountry(e.target.value)}
                            name="country"
                            id="country"
                            placeholder="Country"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={country}
                          />
                          <button
                            tabIndex="-1"
                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                          ></button>
                          <button
                            tabIndex="-1"
                            for="show_more"
                            className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                          ></button>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label for="state">State / province</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => setHospitalState(e.target.value)}
                            name="state"
                            id="state"
                            placeholder="State"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={hospitalstate}
                          />
                          <button
                            tabIndex="-1"
                            className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                          ></button>
                          <button
                            tabIndex="-1"
                            for="show_more"
                            className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                          ></button>
                        </div>
                      </div>

                      <div className="md:col-span-1">
                        <label for="zipcode">Zipcode</label>
                        <input
                          onChange={(e) => setHospitalPincode(e.target.value)}
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          value={hospitalpincode}
                        />
                      </div>

                      <div className="md:col-span-1">
                        <label for="soda"> Hospital Contact</label>

                        <input
                          onChange={(e) => setHospitalphone(e.target.value)}
                          type="string"
                          name="soda"
                          id="soda"
                          placeholder="."
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={hospitalphone}
                        />
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            onClick={() => SetClick(3)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {click == 3 && (
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Specialization</label>
                        <input
                          onChange={(e) => setSpecialization(e.target.value)}
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={specialization}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="qualification"> Qualification </label>
                        <input
                          onChange={(e) => setQualification(e.target.value)}
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={qualification}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label for="address">
                          Services Provided at this Clinic/Hospital
                        </label>
                        <input
                          onChange={(e) => setServices(e.target.value)}
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={services}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="country">Medical Registration Number</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => setRegNumber(e.target.value)}
                            name="country"
                            id="country"
                            placeholder="Required"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={registrationnumber}
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label for="state">Estimated Timings</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => setTimings(e.target.value)}
                            name="state"
                            id="state"
                            placeholder="Timings "
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={timings}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label for="state">Days in The Week </label>

                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => setdayofweek(e.target.value)}
                            name="state"
                            id="state"
                            placeholder="Ex - Mon-Sat "
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={dayofweek}
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label for="zipcode">
                          Estimated Avg Consultation Fees
                        </label>
                        <input
                          onChange={(e) => setFees(e.target.value)}
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder=""
                          value={fees}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label
                          for="message"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Information about you
                        </label>
                        <textarea
                          onChange={(e) => setInfo(e.target.value)}
                          id="message"
                          rows="4"
                          value={info}
                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 ]"
                          placeholder="Your message..."
                        ></textarea>
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            onClick={() => {
                              addTodoHandler();
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewDoctorRegistration;
