export const Experience = () => {
  return (
    <div className="flex w-full flex-col feature:flex-row items-center justify-center gap-8 p-6 max-w-7xl mx-auto">
      <div className="flex-1 flex flex-col items-center feature:items-start gap-y-4">
        <div className="text-4xl text-slate-900 tracking-wide font-serif ">
          We create wedding experiences
        </div>
        <div className="font-normal text-slate-700">
          At ShadiBanao, we help couples create wedding experiences that people discuss for years. Let us be your guide on one of the most important days of yours and make your dreams come true.
        </div>
        <button
          className="flex items-center justify-center px-2 py-1 bg-white hover:text-white font-thin tracking-wider duration-500 hover:bg-black border-2 border-black w-full feature:w-[50%]"
        >
          LEARN MORE
        </button>
      </div>
      <div className="flex-1 h-full w-full">
        <img
          className="w-full h-full flex-1 items-center justify-center object-cover"
          src="https://assets.website-files.com/607fe84879ed52683c358003/62e0faf547918b3299dfa7b3_img%203-min-p-500.jpg"
          alt="Wedding"
        />
      </div>
    </div>
  );
}
