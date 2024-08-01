import { useParams } from 'react-router-dom'

export const PhotographerById = () => {
  const params = useParams()
  const paramsId = params.id
  return (
    <div className='h-screen w-full bg-slate-600'>
      PhotographerById
      {
        JSON.stringify(parseInt(paramsId))
      }
    </div>
  )
}
