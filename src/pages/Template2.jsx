import React, { useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import welcome from "../assets/welcome.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import cornice from "../assets/cornice.png";
import baluster from "../assets/baluster.png";
import pillars from "../assets/pillars.png";
import arches from "../assets/arches.png";
import domes from "../assets/domes.png";
import savvy from "../assets/savvy.jpeg";
import zaveri from "../assets/zaveri.png";
import lnt from "../assets/lnt.png";
import psp from "../assets/psp.png";
import bapi from "../assets/bapi.png";
import shanti from "../assets/shanti.png";
import ValueCarousel from "./Benefits";
const SwastikGRCWebsite = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };
  const sliderArray = [slide1, slide2, slide3, slide4];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with contact info */}
      <div className="bg-white p-4 pl-8 flex justify-between items-center border-b">
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-yellow-600 text-xs">CALL NOW</p>
            <p className="font-semibold">+91 9794735353</p>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-semibold">Practicing</p>
            <p className="font-semibold">
              Since <span className="text-red-600">1999</span>
            </p>
          </div>
        </div>

        <div className="bg-red-600 p-4 rotate-45 translate-x-6">
          <div className="-rotate-45">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="flex justify-between items-center px-8 py-4 bg-slate-200">
        {/* <div className="flex flex-col">
          <div className="flex items-center m-auto">
            <img src={logo3} alt="Prebuilt GRC & FRP" className="h-32" />
          </div>
          <div className="flex items-center m-auto">
            <div>
              <h1 className="text-5xl font-semibold text-gray-800">PREBUILT</h1>
              <p className="text-red-600 text-sm font-bold">
                GRC AND FRP Componants
              </p>
            </div>
          </div>
          <div className="ml-14 mt-4 text-3xl">
            <p className="leading-relaxed">
              <span className="font-semibold">Arches,</span> Brackets,{" "}
              <span className="font-semibold">Bands & Panels,</span>
              <br />
              Balusters & Railings,{" "}
              <span className="font-semibold">Columns &</span>
              <br />
              <span className="font-semibold">Capitals,</span> Decorative
              Murals, <span className="font-semibold">Fins,</span>
              <br />
              Mouldings & Cornices,{" "}
              <span className="font-semibold">Planters /</span>
              <br />
              <span className="font-semibold">Landscapes,</span> Screens
            </p>
          </div>
        </div> */}
<div className="flex flex-col my-12 max-w-4xl mx-auto">
  <div className="flex items-center justify-center mb-4">
    <img src={logo3} alt="Prebuilt GRC & FRP" className="h-32 object-contain" />
  </div>
  
  <div className="flex items-center justify-center mb-8">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-800 tracking-wide font-serif">PREBUILT</h1>
      <p className="text-red-600 text-sm font-bold tracking-wider uppercase mt-1">
        Advanced CONCRETE LLP
      </p>
    </div>
  </div>
  
  <div className="text-center mt-6">
    <p className="text-3xl text-gray-600 leading-relaxed">
      <span className="font-semibold text-gray-800">Arches,</span> Brackets,{" "}
      <span className="font-semibold text-gray-800">Bands & Panels,</span>
      <br />
      Balusters & Railings,{" "}
      <span className="font-semibold text-gray-800">Columns &</span>
      <br />
      <span className="font-semibold text-gray-800">Capitals,</span> Decorative
      Murals, <span className="font-semibold text-gray-800">Fins,</span>
      <br />
      Mouldings & Cornices,{" "}
      <span className="font-semibold text-gray-800">Planters /</span>
      <br />
      <span className="font-semibold text-gray-800">Landscapes,</span> Screens
    </p>
  </div>
