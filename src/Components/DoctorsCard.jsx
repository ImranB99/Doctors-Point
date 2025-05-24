import React from "react";
import { Link } from "react-router";

const DoctorsCard = ({ doctor }) => {
  const { id, image, name, experience, specialty, registration_no } = doctor;

  return (
    <div>
      <div className="card  bg-base-100   w-96 shadow-md">
        <figure className="mb-2">
          <img className="h-70 w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 ">
            <div className="badge badge-soft badge-success font-semibold mb-2 ">
              Available
            </div>
            <div className="badge badge-soft badge-info mb-2">
              {experience} experience
            </div>
          </div>
          <h2 className="card-title text-3xl mb-2">{name}</h2>
          <p className="text-xl font-semibold text-gray-500">{specialty}</p>

          <div className="border border-dashed border-gray-400"></div>

          <p className="mb-2 text-md font-semibold text-gray-500">
            Reg No: {registration_no}
          </p>

          <div className="card-actions justify-center">
            <Link to={`/doctor-details/${id}`}>
              <button className="btn btn-outline btn-info hover:bg-[#176AE5] hover:text-white ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DoctorsCard;
