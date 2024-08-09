import React from 'react';
import Vogue from "../assets/VOGUE.svg";
import Brides from "../assets/BRIDES.svg";
import TheNewYorkTimes from "../assets/TheNewYorkTimes.svg";
import Cosmopolitan from "../assets/COSMOPOLITIAN.svg";

export const NewspaperSection = () => {
  const logos = [
    { src: Vogue, alt: "Vogue" },
    { src: Brides, alt: "Brides" },
    { src: TheNewYorkTimes, alt: "The New York Times" },
    { src: Cosmopolitan, alt: "Cosmopolitan" },
  ];

  return (
    <section className="py-8 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-xs uppercase tracking-wider text-center mb-6 text-gray-500">
          As Featured In
        </h2>
        <div className="grid grid-cols-2 feature:grid-cols-4 gap-10 feature:gap-16 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[180px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};