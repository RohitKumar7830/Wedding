import videoBg from '../assets/backgroundVideo.mp4';
import { IoIosArrowDown } from "react-icons/io";

export const BgVideo = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex flex-col justify-center items-center relative top-[30%] text-white gap-y-8">
        <div className="font-thin tracking-widest">LET US MAKE</div>
        <div className="text-6xl flex tracking-wide items-center justify-center text-center font-serif">
          The Wedding Of Your Dreams
        </div>
      </div>
      <div className="flex flex-col justify-center items-center absolute bottom-16 text-white gap-y-8">
        <div className='bg-white h-12 w-7 rounded-3xl flex items-center justify-center'>
          <IoIosArrowDown className='text-slate-500 size-6 animate-bounce' />
        </div>
      </div>
    </div>
  );
};
