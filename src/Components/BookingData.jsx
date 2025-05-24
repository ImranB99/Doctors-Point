import React from "react";
import { MdDeleteForever } from "react-icons/md";

const BookingData = ({ doctor, deletable, handleDelete }) => {
  const { id, name, specialty, fee } = doctor;
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <div className="sm:flex pb-5  justify-between items-center">
        <div>
          <h1 className="md:text-xl lg:text-2xl font-semibold">{name}</h1>
          <p>{specialty}</p>
        </div>
        <div>
          <p>Appointment Fee : {fee}$ + Vat</p>
        </div>
      </div>

      <div onClick={() => handleDelete(id)}>
        {deletable && (
          <div className="btn btn-outline btn-error rounded-2xl w-full badge-error cursor-pointer ">
            Cancel Appointment
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingData;
