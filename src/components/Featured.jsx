import { ReviewCarousel } from "./Review"
import { NewspaperSection } from './NewsPaperSection';
import { Stories } from './stories';

export const Featured = () => {
  return (
    <div className="container flex flex-col max-w-7xl w-full py-14">
      <div className="flex flex-col justify-center gap-y-8">
        <div className="text-xs tracking-[4px] flex items-center justify-center">
          AS FEATURED IN
        </div>

        {/* Newspaper logos */}
        <NewspaperSection />

        {/* Text info */}
        <div className="flex flex-col items-center justify-center flex-1 feature:flex-row mt-10">
          <div className="flex border-t-4 flex-grow w-[80%] feature:w-[20%] border-slate-600 mx-10"></div>
          <div className="text-4xl py-3 text-center">All you need is on us</div>
          <div className="flex border-t-4 flex-grow w-[80%] feature:w-[20%] border-slate-600 mx-10"></div>
        </div>

        {/* Text description */}
        <div className="flex items-center justify-center text-center text-slate-500 font-light px-[20%] tracking-wide">
          We will take care of everything for you — from event planning and curation to design and production
        </div>

        {/* Card section */}
        <div className="flex flex-col items-center justify-center overflow-hidden gap-5 p-4">
          <div className="grid grid-cols-1 feature:grid-cols-3 gap-5 feature:gap-8 w-full max-w-7xl">
            {[
              { title: "Photography", image: "https://assets.website-files.com/60867261e3a2bf1d23a88274/62e0f8ec8c1c3a326212941a_service%203-min.jpg" },
              { title: "Planning", image: "https://assets.website-files.com/60867261e3a2bf1d23a88274/62e0f99236b43d24530a09c8_service%201-min-p-500.jpg" },
              { title: "Design", image: "https://assets.website-files.com/60867261e3a2bf1d23a88274/62e0f95a9a227151f70df7c6_service%202-min-p-500.jpg" },
              { title: "Decor", image: "https://assets.website-files.com/607fe84879ed52683c358003/62e0faf547918b3299dfa7b3_img%203-min-p-500.jpg" },
              { title: "Memory", image: "https://assets.website-files.com/607fe84879ed52683c358003/62e103935a47c782876754d5_gallery%20img%202-min-p-500.jpg" },
              { title: "Entertainment", image: "https://assets.website-files.com/607fe84879ed52683c358003/62e103942a1b384d328e7730_gallery%20img%206-min-p-500.jpg" }
            ].map((card, index) => (
              card.title === "Photography" ?
                (
                  <div key={index} className="relative w-full aspect-[4/5] overflow-hidden group">
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={`${card.title} image`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30
                    transition-opacity duration-300 group-hover:bg-opacity-70" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <h2 className="text-3xl invisible group-hover:visible feature:text-4xl font-serif mb-2">
                        Coming Soon...
                      </h2>
                      <h2 className="text-3xl group-hover:invisible feature:text-4xl font-serif mb-2">
                        {card.title}
                      </h2>
                      <a href="#" className="text-sm uppercase group-hover:invisible tracking-wider hover:underline">
                        Learn More
                      </a>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="relative w-full aspect-[4/5] overflow-hidden group">
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={`${card.title} image`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30
                  transition-opacity duration-300 group-hover:bg-opacity-70" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <h2 className="text-3xl feature:text-4xl font-serif mb-2">
                        {card.title}
                      </h2>
                      <a href="#" className="text-sm uppercase tracking-wider hover:underline">
                        Learn More
                      </a>
                    </div>
                  </div>
                )
            ))}
          </div>
        </div>

        <Stories />


      </div >
    </div >
  );
};
