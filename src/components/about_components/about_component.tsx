import { HomeNavbar } from '@/components/HomeNavbar'
import { BgPhoto } from '@/components/BgPhoto'
import { AboutFeatured } from '@/components/about_components/about_featured'

export const About = () => {
  return (
    <div className='overflow-x-hidden flex items-center flex-col'>
      <HomeNavbar />
      <div className="h-screen">
        <BgPhoto />
      </div>

      {/* newspaper section */}
      <AboutFeatured />
    </div>
  )
}