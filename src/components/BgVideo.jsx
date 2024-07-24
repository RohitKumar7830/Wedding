import videoBg from '../assets/backgroundVideo.mp4';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';

export const BgVideo = () => {
  const text = "The Wedding Of Your Dreams";
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

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
        <motion.div
          className="text-4xl md:text-6xl flex flex-wrap tracking-wide items-center justify-center text-center font-serif "
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.div key={index} className="whitespace-nowrap mx-2 my-1">
              {word.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={child}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white">
        <div className='bg-white h-12 w-7 rounded-3xl flex items-center justify-center'>
          <IoIosArrowDown className='text-slate-500 size-6 animate-bounce' />
        </div>
      </div>
    </div>
  );
};