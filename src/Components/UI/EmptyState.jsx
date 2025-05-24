import React from 'react'
import { Link } from 'react-router'

const EmptyState = () => {
  return (
    <div className="py-24 text-center pt-50">
      <h1 className="mb-3 text-7xl font-thin text-gray-900">No Data Found!</h1>
      <p className="mb-8 text-xl  text-gray-900 md:text-2xl">
        Browse, Search Doctors. Add to Booking.
      </p>
    </div>
  );
};

export default EmptyState;
