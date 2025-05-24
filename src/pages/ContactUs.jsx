import React, { useState } from "react";

const ContactUs = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  const controlSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pt-10 pb-10">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          We’d love to hear from you! <br /> Write your problem in massage box.
        </h2>
        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
            // reset input
            setSearchText("");
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              placeholder="Write here..."
              rows="5"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button
          onClick={controlSearch}
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
