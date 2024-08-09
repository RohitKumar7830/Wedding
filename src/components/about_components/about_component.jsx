import React from 'react'
import { HomeNavbar } from '../HomeNavbar'
import { BgPhoto } from '../BgPhoto'
import { NewspaperSection } from '../NewsPaperSection'
import { AboutFeatured } from './about_featured'

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