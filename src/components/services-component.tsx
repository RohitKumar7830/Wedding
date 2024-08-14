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
  const handleLocationDataClick = (location: string) => {
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
            to={''}
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
      <div className='grid grid-cols-1 feature:grid-cols-2 md:grid-cols-3 gap-6 py-6'>
        {cardsData.map((card) => (
          <Link
            to={`/services/photographer/${card.id}`}
            className='group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'
            key={card.id}
          >
            <div className='flex flex-col h-full'>
              <div className='relative overflow-hidden'>
                <img
                  className='w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300'
                  loading='lazy'
                  src={card.imgSrc}
                  alt={card.photographerName}
                />
                <div className='absolute top-2 right-2 bg-gradient-to-r from-amber-300 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                  ♔ HandPicked
                </div>
              </div>

              <div className='p-4 flex-grow'>
                <div className='flex justify-between items-center mb-2'>
                  <h3 className='text-lg font-semibold truncate'>{card.photographerName}</h3>
                  <div className='flex items-center'>
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className='font-bold'>{card.rating}</span>
                    <span className='text-sm text-gray-500 ml-1'>({card.totalReviews})</span>
                  </div>
                </div>

                <p className='text-sm text-gray-600 mb-2'>
                  📍 {card.location.local}, {card.location.district}
                </p>

                <p className='text-sm text-gray-500 mb-2'>{card.service}</p>

                <p className='text-lg font-bold text-indigo-600 mb-3'>
                  ₹ {card.pricingPerDay} <span className='text-sm font-normal text-gray-500'>per day</span>
                </p>

                <div className='flex flex-wrap gap-2'>
                  {card.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className='bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full'>
                      {tag}
                    </span>
                  ))}
                  {card.tags.length > 2 && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className='bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full'>
                          +{card.tags.length - 2} more
                        </TooltipTrigger>
                        <TooltipContent side='left' className='bg-white p-2 rounded shadow-lg border border-gray-200'>
                          <ul>
                            {card.tags.slice(2).map((tag) => (
                              <li key={tag} className='text-sm text-gray-700 py-1'>
                                {tag}
                              </li>
                            ))}
                          </ul>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>


    </div>
  )
}