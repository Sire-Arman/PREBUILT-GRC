// import React, { useState, useEffect } from 'react';
// import { Users, Briefcase, Diamond, ThumbsUp, Leaf } from 'lucide-react';

// const ValueCarousel = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const carouselItems = [
//     {
//       icon: <Users className="w-10 h-10 text-white" />,
//       title: "More Than 400+",
//       description: "Corporate Clients",
//       delay: "100ms"
//     },
//     {
//       icon: <Briefcase className="w-10 h-10 text-white" />,
//       title: "Vast Experience 18+",
//       description: "in business",
//       delay: "250ms"
//     },
//     {
//       icon: <Diamond className="w-10 h-10 text-white" />,
//       title: "Best Value",
//       description: "Products",
//       delay: "350ms"
//     },
//     {
//       icon: <ThumbsUp className="w-10 h-10 text-white" />,
//       title: "Reliable",
//       description: "& Secure",
//       delay: "450ms"
//     },
//     {
//       icon: <Leaf className="w-10 h-10 text-white" />,
//       title: "ECO",
//       description: "Friendly",
//       delay: "550ms"
//     }
//   ];

//   const totalItems = carouselItems.length;
//   const visibleItems = 4; // Number of items visible at once
  
//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setActiveSlide((prev) => (prev + 1) % totalItems);
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   // Auto-scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, [activeSlide]);

//   return (
//     <div className="bg-custom py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="relative">
//           {/* Carousel container */}
//           <div className="overflow-hidden">
//             <div 
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${(activeSlide * (100 / visibleItems))}%)` }}
//             >
//               {/* Render carousel items and duplicates for infinite effect */}
//               {[...carouselItems, ...carouselItems].map((item, index) => (
//                 <div 
//                   key={index} 
//                   className="w-1/4 flex-shrink-0 px-2 animate-fadeIn"
//                   style={{ animationDelay: item.delay }}
//                 >
//                   <div className="bg-custom p-6 rounded-lg text-center h-full">
//                     <div className="flex justify-center mb-4 transition-transform duration-500 hover:rotate-y-180 group">
//                       <div className="relative w-10 h-10 transition-transform duration-500 transform group-hover:rotate-y-180">
//                         {item.icon}
//                       </div>
//                     </div>
//                     <h4 className="text-lg text-amber-500 font-semibold mb-1">{item.title}</h4>
//                     <p className="text-white">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ValueCarousel;
import React from "react";
import { Users, Briefcase, Diamond, ThumbsUp, Leaf } from "lucide-react";

const ValueSection = () => {
  const carouselItems = [
    {
      icon: <ThumbsUp className="w-12 h-12 text-white transition-transform transform group-hover:rotate-y-180" />,
      title: "RELIABLE",
      description: "Secure",
    },
    {
      icon: <Leaf className="w-12 h-12 text-white transition-transform transform group-hover:rotate-y-180" />,
      title: "ECO",
      description: "Friendly",
    },
    {
      icon: <Users className="w-12 h-12 text-white transition-transform transform group-hover:rotate-y-180" />,
      title: "MORE THAN 400+",
      description: "Corporate Clients",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-white transition-transform transform group-hover:rotate-y-180" />,
      title: "VAST EXPERIENCE 18+",
      description: "in business",
    },
    {
      icon: <Diamond className="w-12 h-12 text-white transition-transform transform group-hover:rotate-y-180" />,
      title: "BEST VALUE",
      description: "Products",
    },
  ];

  return (
    <div className="bg-[#474431] py-12">
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        <div className="grid grid-cols-5 gap-6">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="group border border-[#C4BBAE] p-6 text-center flex flex-col items-center justify-center relative"
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg text-amber-500 font-semibold">{item.title}</h4>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