</div>
        {/* Hero Slider */}
        <div className="relative w-2/3 h-106 overflow-hidden">
          {/* Display current slide with transition */}
          <div
            className="h-full w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            <div className="h-full w-full flex">
              {sliderArray.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Building with dome"
                  className="h-full w-full object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            {sliderArray.map((img, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-1 transition-colors duration-300 ${
                  index === activeSlide ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="m-8"></div>
      <div className="m-8"></div>
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-8 py-12 bg-slate-200 max-w-6xl mx-auto">
        <div className="w-1/5 md:w-1/5 lg:w-2/6 mb-6 md:mb-0 md:mr-8">
          <img
            src={welcome}
            alt="Building facade with decorative patterns"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-3/5">
          <h2 className="text-red-600 font-semibold tracking-wide">
            WELCOME TO
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            PREBUILT Advance Concrete LLP
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We are the one of the top market leader in the manufacturing of
            Glass Reinforced Concrete (GRC) product in Gurgaon, Delhi, Noida and
            NCR. We have vast expertise in this GRC Work. We are manufacturing
            these products by using best-in-class knitted metallic wire coated
            with synthetic materials.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            GRC Products like (GRC Jali, GRC Planter, GRC Column, Grc Sculpture,
            GRC Screen Design, GRC Fountain, GRC Columns capital, GRC Railings,
            GRC Cladding Panels) We believe and offer quality assured products
            made to the highest standard and which suits the expectation of our
            clients.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            We have a huge team of skilled professional who are giving the shape
            to the imagination through GRC products in North India with a huge
            satisfaction to the customers without compromising on the quality
            and service offered.
          </p>
        </div>
      </div>
      <div className="m-8"></div>
      <div className="m-8"></div>
      {/* Values Section */}
      <ValueCarousel />

      <div className="m-8"></div>
      <div className="m-8"></div>
      {/* Projects Section */}
      <div className="bg-gray-300 flex">
        <div className="w-1/5 p-8 bg-slate-400">
          <h2 className="text-4xl font-bold text-white"> OUR <br/>
            PROJECTS</h2>
        </div>

        <div className="w-4/5 p-8 overflow-x-auto">
          <div className="flex space-x-4">
            <div className="min-w-max">
              <img
                src={proj1}
                alt="Ambuja Reality"
                className="w-64 h-48 object-cover"
              />
              <p className="mt-2 font-semibold text-center">AMBUJA REALITY</p>
            </div>

            <div className="min-w-max">
              <img
                src={proj2}
                alt="Mall Siliguri"
                className="w-64 h-48 object-cover"
              />
              <p className="mt-2 font-semibold text-center">MALL - SILIGURI</p>
            </div>

            <div className="min-w-max">
              <img
                src={proj3}
                alt="B Safal"
                className="w-64 h-48 object-cover"
              />
              <p className="mt-2 font-semibold text-center">B SAFAL</p>
            </div>

            <div className="min-w-max">
              <img
                src={proj4}
                alt="Police Commissioner Office"
                className="w-64 h-48 object-cover"
              />
              <p className="mt-2 font-semibold text-center">
                POLICE COMMISSIONER OFFICE
              </p>
            </div>

            <div className="min-w-max">
              <img
                src={proj4}
                alt="Pandit Deendayal University"
                className="w-64 h-48 object-cover"
              />
              <p className="mt-2 font-semibold text-center">
                PANDIT DEENDAYAL UNIVERSITY
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-8"></div>
      <div className="m-8"></div>
      {/* Divisions Section */}
      <div className="py-16 px-8 bg-white relative">
        <div className="text-gray-100 text-9xl font-bold absolute top-0 left-0 w-full text-center opacity-10">
          DIVISIONS
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-gray-700 text-center mb-10">
            DIVISIONS
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-700 uppercase text-sm leading-relaxed">
              GLASS FIBER REINFORCED CONCRETE ALSO KNOWN AS GRC IS A CEMENT-
              BASED COMPOSITE MATERIAL REINFORCED WITH ALKALI RESISTANT FIBRES.
              GRC CAN BE FORMED INTO THIN SECTIONED LIGHTWEIGHT ELEMENTS AND
              PROVIDES DESIGNERS, ...
            </p>
          </div>

          <div className="flex justify-center gap-20">
            <div className="shadow-lg">
              <img
                src={cornice}
                alt="GRC/GFRC building"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-700">GRC Cornice</h3>
              </div>
            </div>

            <div className="shadow-lg">
              <img
                src={baluster}
                alt="FRP/GRP building"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-700">GRC Balusters</h3>
              </div>
            </div>

            <div className="shadow-lg">
              <img
                src={pillars}
                alt="PREFAB structure"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-700">GRC Pillars</h3>
              </div>
            </div>
            <div className="shadow-lg">
              <img
                src={arches}
                alt="PREFAB structure"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-700">GRC Arches</h3>
              </div>
            </div>
            <div className="shadow-lg">
              <img
                src={domes}
                alt="PREFAB structure"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-700">GRC Domes</h3>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute right-0 top-0 h-full w-1/3">
          <img src={slide3} alt="Decorative building element" className="h-full object-cover" />
        </div> */}
      </div>

      {/* Clientele Section */}
      <div className="py-16 px-8 bg-slate-300 relative">
        <div className="text-gray-100 text-9xl font-bold absolute top-0 left-0 w-full text-center opacity-10">
          CLIENTELE
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-gray-700 text-center mb-16">
            CLIENTELE
          </h2>

          <div className="flex justify-center items-center gap-8 mb-16">
            <img src={savvy} alt="Savvy" className="h-16" />
            <img
              src={zaveri}
              alt="Zaveri Realty"
              className="h-16"
            />
            <img src={lnt} alt="L&T" className="h-16" />
            <img src={psp} alt="PSP" className="h-16" />
            <img src={bapi} alt="Bapi" className="h-16" />
            <img src={shanti} alt="Shanti" className="h-16" />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-800 py-10 text-center">
        <h2 className="text-xl text-gray-300">
          OFFERING A QUALITY RANGE OF{" "}
          <span className="text-amber-300">CONCRETE & GRC</span> PRODUCTS
        </h2>
        <button className="mt-6 border border-gray-400 text-white px-6 py-2 hover:bg-gray-700 transition">
          <a href = ""> CONTACT US </a>
        </button>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-10 px-8">
        <div className="flex justify-between">
          <div className="w-1/4">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="font-semibold">REG. OFFICE & H.O.</p>
            </div>
            <p className="text-sm text-gray-600 ml-7">
            Rahmat Nagar,
              <br />
              Sultanpur Road, Land Mark : In Front Of Sainik Dhabha,
              <br />
              Gosaiganj Lucknow,
              Uttar Pradesh, India
            </p>
          </div>

          <div className="w-1/4">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-semibold">WORKING HOURS</p>
            </div>
            <p className="text-sm text-gray-600 ml-7">
              Monday to Saturday: 10:00 AM To 08:00 PM
            </p>
          </div>

          <div className="w-1/4">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="font-semibold">CALL US</p>
            </div>
            <p className="text-sm text-gray-600 ml-7">
              +91 9794735353, 70712 23454
            </p>
          </div>

          <div className="w-1/4">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="font-semibold">EMAIL US</p>
            </div>
            <p className="text-sm text-gray-600 ml-7">prebuiltgrc@gmail.com</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-2">
              <a href="#" className="bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src="/api/placeholder/80/30"
                alt="Trustpilot"
                className="h-8"
              />
              <img
                src="/api/placeholder/80/30"
                alt="Google Reviews"
                className="h-8"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-800">
                Privacy Policy
              </a>
              <span className="text-gray-500">|</span>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-800">
                Terms and Conditions
              </a>
              <span className="text-gray-500">|</span>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-800">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-3 text-center text-white text-sm">
        <p>© 2021 PREBUILT ADVANCE CONCRETE LLP ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default SwastikGRCWebsite;
