import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Router, useRouter } from "next/router";
function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  const [user, setuser] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3000/api/patients_users?uid=${id}`).then((resp) => {
      setuser(resp.data.data);
    });
  }, [id]);
  const [name, setName] = useState(session?.user?.name);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [allergies, setallergies] = useState("");
  const [diseases, setdiseases] = useState("");
  const [weight, setweight] = useState("");
  const [bp, setbloodpressure] = useState("");
  const [medication, setmedication] = useState("");
  const [height, setheight] = useState("");
  const [temperature, settemperature] = useState("");
  const [click, SetClick] = useState(1);
  const [pincode, setPincode] = useState("");
  const [gender, setgender] = useState("");
  const [age, setAge] = useState("");
  console.log(user)
  const [isCheckedbp, setIsCheckedbp] = useState(false);
  useEffect(() => {
    setAddress(user?.address)
    setName(user?.name)
    setCity(user?.city)
    setAge(user?.age)
    setPhoneNo(user?.phone_no)
    setState(user?.state)
    setallergies(user?.allergies)
    setdiseases(user?.diseases)
    setweight(user?.weight?.weight)
    setheight(user?.height?.height)
    setbloodpressure(user?.pressure?.pressure)
    settemperature(user?.temperature?.temperature)
    sethemoglobin(user?.hemoglobin?.hemoglobin)
    setmedication(user?.medication)
    setDiabetic(user?.diabetic)
    sethighbp(user?.bp_patient)
    setgender(user?.gender)
    setInfo(user?.information)
    setBloodGroup(user?.blood_group)
    
  }, [user])
  
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    setDiabetic(isChecked)
  };
  const handleOnChangebp = () => {
    setIsCheckedbp(!isCheckedbp);
    sethighbp(isCheckedbp)
  };
  const [isChecked, setIsChecked] = useState(false);
  const [information, setInfo] = useState("");

  //Archit - -- - ---------------------------------
  const [blood_group, setBloodGroup] = useState("");
  const [state, setState] = useState("");
  const [hemoglobin, sethemoglobin] = useState("");
  const [highbp, sethighbp] = useState(isCheckedbp);

  const [phone_no, setPhoneNo] = useState();
  const [diabetic, setDiabetic] = useState(isChecked);
  //Archit---------------------------------------------
  const d = new Date();
  console.log(d + " dev");

  const addTodoHandler = async () => {
    let databody = {
      uid: session?.user?.id,
      name: name,
      email: session?.user?.email,
      age: age,
      blood_group: blood_group,
      phone_no: phone_no,
      address: address,
      city: city,
      country: "India",
      state: state,
      photo_url: session?.user?.image,
      documents: user?.documents,
      diabetic : diabetic,
      medication: medication,
      allergies: allergies,
      bp_patient: highbp,
      hemoglobin: {
        hemoglobin: hemoglobin,
        lastchecked: new Date(),
      },
      pressure: { pressure: bp, lastchecked: new Date() },
      information: information,
      weight: { weight: weight, lastchecked: new Date() },
      height: { height: height, lastchecked: new Date() },
      temperature: { temperature: temperature, last_checked: new Date() },
    };
    axios.post(`/api/patients_users/updateprofile?uid=${id}`, databody).then(function (response) {
      console.log(response);
    });
    router.push(`/UserDashBoard/${session?.user?.id}`);
  };

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
                    <p className="font-medium text-lg">Health Details</p>
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
                        <label htmlhtmlFor="full_name">Full Name</label>
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
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={session?.user?.email}
                          placeholder="email@domain.com"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="address">Address / Street</label>
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
                        <label htmlFor="city">City</label>
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
                        <label htmlFor="country">Country / region</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Country"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value="India"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="state">State / province</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => setState(e.target.value)}
                            name="state"
                            id="state"
                            placeholder="State"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={state}
                          />
                        </div>
                      </div>
                      {/* 
                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        value=""
                      />
                    </div> */}

                      <div className="md:col-span-5">
                        <div className="inline-flex items-center">
                          {/* <input
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="htmlForm-checkbox"
                        /> */}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="soda">Age</label>
                        <div className="h-10 w-20 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                            name="soda"
                            id="soda"
                            placeholder="0"
                            className="px-2 text-center appearance-none outline-none rounded text-gray-800 w-full bg-transparent"
                            value={age}
                          />
                        </div>
                      </div>

                      {/* //Archit-------------------------------------------------- */}

                      <div className="md:col-span-3">
                        <label htmlFor="pnum">Phone No.</label>
                        <div className="h-10 w-30 bg-gray-50 flex border border-gray-200   items-center mt-1">
                          <input
                            onChange={(e) => setPhoneNo(e.target.value)}
                            type="tel"
                            name="pnum"
                            id="pnum"
                            placeholder=""
                            className="px-2 text-center appearance-none outline-none  rounded text-gray-800 w-1/3 bg-transparent"
                            value={phone_no}
                          />
                        </div>
                      </div>

                      {/* //Archit------------------------------------------------------- */}
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
                {click == 2 && (
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlhtmlFor="full_name">Allergies</label>
                        <textarea
                          onChange={(e) => setallergies(e.target.value)}
                          type="text"
                          placeholder="List out all the Allergies you have if any with commas"
                          name="full_name"
                          id="full_name"
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={allergies}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="email">Diseases </label>
                        <textarea
                          type="text"
                          name="email"
                          id="email"
                          onChange={(e) => setdiseases(e.target.value)}
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={diseases}
                          placeholder="Mention Chronic Diseases you suffer from if any with commas"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="address">Body Weight</label>
                        <input
                          onChange={(e) => setweight(e.target.value)}
                          type=""
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={weight}
                          placeholder="Body Weight in Kg(s)"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="city">BLood Pressure</label>
                        <input
                          onChange={(e) => setbloodpressure(e.target.value)}
                          type="text"
                          name="city"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={bp}
                          placeholder="Your avg blood pressure otherwise Write NA"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="country">Body Height</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            type="text"
                            name="country"
                            id="country"
                            onChange={(e) => setheight(e.target.value)}
                            placeholder="Height in Cms"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={height}
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="state">Body Temperature</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => settemperature(e.target.value)}
                            name="state"
                            id="state"
                            placeholder="Temp in Degree Celcius"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={temperature}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="state">Hemoglobin Level</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => sethemoglobin(e.target.value)}
                            name="state"
                            id="state"
                            placeholder="Hemoglobin level"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            value={hemoglobin}
                          />
                        </div>
                      </div>
                      {/* 
                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        value=""
                      />
                    </div> */}

                      <div className="md:col-span-5">
                        <div className="inline-flex items-center">
                          {/* <input
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="htmlForm-checkbox"
                        /> */}
                        </div>
                      </div>

                      {/* //Archit------------------------------------------------------- */}
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
                        <label htmlhtmlFor="full_name">Medication</label>
                        <textarea
                          onChange={(e) => setmedication(e.target.value)}
                          type="text"
                          name="full_name"
                          id="full_name"
                          placeholder="Medication if you are on any (seperated by commas)"
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={medication}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="email">Diabetic</label>
                        <div class="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            checked={isChecked}
                            onChange={handleOnChange}
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />

                          <label
                            for="default-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            checked={!isChecked}
                            onChange={handleOnChange}
                            id="checked-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="checked-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="address">
                          High Blood Pressure Patient
                        </label>
                        <div class="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            checked={isCheckedbp}
                            onChange={handleOnChangebp}
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />

                          <label
                            for="default-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Yes
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            checked={!isCheckedbp}
                            onChange={handleOnChangebp}
                            id="checked-checkbox"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="checked-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            No
                          </label>
                        </div>
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="soda">Gender</label>
                        <div className="h-10 w-20 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            onChange={(e) => setgender(e.target.value)}
                            type="text"
                            name="soda"
                            id="soda"
                            placeholder="0"
                            className="px-2 text-center appearance-none outline-none rounded text-gray-800 w-full bg-transparent"
                            value={gender}
                          />
                        </div>
                      </div>

                      {/* //Archit-------------------------------------------------- */}

                      <div className="md:col-span-2">
                        <label htmlFor="pnum">Blood Group</label>
                        <div className="h-10 w-20 bg-gray-50 flex border border-gray-200   items-center mt-1">
                          <input
                            onChange={(e) => setBloodGroup(e.target.value)}
                            type="text"
                            name="pnum"
                            id="pnum"
                            placeholder=""
                            className="px-2 text-center appearance-none outline-none  rounded text-gray-800 w-full bg-transparent"
                            value={blood_group}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2"></div>
                      {/* 
                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        value=""
                      />
                    </div> */}

                      <div className="md:col-span-5">
                        <div className="inline-flex items-center">
                          {/* <input
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="htmlForm-checkbox"
                        /> */}
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <label htmlhtmlFor="full_name">
                          Any other Information
                        </label>
                        <textarea
                          onChange={(e) => setInfo(e.target.value)}
                          type="text"
                          name="full_name"
                          id="full_name"
                          placeholder="Any other information you want to specify"
                          className="h-20 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={information}
                        />
                      </div>

                      {/* //Archit-------------------------------------------------- */}

                      {/* //Archit------------------------------------------------------- */}
                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          <button
                            onClick={() => addTodoHandler()}
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
      </div>
    </div>
  );
}

export default Profile;
