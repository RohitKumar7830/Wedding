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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { FaStar } from "react-icons/fa";
import { useState } from 'react';



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
      'Candid moment master',
      'Light painting virtuoso',
      'Destination wedding expert',
      'Cultural fusion specialist',
      'Drone photography pioneer',
      'Storytelling through images'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/165755/1719239099_image2623.jpg?crop=28,213,1992,1151',
    rating: 4.9,
    location: {
      local: 'India Gate',
      district: 'Delhi NCR',
      state: 'Delhi'
    },
    totalReviews: 41,
    service: 'Photo + Video',
    pricingPerDay: '90,000'
  },
  {
    id: 2,
    photographerName: 'Vogue',
    tags: [
      'Fashion-forward weddings',
      'Celebrity style shoots',
      'Glamour and elegance focus',
      'Innovative post-processing'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/164066/1719921958_62.jpg?crop=10,113,2028,1141',
    rating: 4.9,
    location: {
      local: 'Sohna Road',
      district: 'Gurgaon',
      state: 'Haryana'
    },
    totalReviews: 41,
    service: 'Photo + Video',
    pricingPerDay: '90,000'
  },
  {
    id: 3,
    photographerName: 'Vintage Studios',
    tags: [
      'Timeless aesthetic specialist',
      'Film photography option',
      'Nostalgic editing techniques',
      'Antique prop styling',
      'Heritage venue expert',
      'Black & white artistry'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/2226739/1630225726_300.jpg?crop=5,1134,2039,1147',
    rating: 4.9,
    location: {
      local: 'North Kolkata',
      district: 'Kolkata',
      state: 'West Bengal'
    },
    totalReviews: 21,
    service: 'Photo + Video',
    pricingPerDay: '40,000'
  },
  {
    id: 4,
    photographerName: 'iGlow Studio',
    tags: [
      'Cutting-edge tech integration',
      'AR/VR wedding experiences',
      'Holographic invitations',
      'AI-enhanced editing'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/project/67371/1576042421_1.jpg?crop=0,36,2048,1152',
    rating: 4.9,
    location: {
      local: 'Tambaram',
      district: 'Chennai',
      state: 'Tamil Nadu'
    },
    totalReviews: 41,
    service: 'Photo + Video',
    pricingPerDay: '90,000'
  },
  {
    id: 5,
    photographerName: 'Heart and Craft',
    tags: [
      'Emotion-centric photography',
      'Handcrafted album designs',
      'Intimate elopement specialist',
      'Eco-friendly practices',
      'Pet-inclusive ceremonies',
      'Golden hour magic'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/project/213864/1662714607_K_D_Haldi_448_.jpg?crop=9,223,2030,1142',
    rating: 4.9,
    location: {
      local: 'Pune',
      district: 'Mumbai',
      state: 'Maharashtra'
    },
    totalReviews: 50,
    service: 'Photo + Video',
    pricingPerDay: '90,000'
  },
  {
    id: 6,
    photographerName: 'Luminous Moments',
    tags: [
      'Low light specialist',
      'Underwater photography',
      'Artistic silhouettes',
      'Sunset and sunrise expert'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/642927/1682320756_2C2A8715.jpg?crop=12,76,2023,1138',
    rating: 4.8,
    location: {
      local: 'Bandra',
      district: 'Mumbai',
      state: 'Maharashtra'
    },
    totalReviews: 38,
    service: 'Photography',
    pricingPerDay: '75,000'
  },
  {
    id: 7,
    photographerName: 'Ethereal Visions',
    tags: [
      'Misty mountain weddings',
      'Fairytale themes',
      'Enchanted forest shoots',
      'Dreamy editing style',
      'Fantasy costume integration',
      'Magical prop styling'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/612030/1683563672_M4_00558.jpg?crop=6,1043,2037,1146',
    rating: 4.9,
    location: {
      local: 'Manali',
      district: 'Kullu',
      state: 'Himachal Pradesh'
    },
    totalReviews: 45,
    service: 'Photo + Video',
    pricingPerDay: '85,000'
  },
  {
    id: 8,
    photographerName: 'Urban Pulse Photography',
    tags: [
      'City skyline backdrops',
      'Street art integration',
      'Modern architectural focus',
      'Night city shoots'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/project/213864/1662714607_K_D_Haldi_448_.jpg?crop=9,223,2030,1142',
    rating: 4.7,
    location: {
      local: 'Indiranagar',
      district: 'Bangalore',
      state: 'Karnataka'
    },
    totalReviews: 32,
    service: 'Photography',
    pricingPerDay: '65,000'
  },
  {
    id: 9,
    photographerName: 'Rustic Charm Studios',
    tags: [
      'Barn wedding specialists',
      'Countryside venues',
      'Vintage truck props',
      'Wildflower bouquet focus',
      'Hay bale seating setups',
      'Mason jar decor expert'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/410630/1720351583_HH_Haldi_CP2__28.jpg?crop=12,176,2023,1138',
    rating: 4.8,
    location: {
      local: 'Lonavala',
      district: 'Pune',
      state: 'Maharashtra'
    },
    totalReviews: 29,
    service: 'Photo + Video',
    pricingPerDay: '70,000'
  },
  {
    id: 10,
    photographerName: 'Seaside Serenity Shots',
    tags: [
      'Beach wedding experts',
      'Coastal sunset specialist',
      'Seashell decor focus',
      'Yacht party coverage'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/128251/1581544355_ADIL4715.jpg?crop=10,222,2028,1141',
    rating: 4.9,
    location: {
      local: 'Panjim',
      district: 'North Goa',
      state: 'Goa'
    },
    totalReviews: 52,
    service: 'Photo + Video',
    pricingPerDay: '95,000'
  },
  {
    id: 11,
    photographerName: 'Royal Rajasthan Lens',
    tags: [
      'Palace wedding specialist',
      'Traditional Rajasthani themes',
      'Camel safari shoots',
      'Desert dune photography',
      'Havelis and forts expert',
      'Cultural dress focus'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/18910/1713095382_ABHI4118_Edit.jpeg?crop=5,924,2037,1146',
    rating: 4.8,
    location: {
      local: 'Jaipur',
      district: 'Jaipur',
      state: 'Rajasthan'
    },
    totalReviews: 47,
    service: 'Photo + Video',
    pricingPerDay: '88,000'
  },
  {
    id: 12,
    photographerName: 'Bollywood Glam Shots',
    tags: [
      'Cinematic style videos',
      'Celebrity-inspired poses',
      'Red carpet moments',
      'Dramatic lighting setups'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/project/280499/1708713773_5G0A3486.jpg?crop=12,114,2024,1139',
    rating: 4.7,
    location: {
      local: 'Juhu',
      district: 'Mumbai',
      state: 'Maharashtra'
    },
    totalReviews: 39,
    service: 'Photo + Video',
    pricingPerDay: '100,000'
  },
  {
    id: 13,
    photographerName: 'Misty Mountain Memories',
    tags: [
      'Hill station weddings',
      'Fog-shrouded landscapes',
      'Tea plantation backdrops',
      'Cozy indoor shoots',
      'Bonfire night photography',
      'Mountain trek pre-weddings'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/443535/1689087528_ESP_4917.jpg?crop=11,183,2026,1139',
    rating: 4.9,
    location: {
      local: 'Darjeeling',
      district: 'Darjeeling',
      state: 'West Bengal'
    },
    totalReviews: 33,
    service: 'Photography',
    pricingPerDay: '72,000'
  },
  {
    id: 14,
    photographerName: 'Backwater Bliss Captures',
    tags: [
      'Houseboat wedding expert',
      'Coconut grove settings',
      'Kathakali theme shoots',
      'Spice plantation backdrops'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/557110/1709872838_BAR00661.jpg?crop=0,214,2048,1149',
    rating: 4.8,
    location: {
      local: 'Alappuzha',
      district: 'Alappuzha',
      state: 'Kerala'
    },
    totalReviews: 41,
    service: 'Photo + Video',
    pricingPerDay: '80,000'
  },
  {
    id: 15,
    photographerName: 'Spiritual Union Photography',
    tags: [
      'Temple wedding specialist',
      'Holy river ceremonies',
      'Ashram retreat shoots',
      'Yoga-themed pre-weddings',
      'Sacred fire rituals',
      'Meditation pose expertise'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/project/271272/1701698947_JIG01924.jpg?crop=12,212,1932,1087',
    rating: 4.7,
    location: {
      local: 'Rishikesh',
      district: 'Dehradun',
      state: 'Uttarakhand'
    },
    totalReviews: 36,
    service: 'Photography',
    pricingPerDay: '68,000'
  },
  {
    id: 16,
    photographerName: 'Fusion Fiesta Frames',
    tags: [
      'Multi-cultural weddings',
      'Indo-western themes',
      'Blended tradition expert',
      'Mixed decor specialist'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/242476/1665172066_Best_Wedding_Photographer_In_Dubai__8_.jpg?crop=11,0,2025,1139',
    rating: 4.8,
    location: {
      local: 'Koramangala',
      district: 'Bangalore',
      state: 'Karnataka'
    },
    totalReviews: 44,
    service: 'Photo + Video',
    pricingPerDay: '92,000'
  },
  {
    id: 17,
    photographerName: 'Royal Elephants & Lens',
    tags: [
      'Elephant procession expert',
      'Majestic palace backdrops',
      'Royal costume shoots',
      'Vintage car incorporations',
      'Polo ground pre-weddings',
      'Regal portraiture'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/199545/1648252175_062.jpg?crop=12,188,2024,1139',
    rating: 4.9,
    location: {
      local: 'Udaipur',
      district: 'Udaipur',
      state: 'Rajasthan'
    },
    totalReviews: 50,
    service: 'Photo + Video',
    pricingPerDay: '110,000'
  },
  {
    id: 18,
    photographerName: 'Monsoon Magic Moments',
    tags: [
      'Rainy day specialists',
      'Umbrella prop expertise',
      'Misty landscape shots',
      'Waterproof gear pros'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/959292/1680253278_BM_04643_low.jpg?crop=9,223,2030,1142',
    rating: 4.7,
    location: {
      local: 'Cherrapunji',
      district: 'East Khasi Hills',
      state: 'Meghalaya'
    },
    totalReviews: 28,
    service: 'Photography',
    pricingPerDay: '62,000'
  },
  {
    id: 19,
    photographerName: 'Desert Mirage Memories',
    tags: [
      'Sand dune ceremonies',
      'Camel caravan processions',
      'Starry night shoots',
      'Oasis setting expert',
      'Traditional Rajasthani attire',
      'Desert sunset specialist'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/395225/1676880173_DSC_6420.jpg?crop=6,217,2035,1145',
    rating: 4.8,
    location: {
      local: 'Jaisalmer',
      district: 'Jaisalmer',
      state: 'Rajasthan'
    },
    totalReviews: 37,
    service: 'Photo + Video',
    pricingPerDay: '85,000'
  },
  {
    id: 20,
    photographerName: 'Vineyard Vows Visuals',
    tags: [
      'Winery wedding expert',
      'Grape harvest themes',
      'Barrel room ceremonies',
      'Wine tasting shoots'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/169161/1716888483_ACH08537.jpg?crop=11,195,2026,1140',
    rating: 4.7,
    location: {
      local: 'Nashik',
      district: 'Nashik',
      state: 'Maharashtra'
    },
    totalReviews: 31,
    service: 'Photography',
    pricingPerDay: '70,000'
  },
  {
    id: 21,
    photographerName: 'Himalayan Heights Photography',
    tags: [
      'Mountain peak ceremonies',
      'Snow-capped backdrops',
      'Adventure pre-weddings',
      'Sherpa-styled shoots',
      'Buddhist monastery themes',
      'Extreme weather experts'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/620489/1681977072_AJAY0682.jpg?crop=12,99,2024,1139',
    rating: 4.9,
    location: {
      local: 'Leh',
      district: 'Leh',
      state: 'Ladakh'
    },
    totalReviews: 42,
    service: 'Photo + Video',
    pricingPerDay: '95,000'
  },
  {
    id: 22,
    photographerName: 'Bollywood Retro Reels',
    tags: [
      '50s-60s theme experts',
      'Black & white film options',
      'Vintage Bollywood poses',
      'Classic car shoot specialists'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/777546/1718894538_001.jpg?crop=12,53,2024,1139',
    rating: 4.8,
    location: {
      local: 'Film City',
      district: 'Mumbai',
      state: 'Maharashtra'
    },
    totalReviews: 48,
    service: 'Photo + Video',
    pricingPerDay: '88,000'
  },
  {
    id: 23,
    photographerName: 'Tribal Tales Photography',
    tags: [
      'Indigenous wedding customs',
      'Traditional attire focus',
      'Folklore-inspired shoots',
      'Tribal art backdrops',
      'Rural setting specialists',
      'Cultural dance captures'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/45478/1624779321_D85_3320.jpg?crop=12,57,2024,1139',
    rating: 4.7,
    location: {
      local: 'Ranchi',
      district: 'Ranchi',
      state: 'Jharkhand'
    },
    totalReviews: 34,
    service: 'Photography',
    pricingPerDay: '65,000'
  },
  {
    id: 24,
    photographerName: 'Lotus Land Lens',
    tags: [
      'Lakeside ceremony experts',
      'Floating mandap shoots',
      'Water reflection specialists',
      'Lotus theme decor focus'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/572308/1694857360_1__106____Copy.jpg?crop=7,810,2034,1144',
    rating: 4.8,
    location: {
      local: 'Udaipur',
      district: 'Udaipur',
      state: 'Rajasthan'
    },
    totalReviews: 40,
    service: 'Photo + Video',
    pricingPerDay: '82,000'
  },
  {
    id: 25,
    photographerName: 'Coffee Estate Captures',
    tags: [
      'Plantation wedding specialists',
      'Coffee theme decor',
      'Misty estate backdrops',
      'Vintage processing equipment props',
      'Aromatic setting expert',
      'Hill station pre-weddings'
    ],
    imgSrc: 'https://image.wedmegood.com/resized/450X/uploads/member/1123312/1722349404_063A0204_2.jpg?crop=320,1445,1447,814',
    rating: 4.8,
    location: {
      local: 'Chikmagalur',
      district: 'Chikmagalur',
      state: 'Karnataka'
    },
    totalReviews: 35,
    service: 'Photo + Video',
    pricingPerDay: '75,000'
  }
];

export const ServicesComponent = () => {
  const [locationData, setLocationData] = useState(Data)
  const [cardsData, setCardsData] = useState(CardsData)

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
      <div className='flex flex-wrap gap-x-6 gap-y-4 pb-6'>
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
      <div className='flex flex-wrap  gap-x-6 mx-auto items-center gap-y-3 py-3'>

        {
          cardsData.map((card) => {
            return (
              <Link className='w-full feature:w-[31%] h-full ' key={card.id}>
                <div className='flex flex-col flex-wrap  shadow-sm hover:shadow-lg'>

                  <div className='relative'>
                    <img
                      className=' overflow-hidden h-[12rem] w-full'
                      src={card.imgSrc}
                    />
                    <div className='absolute top-0 right-0 bg-gradient-to-r from-amber-300 to-orange-600 text-white  p-1'>
                      ♔ HandPicked
                    </div>
                  </div>

                  <div className='flex justify-between items-center pl-2'>
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