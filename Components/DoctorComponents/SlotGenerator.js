import { Tab } from "@headlessui/react";
import React from "react";
import moment from "moment"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SlotGenerator() {
    let days = [];
    let daysRequired = 7;

    for (let i = 0; i < daysRequired; i++) {
      days.push(moment().add(i, "days").format("dddd  Do MMM"));
    }

    console.log(days);

  return (
    <div class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <Tab.Group>
        <Tab.List className="flex justify-between  ">
          {days.map((day,index) => (
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
          <Tab.Panel></Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 1</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default SlotGenerator;
