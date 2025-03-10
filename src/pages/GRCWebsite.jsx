import React, { useState,useEffect } from "react";
import logo from "../assets/logo.png";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
const GRCWebsite = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };
  const carouselImages = [
    "../assets/car1.png",
"../assets/car2.png",
"../assets/car3.png",
"../assets/car4.png"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
     {/* Header Section */}
     <div className="bg-white p-4 flex justify-between items-center border-b">
        {/* Left Section - Contact Info */}
        <div className="flex items-center space-x-8">
          <div>
            <p className="text-xs text-gray-500 uppercase">CALL NOW</p>
            <p className="text-black font-semibold">+91 9824972266</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Practicing</p>
            <p className="text-black font-semibold">
              Since <span className="text-red-600">1999</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main content - Carousel on left, Logo on right */}
      <div className="flex flex-col md:flex-row">
       {/* Logo and Navigation - Now on right */}
        <div className="md:w-1/3 flex flex-col justify-between">
          <div className="px-8 py-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white">
                {/* Placeholder for logo */}
                <span className="font-bold">S</span>
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-semibold text-gray-800">swastik</h1>
                <p className="text-red-600 text-sm font-bold">
                  GRC AND FRP Components
                </p>
              </div>
            </div>
            
            {/* Navigation Button */}
            <div className="mt-6 flex justify-end">
              <button className="p-2 bg-red-600 text-white rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Product Categories */}
            <div className="mt-8">
              <p className="text-black text-sm md:text-base">
                <span className="font-extrabold">Arches</span>, Brackets,{" "}
                <span className="font-extrabold">Bands & Panels</span>, Balusters &
                Railings, <span className="font-extrabold">Columns & Capitals</span>,
                Decorative Murals,
                <span className="font-extrabold"> Fins</span>, Mouldings & Cornices,{" "}
                <span className="font-extrabold">Planters / Landscapes</span>, Screens
              </p>
            </div>
          </div>
        </div>
         {/* Carousel Section - Now on left */}
         <div className="md:w-2/3 relative h-64 md:h-96 overflow-hidden">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={car1}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-xl md:text-3xl font-bold mb-2">
                    {index === 0
                      ? "Premium GRC Solutions"
                      : index === 1
                      ? "Elegant Architectural Elements"
                      : "Custom Designs & Solutions"}
                  </h1>
                  <p className="text-sm md:text-lg mb-4">
                    {index === 0
                      ? "Transform your spaces with our high-quality architectural products"
                      : index === 1
                      ? "Adding beauty and durability to your architectural projects"
                      : "Tailored to your specific requirements and aesthetic preferences"}
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 md:px-6 md:py-2 rounded-md text-sm font-medium">
                    Explore Products
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeSlide ? "bg-white" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      {/* Welcome Section - Exactly like the image */}
      <div className="flex flex-col md:flex-row">
        {/* Building Image on Left */}
        <div className="md:w-2/5 lg:w-1/3">
          <img
            src="/api/placeholder/400/600"  // Replace with your actual building image
            alt="Building with GRC components"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Welcome Text on Right */}
        <div className="md:w-3/5 lg:w-2/3 bg-white p-8 flex flex-col justify-center">
          <p className="text-red-600 font-medium mb-1">WELCOME TO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            SWASTIK GRC & FRP<br />
            COMPONANTS
          </h2>
          
          <div className="w-24 h-1 bg-red-600 mb-6"></div>
          
          <p className="text-gray-700 mb-4">
            SWASTIK GRC & FRP COMPONANTS is involved in the Manufacturing of building 
            construction products since 2010. SWASTIK is known for its strong technological 
            capability, scalability and adaptability that are required to meet the constantly 
            changing prerequisites of client.
          </p>
          
          <p className="text-gray-700 mb-6">
            Leveraging its industry expertise, stringent standards and driven workforce, 
            SWASTIK delivers unmatched services & quality products. This has made SWASTIK 
            innovative pioneer and leader in the industry.
          </p>
          
          <button className="text-red-600 font-medium self-start">READ MORE</button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-700 py-12 px-8">
        <div className="flex flex-wrap justify-between">
          <div className="text-center border-r border-gray-600 w-full sm:w-1/3 md:w-1/5 px-4 mb-6 md:mb-0">
            <div className="bg-gray-600 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-amber-500 font-semibold">MORE THAN 400+</h3>
            <p className="text-white">Corporate Clients</p>
          </div>

          <div className="text-center border-r border-gray-600 w-full sm:w-1/3 md:w-1/5 px-4 mb-6 md:mb-0">
            <div className="bg-gray-600 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-amber-500 font-semibold">VAST EXPERIENCE 18+</h3>
            <p className="text-white">in business</p>
          </div>

          <div className="text-center border-r border-gray-600 w-full sm:w-1/3 md:w-1/5 px-4 mb-6 md:mb-0">
            <div className="bg-gray-600 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-amber-500 font-semibold">BEST VALUE</h3>
            <p className="text-white">Products</p>
          </div>

          <div className="text-center border-r border-gray-600 w-full sm:w-1/3 md:w-1/5 px-4 mb-6 md:mb-0">
            <div className="bg-gray-600 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <h3 className="text-amber-500 font-semibold">RELIABLE</h3>
            <p className="text-white">Secure</p>
          </div>

          <div className="text-center w-full sm:w-1/3 md:w-1/5 px-4">
            <div className="bg-gray-600 h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-amber-500 font-semibold">ECO</h3>
            <p className="text-white">Friendly</p>
          </div>
        </div>
      </div>

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

          <div className="flex justify-between gap-8">
            <div className="shadow-lg">
              <img
                src="/api/placeholder/400/300"
                alt="GRC/GFRC building"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-700">GRC/GFRC</h3>
              </div>
            </div>

            <div className="shadow-lg">
              <img
                src="/api/placeholder/400/300"
                alt="FRP/GRP building"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-700">FRP/GRP</h3>
              </div>
            </div>

            <div className="shadow-lg">
              <img
                src="/api/placeholder/400/300"
                alt="PREFAB structure"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-gray-700">PREFAB</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/3">
          <img
            src="/api/placeholder/500/500"
            alt="Decorative building element"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-200 flex">
        <div className="w-1/5 p-8 bg-gray-300">
          <h2 className="text-gray-400 uppercase">OUR</h2>
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        </div>

        <div className="w-4/5 p-8 overflow-x-auto">
          <div className="flex space-x-4">
            <div className="min-w-max">
              <img
                src="/api/placeholder/300/200"
                alt="Ambuja Reality"
                className="w-64 h-48 object-cover"
              />
              <p className="mt-2 font-semibold text-center">AMBUJA REALITY</p>
            </div>

            <div className="min-w-max">
              <img
                src="/api/placeholder/300/200"
                alt="Mall Siliguri"
                className="w-64 h-48 object-cover"
              />
              <p className="mt-2 font-semibold text-center">MALL - SILIGURI</p>
            </div>

            <div className="min-w-max">
              <img
                src="/api/placeholder/300/200"
                alt="B Safal"
                className="w-64 h-48 object-cover"
              />
              <p className="mt-2 font-semibold text-center">B SAFAL</p>
            </div>

            <div className="min-w-max">
              <img
                src="/api/placeholder/300/200"
                alt="Police Commissioner Office"
                className="w-64 h-48 object-cover"
              />
              <p className="mt-2 font-semibold text-center">
                POLICE COMMISSIONER OFFICE
              </p>
            </div>

            <div className="min-w-max">
              <img
                src="/api/placeholder/300/200"
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

      {/* Clientele Section */}
      <div className="py-16 px-8 bg-white relative">
        <div className="text-gray-100 text-9xl font-bold absolute top-0 left-0 w-full text-center opacity-10">
          CLIENTELE
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-gray-700 text-center mb-16">
            CLIENTELE
          </h2>

          <div className="flex justify-center items-center gap-8 mb-16">
            <img src="/api/placeholder/120/60" alt="Savvy" className="h-12" />
            <img
              src="/api/placeholder/120/60"
              alt="Zaveri Realty"
              className="h-12"
            />
            <img src="/api/placeholder/120/60" alt="L&T" className="h-12" />
            <img src="/api/placeholder/120/60" alt="PSP" className="h-12" />
            <img src="/api/placeholder/120/60" alt="Bapi" className="h-12" />
            <img src="/api/placeholder/120/60" alt="Shanti" className="h-12" />
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
          CONTACT US
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
              Rahmat Nagar Sultanpur Road <br />
              Gosaiganj, Lucknow, Uttar Pradesh <br />
              Pincode: 226501 <br />
              Land Mark : In Front Of Sainik Dhabha <br />
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
              +91 9824972266 , 9228843721
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
            <p className="text-sm text-gray-600 ml-7">enquiry@swastikgrc.com</p>
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
        <p>© 2018 SWASTIK GRC AND FRP COMPONANTS ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default GRCWebsite;
