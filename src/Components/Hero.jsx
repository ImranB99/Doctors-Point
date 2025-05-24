import React, { useState } from "react";
import Blogs from "./../pages/Blogs";
import { IoSearch, IoSearchCircle } from "react-icons/io5";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="border-white border-2 shadow-xl bg-base-300 rounded-2xl pb-8">
      <div>
        <h1
          className="lg:text-5xl md:text-3xl text-center font-semibold sm:pt-8 pt-4
               "
        >
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h1>

        <p className="text-gray-500 mt-3 sm:text-lg text-center text-sm lg:w-[60%] lg:mx-auto mb-5 px-4 sm:px-0">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>

        <div>
          <form
            onSubmit={(e) => {
              handleSearch(e, searchText);
              // reset input
              setSearchText("");
            }}
            className="flex gap-1 justify-center mb-5"
          >
            <input
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              className="border sm:w-[40%]  border-gray-400 rounded-l-xl p-2"
              type="text"
              name=""
              id=""
              placeholder="Search any doctor..."
            />

            <button
              className=" bg-[#176AE5] border-2 p-2 border-[#176AE5] text-white rounded-r-xl"
              type="submit"
            >
              <IoSearch className="text-white cursor-pointer" size={24} />
            </button>
          </form>
        </div>
      </div>
      <div className="flex gap-3  justify-center mb-8">
        <img
          className="lg:w-[576px] lg:h-[350px] md:w-[350px] md:h-[250px] border-2 w-[300px] border-white rounded-2xl shadow-lg"
          src="/src/assets/banner-img-1.png"
          alt=""
        />
        <img
          className="lg:w-[576px] lg:h-[350px] md:w-[350px] md:h-[250px] hidden  sm:inline-block rounded-2xl border-2 border-white sm:rounded-2xl shadow-lg"
          src="https://media.istockphoto.com/id/1477483038/photo/doctors-nurse-or-laptop-in-night-healthcare-planning-research-or-surgery-teamwork-in-wellness.jpg?s=612x612&w=0&k=20&c=zl6vZU339QIPVzSV6wUTW3kXVNFfcyz9QXzrZ9FBsD8="
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
