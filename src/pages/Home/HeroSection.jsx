import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
// import bannerImg from "../../assets/banner.png";
import bannerImg from "../../assets/banner.jpg"

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="bg-colorBG pt-20">
      <div className=" container mx-auto max-w-screen-2xl py-20 px-5 flex flex-col lg:flex-row justify-between items-center">
        {/* ------------------------ */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Creative Web Desing For Businesses
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of businesses already growing with our solutions.
            Let’s help you take your business to the next level!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
            <button className="flex items-center gap-4 bg-blue-600 text-white px-6 py-3 rounded-md justify-center space-x-2 hover:bg-blue-700 transition">
              <span>Get Started</span>
              <FaArrowRight />
            </button>

            <button className="border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white text-blue-600 transition">
              Contact US
            </button>
          </div>
        </div>

        {/* ------------------------ */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative">
          <div className="relative group">
          <img className="w-full sm:w-[30rem] h-[20rem]" src={bannerImg} alt="Banner Image" />
            <button
              onClick={openModal}
              className=" absolute inset-0 flex items-center justify-center rounded-md group-hover:opacity-80"
            >
              <IoPlayCircleOutline className="text-white text-5xl hover:bg-blue-600 rounded-md" />
            </button>
          </div>
        </div>

        {showModal && (
          <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full">
              <div className="text-end">
                <button
                  onClick={closeModal}
                  className="bg-black p-2 rounded-full text-white font-bold"
                >
                  <RxCross1 className="text-2xl hover:opacity-50" />
                </button>
              </div>

              <iframe
                className=" w-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xyMhUfNZYEk?si=yciZE0E2uKsIRYkQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
