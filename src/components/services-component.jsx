import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { FaStar } from "react-icons/fa";



const Data = [
  {
    id: 1,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/1/delhi.png',
    location: 'Delhi NCR'
  },
  {
    id: 2,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/6/bombay.png',
    location: 'Mumbai'
  },
  {
    id: 3,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/9/banglore.png',
    location: 'Bangalore'
  },
  {
    id: 4,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/11/hyderabad.png',
    location: 'Hyderabad'
  },
  {
    id: 5,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/10/chennai.png',
    location: 'Chennai'
  },
  {
    id: 6,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/16/goa.png',
    location: 'Goa'
  }, {
    id: 7,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/17/jaipur.png',
    location: 'Jaipur'
  },
  {
    id: 8,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/7/pune.jpg',
    location: 'Pune'
  },
  {
    id: 9,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/12/kolkata.png',
    location: 'Kolkata'
  },
  {
    id: 10,
    src: 'https://image.wedmegood.com/resized/100X/uploads/city_image/22/lucknow.png',
    location: 'Lucknow'
  },
]

const CardsData = [
  {
    id: 1,
    photographerName: 'Chirag Yadav Photography',
    tags: [
      'Ranked No.2 Wedding photographer in Hyderabad on MyWed.',
      'Avg. Booking 250000',
      'Small function 60000 for 4 hours',
      'Professionalism : 11 votes',
      'Shot in 11 cities'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/165755/1719239099_image2623.jpg?crop=28,213,1992,1151',
    rating: 4.9,
    location: 'Delhi NCR',
    totalReviews: 41,
    service: 'Photo + Video',
    pricing: '90,000'
  }
]

export const ServicesComponent = () => {
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
      <div className='flex flex-wrap gap-x-6 gap-y-4 pb-6'>
        {
          Data.map((data) => {
            return (
              <Link
                key={data.id}
                className='hover:scale-125 h-[4rem] w-[4rem] transition duration-300 ease-in-out '
                to={'/'}
              >
                <div className='flex flex-col items-center justify-center '>
                  <Avatar className='size-10 feature:size-14' >
                    <AvatarImage
                      src={data.src} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className=' text-xs'>
                    {data.location}
                  </div>
                </div>
              </Link>
            )
          })
        }
        <div className="size-14 h-[3rem] w-[3rem]  flex items-center justify-center text-white font-semibold bg-gray-600 rounded-full hover:scale-125 transition duration-300 ease-in-out">
          +40
        </div>
      </div>



      {/* photographer cards */}
      <div className='flex flex-wrap justify-between gap-x-6 gap-y-3'>
        <Link className='w-full feature:w-[31%] h-full '>
          <div className='flex flex-col flex-wrap  shadow-md hover:shadow-2xl'>

            <div className='relative'>
              <img
                src='https://image.wedmegood.com/resized/450X/uploads/member/165755/1719239099_image2623.jpg?crop=28,213,1992,1151'
              />
              <div className='absolute left-0 top-0 bg-pink-500 text-white  p-1'>
                ♔ HandPicked
              </div>
            </div>

            <div className='flex justify-between items-center pl-2'>
              <div className='truncate w-full'>
                Chirag Yadav Photography
              </div>
              <div className='w-full flex items-center justify-end gap-x-2 p-2'>
                <FaStar size={24} className="fill-current text-pink-500" />
                <div className='text-sm text-gray-500'>
                  (46 reviews)
                </div>
              </div>
            </div>

            <div className='w-full text-slate-500 font-semibold pb-2'>
              📍Delhi NCR
            </div>

            <div className='w-full pl-2 pb-2 text-slate-400 text-sm font-thin'>
              Photo+Video
            </div>

            <div className='w-full pb-2 flex items-center gap-x-1 pl-2 text-slate-700'>
              <span className='flex items-center justify-center font-semibold text-lg'>
                ₹ 90,000
              </span>
              <span className='flex items-center justify-center text-sm'>
                per day
              </span>
            </div>

            <div className='w-full pb-2 flex items-center gap-x-1 pl-2 truncate '>
              <div className='bg-slate-700 text-xs text-white px-3 py-1 rounded-2xl'>
                Photography
              </div>
              <div className='bg-slate-700 text-xs text-white px-3 py-1 rounded-2xl'>
                Modern
              </div>
              <div className='bg-slate-700 text-xs text-white px-3 py-1 rounded-2xl'>
                Cinematography
              </div>
            </div>
          </div>
        </Link>



      </div>


    </div>
  )
}