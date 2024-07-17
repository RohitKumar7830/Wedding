import { useState } from 'react';

const reviews = [
  {
    id: 1,
    image: "https://assets.website-files.com/60867261e3a2bf1d23a88274/62e0f8a347918bd9b0df9372_gallery%20img%205-min-p-500.jpg",
    text: "I am so happy that I chose ShadiBanao to organize my wedding. The team was so friendly and helpful throughout the process, and did a wonderful job of helping me get everything done in a very short time frame.",
  },
  {
    id: 2,
    image: "https://assets.website-files.com/60867261e3a2bf1d23a88274/62e0f8663c06ff1c63cbcf0a_gallery%20img%204-min-p-500.jpg",
    text: "My name is chirag yadav and i am a web developer.hope to see you in the upcoiming future",
  },
  {
    id: 3,
    image: "https://assets.website-files.com/60867261e3a2bf1d23a88274/62e0f8663c06ff1c63cbcf0a_gallery%20img%204-min-p-500.jpg",
    text: "I am so happy that I chose ShadiBanao to organize my wedding. The team was so friendly and helpful throughout the process, and did a wonderful job of helping me get everything done in a very short time frame.",
  },
  // Add more review objects as needed
];

export const ReviewCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="flex flex-col feature:flex-row items-center justify-center gap-8 p-6 max-w-7xl mx-auto">
      {/* Image container */}
      <div className="w-full feature:w-1/2">
        <img
          src={reviews[currentReview].image}
          alt="Wedding review image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text content container */}
      <div className="w-full feature:w-1/2 flex flex-col">
        <div className="text-4xl font-serif mb-4">&quot;</div>
        <p className="text-lg mb-4 italic">
          {reviews[currentReview].text}
        </p>
        <a href="#" className="text-sm uppercase tracking-wider text-blue-600 hover:underline">
          VIEW STORY &gt;
        </a>
        {/* Navigation arrows */}
        <div className="flex justify-end mt-4 gap-2">
          <button onClick={prevReview} className="bg-black text-white w-8 h-8 flex items-center justify-center">&lt;</button>
          <button onClick={nextReview} className="bg-black text-white w-8 h-8 flex items-center justify-center">&gt;</button>
        </div>
      </div>
    </div>
  );
};