import Vogue from "../assets/VOGUE.svg"
import Brides from "../assets/BRIDES.svg"
import TheNewYorkTimes from "../assets/TheNewYorkTimes.svg"
import Cosmopolitian from "../assets/COSMOPOLITIAN.svg"

export const Featured = () => {
  return (
    <div className=" container h-screen w-screen flex flex-col  max-w-7xl ">
      {/* featured section */}
      <div className=" w-screen max-w-7xl flex flex-col items-center pb-8">
        <div className="flex flex-col  justify-center gap-y-8 py-14">
          <div className=" text-xs tracking-[4px] flex items-center justify-center">
            AS FEATURED IN
          </div>

          {/* newspaper */}
          <div className="flex items-center justify-center feature:w-full gap-x-10 feature:gap-x-14 gap-y-10   md:gap-x-24 ">
            <div className="flex flex-col px-4 md:px-0 feature:flex-row justify-between items-center gap-y-12 feature:gap-x-14 md:gap-x-24 ">
              <img
                src={Vogue}
              />
              <img
                src={TheNewYorkTimes}
              />
            </div>
            <div className="flex flex-col px-4 md:px-0 feature:flex-row justify-between items-center gap-y-12 feature:gap-x-14 md:gap-x-24">
              <img
                src={Brides}
              />
              <img
                src={Cosmopolitian}
              />
            </div>
          </div>

          {/* text-info */}
          <div className="flex flex-col items-center justify-center flex-1 feature:flex-row mt-10 ">
            <div className="flex border-t-4 flex-grow w-[80%] feature:w-[20%] border-slate-600 mx-10"></div>
            <div className=" text-4xl py-3 text-center">All you need is on us</div>
            <div className="flex border-t-4 flex-grow w-[80%] feature:w-[20%] border-slate-600 mx-10"></div>
          </div>
          {/* text-description */}
          <div className="flex items-center justify-center text-center text-slate-500 font-light px-[20%] tracking-wide">
            We will take care of everything for you — from event planning and curation to design and production
          </div>

        </div>
      </div>
    </div>
  );
}