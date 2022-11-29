import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
export default function ProfilePhotoUploader({ uid, link,appointment ,photo_url
,setphoto}) {
  const [documents, setID] = useState();
  useEffect(() => {
    setID(appointment?.uid);
  }, [appointment]);
  console.log(documents);
  const [imageSrc, setImageSrc] = useState();
  const [docname, setdocname] = useState("");
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
    setphoto(data.secure_url)
  
    let databody = {
      photo_url : imageSrc
    };
    axios
      .post(
        ` https://mediline.vercel.app/api/doctors/updatephoto?uid=${documents}`,
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
