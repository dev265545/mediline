import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
export default function DocumentUploader({ uid, links,appointment }) {
const [documents,setdocuments] = useState()
useEffect(()=>{
    setdocuments(appointment?.documents)
},[appointment])
console.log(documents)
  const [imageSrc, setImageSrc] = useState();
  const [docname,setdocname] = useState("");
  const [uploadData, setUploadData] = useState();

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "mediline-uploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dfx9p6tpc/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
    let links = documents
    let x = {
        name : docname,
        link : data.secure_url
    }
    links.push(x);
    setdocuments(links)
    console.log(documents)
    let databody = {
      patient_doctor_id: appointment?.patient_doctor_id,
      patient_id: appointment?.patient_id,
      doctor_id: appointment?.doctor_id,
      typeofmeeting: "Consultation",
      time: appointment?.date,
      date: appointment?.time,
      fnsdate: appointment?.fnsdate,
      verifiedbydoctor: appointment?.verifiedbydoctor,
      verifiedbypatient: appointment?.verifiedbypatient,
      advice: appointment?.advice,
      notes: appointment?.notes,
      documents: documents,
      test: appointment?.test,
      reasonforappointment: appointment?.reasonforappointment,
      prescription: appointment?.prescreption,
    };
    axios
      .post(
        ` http://localhost:3000/api/appointments/updatebydoctor?id=${appointment.patient_doctor_id}`,
        databody
      )
      .then(function (response) {
        console.log(response);
        setdocname("");
        setImageSrc();
        setUploadData();
      });
  }

  return (
    <div>
      <main>
        <p className="text-sm text-gray-500 border-t pt-2">
          <label className="">Document Name</label>
          <input
            onChange={(e) => setdocname(e.target.value)}
            value={docname}
            className="rounded-lg text-sm"
            type="text"
            name="name"
          />
        </p>
        <form
          className=""
          method="post"
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p className="p-3">
            <input type="file" name="file" />
          </p>

          {imageSrc && !uploadData && (
            <p className="mt-3">
              <button className="rounded-lg text-white bg-blue-500 p-3 mt-4  ">
                Upload Files
              </button>
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
