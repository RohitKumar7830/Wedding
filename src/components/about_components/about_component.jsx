import React from 'react'
import { HomeNavbar } from '../HomeNavbar'
import { BgPhoto } from '../BgPhoto'

export const About = () => {
  return (
    <div className='overflow-x-hidden flex items-center flex-col'>
      <HomeNavbar />
      <div className="h-screen">
        <BgPhoto />
      </div>
    </div>
  )
}