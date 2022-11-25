import React, { useEffect, useState } from 'react'
import {useRouter} from "next/router"
import axios from 'axios';
import { CgProfile } from 'react-icons/cg';
import DoctorSidebar from '../../../Components/DoctorComponents/DoctorSidebar';

function Reviews() {
  const router = useRouter();
  const { id } = router.query;
  const [doctor, setdoctor] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3000/api/doctors?uid=${id}`).then((resp) => {
      setdoctor(resp.data.data);
    });
  }, [id]);
  let sum = 0
  for (let i = 0; i < doctor?.reviews?.length; i += 1) {

    sum += doctor?.reviews[i]?.rating;
   
  }

  console.log(sum/doctor?.reviews?.length);
  const date = new Date();
  const currentTime = date.getHours();

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
      <main className="bg-gray-50 min-h-screen flex max-w-[1500px] mx-auto">
        <DoctorSidebar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
            {greeting}{" "}
            <p className=" text-gray-900 font-bold inline-block">
              Dr. {doctor?.name}
            </p>
            <p className="py-1 text-xl text-gray-600">
              Happiness is the highest form of health.
            </p>
          </div>
          <div className="flex flex-row gap-10 bg-purple-50">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
              rel="stylesheet"
            />

            <section class=" flex font-medium items-center justify-center p-3 ">
              <section class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                <div class="flex items-center justify-between">
                  <span class="text-gray-400 text-sm"></span>
                </div>
                <div class="mt-6 w-fit mx-auto">
                  <img
                    src={doctor?.photo_url}
                    class="rounded-full w-28 "
                    alt="profile picture"
                    srcset=""
                  />
                </div>

                <div class="mt-8 flex items-center justify-center ">
                  <h2 class="text-white font-bold text-2xl tracking-wide">
                    Dr. {doctor?.name}{" "}
                  </h2>
                </div>
                <p class="text-emerald-400 font-semibold mt-2.5">
                  {doctor?.Qualification}
                </p>
                <div class="mt-3 flex items-center justify-center text-white text-sm">
                  {doctor?.reviews?.length} Reviews
                </div>
                <div class="mt-3  items-center justify-center text-white text-sm grid grid-rows-1">
                  <p>Avg Rating :</p>
                  <p className="flex items-center justify-center">
                    {sum / doctor?.reviews?.length}
                  </p>
                </div>
                <div class=" flex items-center justify-center h-1 w-full bg-black mt-8 rounded-full">
                  <div class="h-1 rounded-full w-full bg-yellow-500 text-white "></div>
                </div>
              </section>
            </section>
            <div class="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
              <div class="flex flex-col justify-start items-start w-full space-y-8">
                <div class="flex justify-start items-start">
                  <p class="text-3xl lg:text-4xl font-bold  leading-7 lg:leading-9 text-purple-800 dark:text-white ">
                    Reviews
                  </p>
                </div>
                {doctor?.reviews?.map((review, index) => (
                  <div
                    key={index}
                    class="w-full flex justify-start items-start shadow-2xl rounded-3xl flex-col bg-gray-50 dark:bg-gray-800 p-8"
                  >
                    <div class="flex flex-col md:flex-row justify-between w-full">
                      <div class="flex flex-row justify-between items-start">
                        <p class="text-xl md:text-2xl font-medium leading-normal text-gray-800 dark:text-white">
                          {review.review}
                        </p>
                      </div>
                      <div class="cursor-pointer mt-2 md:mt-0 text-3xl rounded-full p-4 text-semibold text-white bg-purple-700">
                        {review.rating}/5
                      </div>
                    </div>
                    <div id="menu" class="md:block">
                      <p class="mt-3 text-base leading-normal text-gray-600 dark:text-white w-full md:w-9/12 xl:w-5/6">
                        When you want to decorate your home, the idea of
                        choosing a decorative theme can seem daunting. Some
                        themes seem to have an endless amount of pieces, while
                        others can feel hard to accomplish
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default Reviews