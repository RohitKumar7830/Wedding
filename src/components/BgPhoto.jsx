import { IoIosArrowDown } from 'react-icons/io'

export const BgPhoto = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <img
        src='https://assets.website-files.com/607fe84879ed52683c358003/6087d45cd74a5f27576bc873_About%20Hero%20Image%20(1)-min.jpg'
        alt="Background"
        className=" w-screen h-screen object-cover object-center"
        loading="eager"
      />
      <div className='absolute text-white bg-black/40 h-screen w-screen flex flex-col gap-y-6 items-center justify-center'>
        <div className="text-center text-md tracking-wider">
          About ShadiBanao
        </div>
        <div className="text-center text-2xl feature:text-4xl md:text-6xl font-semibold   tracking-wider">
          <div>Creating the best wedding </div>
          <div>experiences since 2010</div>
        </div>
      </div>
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white">
        <div className='bg-white h-12 w-7 rounded-3xl flex items-center justify-center'>
          <IoIosArrowDown className='text-slate-500 size-6 animate-bounce' />
        </div>
      </div>
    </div>
  )
}