import Vogue from "../assets/VOGUE.svg"
import Brides from "../assets/BRIDES.svg"
import TheNewYorkTimes from "../assets/TheNewYorkTimes.svg"
import Cosmopolitian from "../assets/COSMOPOLITIAN.svg"

export const Featured = () => {
  return (
    <div className=" container h-screen w-screen flex flex-col items-center justify-center max-w-7xl ">
      <div className=" h-screen w-screen flex flex-col items-center">
        <div className="flex flex-col  justify-center gap-y-8 py-14">
          <div className=" text-xs tracking-[4px] flex items-center justify-center">
            AS FEATURED IN
          </div>
          {/* newspaper */}
          <div className="flex flex-col feature:flex-row  gap-x-10 w-full justify-between gap-y-12 ">
            <div className="flex justify-between items-center gap-x-10">
              <div className="flex items-center justify-center">
                <img
                  src={Vogue}
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={Brides}
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-x-16">
              <div className="flex items-center justify-center">
                <img
                  src={TheNewYorkTimes}
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={Cosmopolitian}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}