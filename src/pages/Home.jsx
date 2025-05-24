import React, { useState } from "react";
import Hero from "../Components/Hero";
import DoctorsContainer from "../Components/DoctorsContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [doctors, setDoctor] = useState(data);

  const handleSearch = (e, text) => {
    e.preventDefault();
    const searchDoctors = data.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(text.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(text.toLowerCase())
    );

    setDoctor(searchDoctors);
  };
  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <DoctorsContainer doctors={doctors} />
    </div>
  );
};

export default Home;
