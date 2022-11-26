import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import axios from "axios";
import { sub } from "date-fns";
import { info } from "autoprefixer";
import { MdAddCircleOutline } from "react-icons/md";
import ProfilePhotoUploader from "../../../Components/DoctorComponents/ProfilePhotoUploader";
function Profile() {
   const router = useRouter();
   const { id } = router.query;
   const [doctor, setdoctor] = useState();
   useEffect(() => {
     axios.get(`http://localhost:3000/api/doctors?uid=${id}`).then((resp) => {
       setdoctor(resp.data.data);
     });
   }, [id]);
   console.log(doctor?.address)
  const { data: session } = useSession();
  const [address, setAddress] = useState(doctor?.address);
  const [city, setCity] = useState(doctor?.city);
  const [country, setCountry] = useState("India");
  const [phone, setphone] = useState(doctor?.phone);
  const [name, setName] = useState(doctor?.name);
  const [hospitalname, setHospitalName] = useState(doctor?.hospitalname);
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
  const [dayofweek, setdayofweek] = useState("");
  const [onClick,setonClick]= useState(false)
  const [photo_url,setphoto] = useState("")

  const [fees, setFees] = useState("");
useEffect(()=>{
  setName(doctor?.name)
  setEmail(doctor?.email);
  setphone(doctor?.phone);
  setAddress(doctor?.address)
  setCountry(doctor?.country)
  setState(doctor?.state)
  setCity(doctor?.city)
  setPincode(doctor?.pincode)
  setHospitalAddress(doctor?.hospitaladdress)
  setHospitalCity(doctor?.hospitalcity)
  setHospitalState(doctor?.hospitalstate)
  setHospitalphone(doctor?.hospitalphone)
  setHospitalPincode(doctor?.hospitalpincode)
  setHospitalEmail(doctor?.hospitalemail)
  setHospitalName(doctor?.hospitalname)
  setQualification(doctor?.Qualification)
  setphoto(doctor?.photo_url)
  
  setServices(doctor?.services)
  setSpecialization(doctor?.Specialization)
  setRegNumber(doctor?.registrationnumber)
  setTimings(doctor?.timings)
  setdayofweek(doctor?.dayofweek)
  setInfo(doctor?.info)
  setFees(doctor?.fees)
},[doctor])
  const addTodoHandler = async () => {
    let databody = {
      uid: session?.user?.id, //--
      name: doctor?.name, //--
      email: doctor?.email, //--
      hospitaladdress: hospitaladdress, //--
      hospitalcity: hospitalcity, //--
      hospitalname: hospitalname, //--
      country : country,
      hospitalcountry: country,
      state: state, //--
      registrationnumber: registrationnumber,
      hospitalstate: hospitalstate, //--
      hospitalphone: hospitalphone, //--
      hospitalpincode: hospitalpincode, //--
      services: services,
      fees: fees,
      timings: timings,
      dayofweek: dayofweek,
      hosptialemail: hosptialemail, //--
      address: address, //--
      city: city, //--
      pincode: pincode, //--
      Specialization: specialization, //---
      Qualification: qualification, //---
      info: info,
      photo_url: photo_url, //------
      phone: phone,

      slotsfornext7days: {
        day1: doctor?.slotsfornext7days?.day1,
        day2: doctor?.slotsfornext7days?.day2,
        day3: doctor?.slotsfornext7days?.day3,
        day4: doctor?.slotsfornext7days?.day4,
        day5: doctor?.slotsfornext7days?.day5,
        day6: doctor?.slotsfornext7days?.day6,
        day7: doctor?.slotsfornext7days?.day7,
      },

      Bookedlotsfornext7days: {
        day1: doctor?.Bookedlotsfornext7days?.day1,
        day2: doctor?.Bookedlotsfornext7days?.day1,
        day3: doctor?.Bookedlotsfornext7days?.day1,
        day4: doctor?.Bookedlotsfornext7days?.day1,
        day5: doctor?.Bookedlotsfornext7days?.day1,
        day6: doctor?.Bookedlotsfornext7days?.day1,
        day7: doctor?.Bookedlotsfornext7days?.day1,
      },
      Availableslotsfornext7days: {
        day1: doctor?.Availableslotsfornext7days?.day1,
        day2: doctor?.Availableslotsfornext7days?.day2,
        day3: doctor?.Availableslotsfornext7days?.day3,
        day4: doctor?.Availableslotsfornext7days?.day4,
        day5: doctor?.Availableslotsfornext7days?.day5,
        day6: doctor?.Availableslotsfornext7days?.day6,
        day7: doctor?.Availableslotsfornext7days?.day7,
      },
    };
    axios.post(`/api/doctors/updateprofile?uid=${id}`, databody).then(function (response) {
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
                        <div className="px-1 py-1">
                          <button
                            onClick={() => setonClick(true)}
                            type="submit"
                            class="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
                          >
                            <MdAddCircleOutline /> Upload
                          </button>
                        </div>
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
        {onClick && (
          <div
            id="small-modal"
            tabIndex="-1"
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
                  <ProfilePhotoUploader
                    uid={doctor?.uid}
                    appointment={doctor}
                    setphoto = {setphoto}
                    photo_url = {photo_url}
              
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
  );
}

export default Profile;
