/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Router, useRouter } from "next/router";
import {
  MdClose,
  MdInvertColors,
  MdPerson,
  MdPhotoAlbum,
} from "react-icons/md";
import { set } from "date-fns";

const Chat = () => {
  const router = useRouter();
  const bottomRef = useRef(null);

  const { id } = router.query;
  const [doctor, setdoctor] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/patients_users?uid=${id}`).then((resp) => {
      setdoctor(resp.data.data);
    });
  }, [id]);

  const [list, setList] = useState([]);
  const [patientlist, setpatientlist] = useState([]);
  const [uniquepatients, setuniquepatients] = useState([]);
  const key = "patient_id";

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/appointments/forpatient?id=${id}`)
      .then((resp) => {
        setList(resp.data.data);
      });
  }, [id]);
  useEffect(() => {
    let x = [...new Map(list.map((item) => [item[key], item])).values()];
   
    setuniquepatients(x);
  }, [list]);
  const getdata = async () => {
    let i = 0;
    let urllist = [];
    for (i; i < uniquepatients?.length; i++) {
      const x = uniquepatients[i]?.doctor_id;
      const response = await axios.get(
        `http://localhost:3000/api/doctors?uid=${x}`
      );

      urllist.push(response.data.data);
    }
    setpatientlist(urllist);
  };

  useEffect(() => {
    getdata();
  }, [uniquepatients]);

  const [showchatofpatient, setshowchatofpatient] = useState([]);


  const [input, setInput] = useState();
  const [posts, setPosts] = useState([]);
  const sendmsg = () => {
    let databody = {
      patient_id: doctor?.uid,
      doctor_id: showchatofpatient?.uid,
      message: {
        message: input,
        sender: 1,
      },
    };
    axios
      .post(` http://localhost:3000/api/chats`, databody)
      .then(function (response) {
        console.log(response);
        setInput("");
      });
  };
  const [chatmsg, setchatmsg] = useState();
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/chats?id=${showchatofpatient?.uid}&id2=${doctor?.uid}`
      )
      .then((resp) => {
        setchatmsg(resp.data.data);
      });
  }, [showchatofpatient, doctor?.uid,chatmsg]);
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatmsg]);

 

  return (
    <div class="flex h-screen antialiased text-gray-800">
      <div class="flex flex-row h-full w-full overflow-x-hidden">
        <div class="md:flex md:flex-col md:py-8 md:pl-6 md:pr-2 md:w-64 md:bg-white md:flex-shrink-0 hidden ">
          <div class= " flex flex-row items-center justify-center h-12 w-full ">
            <div class=" flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
          <div class="ml-2 font-bold text-2xl">ChatWithDoc</div>
          </div>
          <button
            onClick={() => router.push(`/UserDashBoard/${doctor?.uid}`)}
            class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
          >
            Go back To Dashboard
          </button>
          <div class="flex flex-col mt-8">
            <div class="flex flex-row items-center justify-between text-xs">
              <span class="font-bold"> Conversations</span>
            </div>
            <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
              {patientlist?.map((patient, index) => (
                <button
                  onClick={() => setshowchatofpatient(patient)}
                  key={index}
                  class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                >
                  <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    <img
                      src={patient?.photo_url}
                      className="rounded-full"
                    ></img>
                  </div>
                  <div class="ml-2 text-sm font-semibold">{patient?.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div class="flex flex-col flex-auto h-full p-6">
          <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
            
                  {chatmsg?.map((chat, index) =>
                    chat?.message?.sender == 1 ? (
                      <div
                        key={index}
                        class="col-start-6 col-end-13 p-3 rounded-lg"
                      >
                        <div class="flex items-center justify-start flex-row-reverse">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            <img
                              src={doctor?.photo_url}
                              className="rounded-full"
                            ></img>
                          </div>
                          <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                            <div>{chat?.message?.message}</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div key={index} class="col-start-1 col-end-8 p-3 rounded-lg">
                        <div class="flex flex-row items-center">
                          <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            <img
                              src={showchatofpatient?.photo_url}
                              className="rounded-full"
                            ></img>
                          </div>
                          <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div class="flex flex-row items-center">
                              {chat?.message?.message}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div ref={bottomRef} />
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div class="flex-grow ml-4">
              <div class="relative w-full">
                <input
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="text"
                  class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                />
              </div>
            </div>
            <div class="ml-4">
              <button
                onClick={() => {
                  sendmsg();
                }}
                class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
              >
                <span>Send</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
