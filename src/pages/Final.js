import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../components/Header";
import coffee from "../assets/coffee.jpg";

const Final = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleSubmit = () => {
    // Navigate to player1.js after the calculation
    navigate("/"); // Adjust the path according to your routing setup
  };
  return (
    <div className="main-section">
      <Header />
      <main className="p-4 md:p-6">
        <div className="flex flex-col items-center justify-start bg-white text-black pt-[4rem] gap-8">
          <img
            src={coffee}
            alt="Calculator Illustration"
            className="w-[30rem] h-auto"
          />
          <p className="font-semibold text-black">ILUX Insulated Travel Coffee Mug</p>
          <button
            className="mt-8 px-6 py-3 border-2 border-pink-500 text-black hover:bg-pink-500 hover:text-white rounded-md font-semibold uppercase w-[28rem] text-lg tracking-wide"
            onClick={handleSubmit}
          >
            START AGAIN
          </button>
        </div>
      </main>
    </div>
  );
};

export default Final;
