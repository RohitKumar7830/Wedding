import videoBg from '../assets/backgroundVideo.mp4';

export const BgVideo = () => {
  return (
    <div className="relative w-screen overflow-hidden" style={{ height: 'calc(100vh - 70px)' }}>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="flex flex-col justify-center items-center relative top-[25%] text-white gap-y-8">
        <div className=" font-thin tracking-widest">LET US MAKE</div>
        <div className=" text-6xl  flex tracking-wide items-center justify-center text-center font-serif">
          The Wedding Of Your Dreams
        </div>
      </div>
    </div>
  );
};
