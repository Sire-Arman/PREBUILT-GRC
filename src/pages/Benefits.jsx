import React from "react";
import '../index.css'
import { Users, Briefcase, Diamond, ThumbsUp, Leaf } from "lucide-react";

const ValueSection = () => {
  const carouselItems = [
    {
      icon: <ThumbsUp />,
      title: "RELIABLE",
      description: "Secure",
    },
    {
      icon: <Leaf />,
      title: "ECO",
      description: "Friendly",
    },
    {
      icon: <Users />,
      title: "400+",
      description: "Corporate Clients",
    },
    {
      icon: <Briefcase />,
      title: "18+ YEARS",
      description: "Experience",
    },
    {
      icon: <Diamond />,
      title: "BEST VALUE",
      description: "Products",
    },
  ];

  return (
    <div className="bg-[#474431] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="group border border-[#C4BBAE] p-4 sm:p-6 text-center flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 hover:bg-[#5a5542]"
            >
              {/* Flip Card Container */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 perspective-1000">
                <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                  {/* Front Face */}
                  <div className="absolute w-full h-full backface-hidden">
                    <div className="w-full h-full text-white">
                      {React.cloneElement(item.icon, {
                        className: "w-full h-full text-white",
                      })}
                    </div>
                  </div>
                  {/* Back Face */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className="w-full h-full text-amber-500 flex items-center justify-center">
                      {React.cloneElement(item.icon, {
                        className: "w-3/4 h-3/4 text-amber-500",
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h4 className="text-base sm:text-lg text-amber-500 font-semibold mb-1 sm:mb-2">
                {item.title}
              </h4>
              <p className="text-white text-xs sm:text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueSection;