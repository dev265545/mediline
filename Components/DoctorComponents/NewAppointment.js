import React, { useState } from 'react'
import { BiPlusCircle } from 'react-icons/bi';
import NewAppointmentModal from './NewAppointmentModal';


function NewAppointment({doctor}) {

      let [isOpen, setIsOpen] = useState(false);

      function closeModal() {
        setIsOpen(false);
      }

      function openModal() {
        setIsOpen(true);
      }



  return (
    <div   className="p-4  w-[250px] h-[155px]  wavy   rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col">
        <div className=" flex justify-end">
          <button onClick={openModal}
            className=" bg-white  rounded-full font-bold uppercase text-xs p-2  shadow-lg hover:shadow-md outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
          >
              <BiPlusCircle className="text-4xl   rounded-full "></BiPlusCircle>
         
          </button>
        </div>
        
        <p className="text-white font-bold inline-block">
         Make a New Clinic Appointment
        </p>
      </div>
{isOpen && <NewAppointmentModal doctor={doctor} isOpen= {isOpen} closeModal={closeModal} openModal={openModal} />}
    </div>
  );
}

export default NewAppointment