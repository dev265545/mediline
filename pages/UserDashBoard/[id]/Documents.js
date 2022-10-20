import React from 'react'
import ImageUploader from '../../../Components/UserPatientComponents/ImageUploader'
import SideNavbar from '../../../Components/UserPatientComponents/Sidebar'

function Documents() {
  return (
    <div>
      <main className="bg-white min-h-screen flex max-w-[1500px] mx-auto">
        <SideNavbar />
        <div className="flex-grow px-3 w-full sm:ml-[73px] md:ml-[250px] xl:ml-[250px]">
          <div className="text-3xl pt-6 pb-4   border-b text-gray-800 font-thin ">
        
            <p className=" text-gray-900 font-bold inline-block">
            Jane Doe
            </p>
            <p className="py-1 text-xl text-gray-600">
              Here are your documents, lab reports and certificates.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-10 ">
            <ImageUploader/>
            <div className="flex  lg:flex-row flex-col ">
           
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Documents