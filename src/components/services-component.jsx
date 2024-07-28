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
      <div className='flex flex-wrap gap-x-6 gap-y-4'>
        {
          Data.map((data) => {
            return (
              <Link
                key={data.id}
                className='hover:scale-125 transition duration-300 ease-in-out '
                to={'/'}
              >
                <div className='flex flex-col items-center justify-center m-2'>
                  <Avatar className='size-14' >
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
        <div className="size-14 m-2 flex items-center justify-center text-white font-semibold bg-gray-600 rounded-full hover:scale-125 transition duration-300 ease-in-out">
          +40
        </div>
      </div>




    </div>
  )
}