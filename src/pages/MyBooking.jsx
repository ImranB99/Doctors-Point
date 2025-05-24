import React, { useEffect, useState } from "react";
import { getBookings, removeDoctor } from "../Utils";
import DoctorsCard from "../Components/DoctorsCard";
import EmptyState from "../Components/UI/EmptyState";
import BookingData from "../Components/BookingData";

const MyBooking = () => {
  const [displayDoctor, setDisplayDoctor] = useState([]);
  useEffect(() => {
    const savedDoctor = getBookings();
    setDisplayDoctor(savedDoctor);
  }, []);

  const handleDelete = (id) => {
    removeDoctor(id);
    setDisplayDoctor(getBookings());
  };

  if (displayDoctor.length < 1) return <EmptyState />;

  return (
    <div className="py-12">
        <div>
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-semibold pb-5">
          My Today Appointments
        </h1>
        <p className="text-gray-700 text-center pb-8">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      <div className=" flex flex-col gap-3">
        {displayDoctor.map((doctor) => (
          <BookingData
            key={doctor.id}
            doctor={doctor}
            deletable={true}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
