import { Tab } from "@headlessui/react";
import React from "react";
import moment from "moment"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SlotGenerator() {
    const x = [
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 8],
      [1, 2, 3, 4, 5, 6, 8],
      [1, 2, 3, 4, 5, 7, 8],
      [1, 2, 3, 4, 5, 7, 8],
      [1, 2, 3, 4, 6, 7, 8],
    ];
    console.log("l")
    let days = [];
    let daysRequired = 7;

    for (let i = 0; i < daysRequired; i++) {
      days.push(moment().add(i, "days").format("dddd  Do MMM"));
    }

  
  return (
    <div class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <Tab.Group>
        <Tab.List className="flex justify-between  ">
          {days.map((day, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                  "ring-white  ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",
                  selected
                    ? " shadow bg-red-400"
                    : "text-gray-600 hover:bg-white/[0.12] hover:text-black"
                )
              }
            >
              {day}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel className="">
            {x[0].map((time,index)=>(
<button className="p-2" key={index}>{time}</button>
            ))                }
            </Tab.Panel><Tab.Panel>{x[1]}</Tab.Panel>
          <Tab.Panel>{x[2]}</Tab.Panel><Tab.Panel>{x[2]}</Tab.Panel>
          <Tab.Panel>{x[4]}</Tab.Panel><Tab.Panel>{x[3]}</Tab.Panel>
          <Tab.Panel>{x[6]}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default SlotGenerator;
