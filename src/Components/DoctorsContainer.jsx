import React, { useEffect, useState } from "react";
import DoctorsCard from "./DoctorsCard";
import doctorImg from "../assets/success-doctor.png"
import reviewImg from "../assets/success-review.png"
import patientsImg from "../assets/success-patients.png"
import stuffsImg from "../assets/success-staffs.png"

const DoctorsContainer = ({ doctors }) => {
  const [displayDoctor, setDisplayDoctor]=useState([])
  const [showAll,setShowAll]=useState(false)
  useEffect(()=>{
    if (showAll) {
      setDisplayDoctor(doctors)
    } else {
      setDisplayDoctor(doctors.slice(0,6))
    }
  },[doctors,showAll])
  return (
    <div className="pt-8">
      <div>
        <h1 className="lg:text-5xl md:text-3xl text-2xl text-center">
          Our Best Doctors
        </h1>
        <p className="text-gray-600 text-center pt-3 lg:w-[60%] lg:mx-auto">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      {/* Doctor all Card */}
      <div className="py-12">
        <div className="grid place-items-center lg:w-[70%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayDoctor.map((doctor) => (
            <DoctorsCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        {/* Show btn */}
      <div className="text-center">
        <button 
        onClick={()=>{
          setShowAll(!showAll)
          if(showAll) window.scrollTo(0,600)
        }} 
        className="btn bg-[#176AE5] text-white ">
          {showAll? "View Less Doctors":"View All Doctors"}
        </button>
      </div>
      </div>
      {/* Last */}
      <div>
        <div className=" mb-10">
        <h3 className="text-2xl font-semibold text-center mb-3">We Provide Best Medical Services</h3>
        <p className="text-center">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

        {/*  */}
        <div className="flex justify-center items-center  gap-5  mt-5 pb-10 flex-col sm:flex-row">
            <div className="bg-white shadow-md flex flex-col gap-3 pt-6 rounded-2xl pb-6 pl-6 w-[283px]">
                <img className="w-[60px] h-[60px]" src={doctorImg} alt="" />
                <h3 className="text-7xl font-semibold">199+</h3>
                <p className="text-xl">Total Doctors</p>
            </div>
            <div className="bg-white shadow-md flex flex-col gap-3 pt-6 rounded-2xl pb-6 pl-6 w-[283px]">
                <img className="w-[60px] h-[60px]" src={reviewImg} alt="" />
                <h3 className="text-7xl font-semibold">467+</h3>
                <p className="text-xl">Total Reviews</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl flex flex-col gap-3 pt-6 pb-6 pl-6 w-[283px]">
                <img className="w-[60px] h-[60px]" src={patientsImg} alt="" />
                <h3 className="text-7xl font-semibold">1900+</h3>
                <p className="text-xl">Total Patients</p>
            </div>
            <div className="bg-white shadow-md rounded-2xl flex flex-col gap-3 pt-6 pl-6 pb-6 w-[283px]">
                <img className="w-[60px] h-[60px]" src={stuffsImg} alt="" />
                <h3 className="text-7xl font-semibold">300+</h3>
                <p className="text-xl">Total Stuffs</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DoctorsContainer;
