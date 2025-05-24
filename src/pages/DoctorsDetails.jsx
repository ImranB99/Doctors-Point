import { Link, useLoaderData, useParams } from "react-router";
import { addBooking } from "../Utils";
import { CartContext } from "../Providers/Context";

const DoctorsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleDoctor = data.find((doctor) => doctor.id === parseInt(id));
  const {
    image,
    name,
    specialty,
    current_hospital,
    registration_no,
    available_days,
    fee,
  } = singleDoctor;

  const handleBooking = () => {
    addBooking(singleDoctor);
  };
  return (
    <div className="pb-10">
      <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-semibold mb-3">
          Doctor’s Profile Details
        </h1>
        <p className="sm:text-center md:text-lg text-gray-700 text-justify">
          Trust your health with our team of certified and experienced doctors.
          Each profile highlights their background, specialties, and commitment
          to patient care.
        </p>
      </div>

      {/* Details */}
      <div>
        <div className="card card-side flex flex-col sm:flex-row bg-base-100 rounded-2xl shadow-md p-5">
          <figure>
            <img
              className="sm:w-[335px] sm:h-[300px] ml-3 rounded-2xl"
              src={image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title md:text-2xl lg:text-4xl">{name}</h2>
            <p>{specialty}</p>
            <p className="mt-3 font-semibold">
              <span className="text-gray-500">Working at</span> <br />{" "}
              {current_hospital}
            </p>
            <div className="border border-dashed border-gray-400 my-2"></div>

            <p className="text-gray-500">Reg No: {registration_no}</p>

            <div className="border border-dashed my-2 border-gray-400"></div>

            <div className="flex flex-col sm:flex-row mb-3 gap-3">
              <div className="font-semibold">Availability:</div>
              <div className="flex gap-2">
                {available_days.map((day) => (
                  <span className="badge badge-soft badge-primary">{day}</span>
                ))}
              </div>
            </div>

            <p>
              {" "}
              <span className="font-semibold">Consultation Fee:</span>{" "}
              <span className="text-blue-500 font-semibold">{fee}$</span>{" "}
              <span className="text-gray-500">(incl. Vat)</span>{" "}
              <span className="text-blue-500">Per consultation</span>
            </p>
          </div>
        </div>
      </div>
      {/* Appointment section */}
      <div className="mt-8 bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-semibold mb-8">
          Book an Appointment
        </h1>
        <div className="border border-dashed border-gray-400"></div>

        <div className="flex flex-row sm:justify-between p-5">
          <p className="font-semibold mr-10 sm:mr-0">Availability</p>
          <p className="badge badge-soft badge-success">Available Today</p>
        </div>
        <div className="border border-dashed border-gray-400 mb-8"></div>

        <div className="text-center">
          <Link to="/booking">
          <button
            onClick={handleBooking}
            className="btn bg-[#176AE5] text-white rounded-3xl w-[90%]"
          >
            Book Appointment Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDetails;
