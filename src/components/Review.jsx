import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    image: "https://assets.website-files.com/60867261e3a2bf1d23a88274/62e0f8a347918bd9b0df9372_gallery%20img%205-min-p-500.jpg",
    text: "I am so happy that I  process, and did a wonderful chose ShadiBanao to organize my wedding. The team was so friendly and helpful throughout the job of helping me get everything done in a very short time frame.",
  },
  {
    id: 2,
    image: "https://assets.website-files.com/60867261e3a2bf1d23a88274/62e0f8663c06ff1c63cbcf0a_gallery%20img%204-min-p-500.jpg",
    text: "I am so happy that I chose ShadiBanao to organize my wedding. The team was so friendly and helpful throughout the process, and did a wonderful job of helping me get everything done in a very short time frame.",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/full-shot-couple-posing-together_23-2149956397.jpg?semt=ais_user",
    text: "the process, and did a wonderful job of helping me get everything done in a very short time frame..I am so happy that I chose ShadiBanao to organize my wedding. The team was so friendly and helpful throughout ",
  },
  // Add more review objects as needed
];


export const ReviewCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = reviews.map((review) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = review.image;
          img.onload = resolve;
        });
      });
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    loadImages();
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (!imagesLoaded) {
    return <div className="h-96 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col feature:flex-row items-center justify-center gap-8 p-6 max-w-7xl mx-auto transition-all duration-1000 ease-in-out">
      {/* Image container */}
      <div className="w-full feature:w-1/2 h-96 relative overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={reviews[currentReview].id}
            src={reviews[currentReview].image}
            alt="Wedding review image"
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Text content container */}
      <div className="w-full feature:w-1/2 flex flex-col">
        <div className="text-4xl font-serif mb-4">&quot;</div>
        <AnimatePresence initial={false}>
          <motion.p
            className="text-lg mb-4 italic"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {reviews[currentReview].text}
          </motion.p>
        </AnimatePresence>
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