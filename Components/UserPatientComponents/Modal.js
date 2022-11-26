import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiPointer, BiRegistered } from 'react-icons/bi'
import { GiBullets, GiPointing } from 'react-icons/gi'
import { MdEmail, MdPhoneAndroid } from 'react-icons/md'
import ForAppointementBooking from './ForAppointementBooking'
import { useSession, signIn, signOut } from "next-auth/react";
import { CgProfile } from 'react-icons/cg'

function Modal({modalhandle, doctor}) {
   const [query, setQuery] = useState("");
   useEffect(() => {
     axios.get(`https://mediline.vercel.app/api/doctors?uid=${doctor?.uid}`).then((resp) => {
       setQuery(resp.data.data);
     });
     doctor = query
   }, [doctor,query]);
const [BookingModal,setBookingModal] = useState(false)
const handleonoff = ()=>{
    setBookingModal(false)
}
const [rating,setrating]=useState(0)

const [review,setreview]=useState("")
const [ heading,setheading] = useState("")
  const { data: session } = useSession();
const handleconfirm = async () => {
  let x = {
    review : review,
    rating : rating,
    heading : heading,
    name : session.user?.name,
    lastchecked : new Date()
    
  }
  doctor?.reviews?.push(x);

  let databody = {
    uid: doctor?.uid, //--
    name: doctor?.name, //--
    email: doctor?.email, //--
    hospitaladdress: doctor?.hospitaladdress, //--
    hospitalcity: doctor?.hospitalcity, //--
    hospitalname: doctor?.hospitalname, //--
    country: "India",
    hospitalcountry: "India",
    state: doctor?.state, //--
    registrationnumber: doctor?.registrationnumber,
    hospitalstate: doctor?.hospitalstate, //--
    hospitalphone: doctor?.hospitalphone, //--
    hospitalpincode: doctor?.hospitalpincode, //--
    services: doctor?.services,
    fees: doctor?.fees,
    timings: doctor?.timings,
    dayofweek: doctor?.dayofweek,
    hosptialemail: doctor?.hosptialemail, //--
    address: doctor?.address, //--
    city: doctor?.city, //--
    pincode: doctor?.pincode, //--
    Specialization: doctor?.specialization, //---
    Qualification: doctor?.qualification, //---
    info: doctor?.info,
    photo_url: doctor?.photo_url, //------
    phone: doctor?.phone,

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
    reviews : doctor?.reviews
  };
  axios
    .post(`/api/doctors/updateprofile?uid=${doctor?.uid}`, databody)
    .then(function (response) {
      console.log(response);
    });

};
  return (
    <div
      id="extralarge-modal"
      tabindex="-1"
      className=" overflow-y-auto backdrop-blur-3xl overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-7xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
              Dr. {doctor.name}
            </h3>
            <button
              onClick={modalhandle}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="extralarge-modal"
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
            <div className="flex flex-row p-1">
              <img className="w-32 h-32 rounded-full" src={doctor?.photo_url} />
              <div className="p-2">
                <p className=" font-bold leading-relaxed text-gray-500 dark:text-gray-400">
                  Dr. {doctor?.name}
                </p>
                <p className="   leading-relaxed text-gray-500 dark:text-gray-400">
                  <MdEmail className=" inline-block" />
                  {doctor?.email}
                </p>
                <p className="   leading-relaxed text-gray-500 dark:text-gray-400">
                  <MdPhoneAndroid className=" inline-block" />
                  {doctor?.phone}
                </p>
                <p className="   leading-relaxed text-gray-500 dark:text-gray-400">
                  <BiRegistered className=" inline-block" />
                  {doctor?.registrationnumber}
                </p>
              </div>
            </div>
            <div className="flex flex-col p-3 shadow-2xl rounded-2xl">
              <p className=" pt-4 text-2xl font-bold text-blue-900">
                Hospital/Clinic Information
              </p>
              <p className="pt-5 font-semibold text-xl text-gray-600">
                {doctor?.hospitalname}
              </p>
              <p className="text-gray-600 pt-3 display-linebreak ">
                <MdPhoneAndroid className=" inline-block" />{" "}
                {doctor?.hospitalphone}
              </p>
              <p className="text-gray-600 pt-3 display-linebreak ">
                {doctor?.hospitaladdress}
              </p>
              <p className="text-gray-600 pt-0 display-linebreak ">
                {doctor?.hospitalcity}, {doctor?.hospitalstate},{" "}
                {doctor?.hospitalpincode}
              </p>
              <p className="text-gray-600 pt-3 display-linebreak font-semibold ">
                Timings :{doctor?.timings}
              </p>
              <p className="text-gray-600 pt-3 display-linebreak font-semibold ">
                General Consultation Fees : {"\u20A8"} {doctor?.fees}
              </p>
              <div>
                <p className="flex justify-center items-center font-semibold p-3 text-xl">
                  {" "}
                  Services Offered by the Doctor
                </p>
                <div className="grid grid-cols-3">
                  {doctor?.services.split(",").map((service) => (
                    <p key={service}>
                      <p className=" inline-block">
                        {" "}
                        <GiPointing />
                        {service}
                      </p>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3 shadow-2xl rounded-2xl">
              <p className=" pt-4 text-2xl font-bold text-blue-900">
                Dcotor Information
              </p>
              <p className="pt-5 font-semibold text-xl text-gray-600">
                {doctor?.name}
              </p>
              <p className="text-gray-600 pt-3 display-linebreak ">
                <MdPhoneAndroid className=" inline-block" /> {doctor?.phone}
              </p>
              <p className="text-gray-600 pt-3 display-linebreak ">
                {doctor?.address}
              </p>
              <p className="text-gray-600 pt-0 display-linebreak ">
                {doctor?.city}, {doctor?.state}, {doctor?.pincode}
              </p>
              <p className="text-gray-600 pt-3 display-linebreak font-semibold ">
                Qualification : {doctor?.Qualification}
              </p>
              <p className="text-gray-600 pt-1 display-linebreak font-semibold ">
                Specialization : {doctor?.Specialization}
              </p>
            </div>
            <div className="border bg-slate-100 border-white shadow-2xl  rounded-xl p-1">
              <p className="pt-4 font-bold text-xl">Information</p>
              <p className="text-gray-600 pt-1 display-linebreak ">
                {doctor?.info}
              </p>
            </div>
            <button
              onClick={() => setBookingModal(!BookingModal)}
              className=" bg-green-500 rounded-full p-2 text-white font-bold shadow border border-green-500"
            >
              {" "}
              Book an Appointment
            </button>
          </div>
          {/* <!-- Modal footer --> */}
          <div className="p-3">
            <div className="text-3xl p-1 font-semibold"> Reviews</div>
            <div>
              <form>
                <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                  <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label for="comment" class="sr-only">
                      Your Review
                    </label>
                    <input
                      id="comment"
                      onChange={(e) => setheading(e.target.value)}
                      rows="4"
                      class="w-full px-0 p-4 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Heading ..."
                      value={heading}
                    ></input>
                    <textarea
                      id="comment"
                      onChange={(e) => setreview(e.target.value)}
                      rows="4"
                      class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write a Review..."
                      required
                      value={review}
                    ></textarea>
                  </div>
                  <div class="px-4 py-2 pt-4 border-black  shadow-2xl  dark:bg-gray-800 ">
                    <div className=" text-purple-900 font-semibold pt-2 pb-3 ">
                      Your Rating Out of 5
                    </div>
                    <label for="comment" class="sr-only">
                      Your Rating Out of 5
                    </label>
                    <input
                      onChange={(e) => setrating(e.target.value)}
                      id="comment"
                      rows="4"
                      type="number"
                      class="w-30 p-3 rounded-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Your Rating Out of 5....."
                      required
                    ></input>
                  </div>
                  <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button
                      onClick={() => handleconfirm()}
                      type="submit"
                      class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    >
                      Submit Review
                    </button>
                    <div class="flex pl-0 space-x-1 sm:pl-2"></div>
                  </div>
                </div>
              </form>
            </div>
            <div className="gap-4">
              <div className="text-3xl font-bold">
                Reviews ({doctor?.reviews?.length})
              </div>
              {doctor?.reviews?.map((review, index) => (
                <div
                  key={index}
                  class="w-full flex gap-5 justify-start items-start shadow-2xl rounded-3xl flex-col bg-gray-50 dark:bg-gray-800 p-8"
                >
                  <div class="flex flex-col md:flex-row justify-between w-full">
                    <div class="flex flex-row justify-between items-start">
                      <p class="text-xl md:text-2xl font-medium leading-normal text-gray-800 dark:text-white">
                        {review?.heading}
                      </p>
                    </div>
                    <div class="cursor-pointer mt-2 md:mt-0 text-3xl rounded-full p-4 text-semibold text-white bg-purple-700">
                      {review.rating}/5
                    </div>
                  </div>
                  <div id="menu" class="md:block">
                    <p class="mt-3 text-base leading-normal text-gray-600 dark:text-white w-full md:w-9/12 xl:w-5/6">
                     {review?.review}
                    </p>
                    <div class="hidden md:flex mt-6 flex-row justify-start items-start space-x-4"></div>

                    <div class="mt-6 flex justify-start items-center flex-row space-x-2.5">
                      <div>
                        <CgProfile className="text-4xl text-purple-800" />
                      </div>
                      <div class="flex flex-col justify-start items-start space-y-2">
                        <p class="text-base font-medium leading-none text-gray-800 dark:text-white">
                          {review?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            {/* <button data-modal-toggle="extralarge-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-toggle="extralarge-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> */}
          </div>
        </div>
        {BookingModal && (
          <ForAppointementBooking handleonoff={handleonoff} doctor={doctor} />
        )}
      </div>
    </div>
  );
}

export default Modal