
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { getDataById } from '@/lib/getDataById';
import { imagesData } from '@/data/data';

const PhotographByIdComponent = ({ id }) => {

  const data = getDataById(id)

  return (
    <div className='h-full w-full p-4'>

      {/* breadcrumb component */}
      <div className='pb-4 font-semibold tracking-tight'>
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
              <BreadcrumbPage className='font-sans text-pink-600 font-bold tracking-wide'> {data.photographerName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>


      {/* image , info and pricing */}
      <div className="flex flex-col feature:flex-row shadow-sm hover:shadow-lg  bg-white  gap-4 w-full mb-2 ">
        {/* image */}
        <div className='w-full p-2'>
          <img
            loading='lazy'
            src={data.imgSrc}
            className='w-full overflow-hidden border-transparent rounded-md'
          />
        </div>
        {/* info */}
        <div className='w-full h-full px-4 py-2 '>
          <div className='w-full h-full py-2 px-2 mb-2'>
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

            <div className='w-full h-full text-slate-500 font-semibold pb-2'>
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

      {/* images, video and wedding */}
      <div className="w-full h-full bg-white pt-8 px-2">
        <Tabs defaultValue="images" className="flex flex-col w-full h-full">
          <TabsList className='flex justify-center w-full gap-x-8 mx-auto  bg-white'>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="wedding">Wedding</TabsTrigger>
          </TabsList>
          <Separator />
          <TabsContent value="images" className='h-full'>
            <ImageComponent />
          </TabsContent>
          <TabsContent value="videos">Videos section</TabsContent>
          <TabsContent value="wedding">Wedding section</TabsContent>
        </Tabs>
      </div>

    </div >
  )
}

export default PhotographByIdComponent;

const ImageComponent = () => {
  return (
    <div className="w-full h-full mb-10"> {/* Adjust pt-20 as needed to account for your navbar height */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 feature:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagesData.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                loading='lazy'
                src={image.src}
                alt={image.alt || "Gallery Image"}
                className="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};