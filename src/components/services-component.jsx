import { Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import { Data, CardsData } from '@/data/data';

export const ServicesComponent = () => {
  const [locationData, setLocationData] = useState(Data)
  const [cardsData, setCardsData] = useState(CardsData)

  const location = useLocation()
  console.log({ location })
  const handleLocationDataClick = (location) => {
    const filteredData = CardsData.filter(data =>
      data.location.district === location ||
      data.location.local === location ||
      data.location.state === location
    );
    setCardsData(filteredData);
  };

  return (
    <div className='p-2 gap-y-8 h-full w-full'>

      {/* breadcrumb section */}
      <div className='pb-4'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Vendors</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* intro heading */}
      <div className="pb-4 flex justify-between w-full h-full flex-wrap gap-y-2">
        <div>
          <div className='text-2xl font-semibold tracking-tight'>
            Wedding Photographers
          </div>
          <div className='text-slate-400 font-thin'>
            Showing {Data.length} results as per your search criteria.
          </div>
        </div>
        <div className=' w-[70%]  feature:w-[40%]'>
          <Input
            placeholder='🔍 Search wedding photographers '
          />
        </div>
      </div>


      {/* location cards */}
      <div className='flex m-auto flex-wrap gap-x-6 gap-y-4 pb-6'>
        {locationData.map((data) => (
          <Link
            onClick={() => handleLocationDataClick(data.location)}
            key={data.id}
            className='hover:scale-125 h-[4rem] w-[4rem] feature:h-[6rem] feature:w-[6rem] transition duration-300 ease-in-out '
          >
            <div className='flex flex-col items-center justify-center '>
              <Avatar className='size-12 feature:size-16 ' >
                <AvatarImage src={data.src} alt={data.location} />
                <AvatarFallback>{data.location.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className='text-xs feature:text-base'>
                {data.location}
              </div>
            </div>
          </Link>
        ))}
        <div className="size-14 h-[3rem] w-[3rem] feature:h-[4rem] feature:w-[4rem] flex items-center justify-center text-white font-semibold bg-gray-600 rounded-full hover:scale-125 transition duration-300 ease-in-out">
          +40
        </div>
      </div>



      {/* photographer cards */}
      <div className='flex flex-wrap flex-grow gap-x-6 mx-auto items-center gap-y-3 py-3'>

        {
          cardsData.map((card) => {
            return (
              <Link
                to={`/services/photographer/${card.id}`}
                className='w-full m-auto feature:w-[31.5%] h-[25rem] overflow-hidden hover:shadow-xl ' key={card.id}>
                <div className='flex flex-col flex-wrap h-full  shadow-sm hover:shadow-lg'>

                  <div className='relative'>
                    <img
                      className='w-full h-full object-contain group-hover:scale-125 group-hover:rotate-3 duration-500'
                      loading='lazy'
                      src={card.imgSrc}
                    />
                    <div className='absolute top-0 right-0 bg-gradient-to-r from-amber-300 to-orange-600 text-white  p-1'>
                      ♔ HandPicked
                    </div>
                  </div>

                  <div className='flex justify-between items-center pl-2 w-full'>
                    <div className='truncate w-full'>
                      {card.photographerName}
                    </div>
                    <div className='w-full flex items-center justify-end gap-x-2 p-2'>
                      <FaStar size={24} className="fill-current text-pink-500" />
                      {card.rating}
                      <div className='text-sm text-gray-500'>
                        ({card.totalReviews} reviews)
                      </div>
                    </div>
                  </div>

                  <div className='w-full text-slate-500 font-semibold pb-2'>
                    📍{card.location.local}, {card.location.district}
                  </div>

                  <div className='w-full pl-2 pb-2 text-slate-400 text-sm font-thin'>
                    {card.service}
                  </div>

                  <div className='w-full pb-2 flex items-center gap-x-1 pl-2 text-slate-700'>
                    <span className='flex items-center justify-center font-semibold text-lg'>
                      ₹ {card.pricingPerDay}
                    </span>
                    <span className='flex items-center justify-center text-sm'>
                      per day
                    </span>
                  </div>

                  <div className='w-full pb-2 flex items-center gap-x-1 px-2 truncate '>
                    <div className='bg-slate-700 text-xs text-white px-3 py-1 rounded-2xl truncate'>
                      {card.tags[0]}
                    </div>
                    <div className='bg-slate-700 text-xs text-white px-3 py-1 rounded-2xl truncate'>
                      {card.tags[1]}
                    </div>
                    <div className='bg-slate-700 text-xs text-white px-3 py-1 rounded-2xl '>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            +{card.tags.length}more
                          </TooltipTrigger>
                          <TooltipContent side='left' className='w-full h-full p-0 bg-black/90 border-none'>
                            {
                              card.tags.map((tag) => {
                                return (
                                  <li
                                    key={tag}
                                    className='pl-2 text-sm feature:text-md pr-4 py-1 text-white '
                                  >
                                    {tag}
                                  </li>
                                )
                              })
                            }
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>


    </div>
  )
}