
import { FaStar } from 'react-icons/fa';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { getDataById } from '@/lib/getDataById';

const PhotographByIdComponent = ({ id }) => {

  const data = getDataById(id)

  return (
    <div className='h-screen w-full bg-slate-100 p-2'>

      {/* breadcrumb component */}
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
              <BreadcrumbPage>Photographer</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage> {data.photographerName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>


      {/* image , info and pricing */}

      <div className="flex flex-col feature:flex-row shadow-lg hover:shadow-2xl justify-between bg-white items-center gap-4 w-full">
        <div className='w-full p-2'>
          <img
            loading='lazy'
            src={data.imgSrc}
            className='w-full overflow-hidden border-transparent rounded-md'
          />
        </div>

        <div className='w-full h-full px-4'>
          <div className='w-full bg-white h-full py-2 px-2 mb-2'>
            <div className="flex flex-row justify-between items-center">
              <div className="text-xl flex items-center justify-center font-semibold tracking-wide">
                <div className="text-3xl flex items-center justify-center pb-2">📸</div>
                {data.photographerName}
              </div>
              <div className=' flex flex-col items-end justify-end gap-x-2 text-white gap-y-2'>
                <div className='flex gap-2 bg-emerald-500 p-2 font-semibold rounded-md '>
                  <FaStar size={24} className="fill-current text-white " />
                  {data.rating}
                </div>
                <div className='text-xs flex items-center justify-center text-gray-700 bg-re'>
                  ({data.totalReviews} reviews)
                </div>
              </div>
            </div>

            <div className='w-full text-slate-500 font-semibold pb-2'>
              📍{data.location.local}, {data.location.district}, {data.location.state}
            </div>
          </div>

          <div className=' w-full bg-white h-full py-2 px-2'>

            <div className="flex flex-row w-full justify-between items-center mb-4">
              <div className="text-xl flex items-center w-full  justify-start font-semibold tracking-wide">
                Per Day Price Estimate
              </div>
              <div className='flex flex-col relative w-full items-end justify-end gap-x-2 gap-y-2'>
                <Collapsible className='w-full flex justify-end'>
                  <CollapsibleTrigger>💵 Pricing info</CollapsibleTrigger>
                  <CollapsibleContent className='z-10 absolute mt-8 bg-black/80 text-white p-2 rounded-sm'>
                    <li>
                      {
                        data.tags[0]
                      }
                    </li>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            <div className="w-full h-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="text-xl w-full h-full text-pink-500 text-start">
                  ₹ {data.pricingPerDay} per day
                </div>
                <div className="w-full h-full text-end">
                  {data.service}
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>

    </div >
  )
}

export default PhotographByIdComponent