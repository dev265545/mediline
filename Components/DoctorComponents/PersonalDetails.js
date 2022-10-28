import React from 'react'

function PersonalDetails() {
  return (
    <div className="lg:col-span-2">
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-5">
          <label htmlFor="full_name">Full Name</label>
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
          <label for="email">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={email}
            placeholder="email@domain.com"
          />
        </div>

        <div className="md:col-span-3">
          <label for="address">Address / Street</label>
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
          <label for="city">City</label>
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
          <label for="country">Country / region</label>
          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
            <input
              onChange={(e) => setCountry(e.target.value)}
              name="country"
              id="country"
              placeholder="Country"
              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              value={country}
            />
            <button
              tabIndex="-1"
              className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
            ></button>
            <button
              tabIndex="-1"
              for="show_more"
              className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
            ></button>
          </div>
        </div>

        <div className="md:col-span-2">
          <label for="state">State / province</label>
          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
            <input
              onChange={(e) => setState(e.target.value)}
              name="state"
              id="state"
              placeholder="State"
              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              value={state}
            />
            <button
              tabIndex="-1"
              className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
            ></button>
            <button
              tabIndex="-1"
              for="show_more"
              className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
            ></button>
          </div>
        </div>

        <div className="md:col-span-1">
          <label for="zipcode">Zipcode</label>
          <input
            onChange={(e) => setPincode(e.target.value)}
            type="text"
            name="zipcode"
            id="zipcode"
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder=""
            value={pincode}
          />
        </div>

        <div className="md:col-span-1">
          <label for="soda">Post</label>

          <input
            onChange={(e) => setPost(e.target.value)}
            type="string"
            name="soda"
            id="soda"
            placeholder="Dr."
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={post}
          />
        </div>

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
  );
}

export default PersonalDetails