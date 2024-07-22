import videoBg from '../assets/backgroundVideo.mp4';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';

export const BgVideo = () => {
  const typingAnimation = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
      }
    })
  };

  const text = "The Wedding Of Your Dreams";
  const letters = text.split('');

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="font-thin tracking-widest mb-8">LET US MAKE</div>
        <div className="text-4xl md:text-6xl flex flex-wrap tracking-wide items-center justify-center text-center font-serif m-4">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={typingAnimation}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white">
        <div className='bg-white h-12 w-7 rounded-3xl flex items-center justify-center'>
          <IoIosArrowDown className='text-slate-500 size-6 animate-bounce' />
        </div>
      </div>
    </div>
  );
};