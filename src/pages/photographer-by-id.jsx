import { useParams } from 'react-router-dom'

import PhotographByIdComponent from '@/components/photograph-by-id-component'
import { Navbar } from '@/components/Navbar'

export const PhotographerById = () => {
  const params = useParams()
  const paramsId = Number(params.id)
  return (
    <div className='max-w-7xl mx-auto flex flex-col min-h-screen'>
      <div className='h-[70px]'>
        <Navbar />
      </div>
      <div className='bg-white flex flex-grow'>
        <PhotographByIdComponent id={paramsId} />
      </div>
    </div>

  )
}
