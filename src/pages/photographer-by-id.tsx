import { useParams } from 'react-router-dom'

import PhotographByIdComponent from '@/components/photograph-by-id-component'
import { Navbar } from '@/components/Navbar'

export const PhotographerById = () => {
  const params = useParams()
  const paramsId = Number(params.id)
  return (
    <div className='max-w-7xl mx-auto flex flex-col min-h-screen h-full w-full'>
      <div className='h-[70px]'>
        <Navbar />
      </div>
      <div className='bg-white w-full h-full flex flex-grow'>
        <PhotographByIdComponent id={paramsId} />
      </div>
    </div>

  )
}
