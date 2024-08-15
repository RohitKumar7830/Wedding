import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { NewspaperSection } from '../NewsPaperSection'
import { ContactForm } from './contact-form'
import { Separator } from '../ui/separator'


export const ContactUsComponent = () => {
  return (
    <div className="container flex flex-col max-w-7xl w-full py-10">
      <div className="flex flex-col feature:flex-row gap-y-6 mb-12">
        <div className="flex flex-col w-full mb-6 gap-y-6 pr-4">
          <h2 className="text-sm text-slate-500 tracking-wide">GET IN TOUCH</h2>
          <div className="text-2xl feature:text-4xl md:text-6xl tracking-wide text-black">
            Make your dreams come true
          </div>
          <div className='text-md hover:cursor-pointer tracking-wider'>
            📞 719-456-8945
          </div>
          <div className='text-md hover:cursor-pointer tracking-wider'>
            📩 shadibanao@gmail.com
          </div>
          <div className='hover:cursor-pointer tracking-wider text-md'>
            <div className='tracking-wider'>🌍 693  River Road</div>
            <div className='tracking-wider pl-8'>Colorado Springs</div>
            <div className='tracking-wider pl-8'>CO, Colorado80906</div>
          </div>
        </div>
        <Separator className='feature:hidden' />
        <div className='w-full'>
          <div className='gap-y-10 mb-4'>
            <Avatar className='size-24 feature:size:28 md:size-32 mb-4'>
              <AvatarImage
                className='w-full h-full overflow-hidden object-cover'
                src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=400" />
              <AvatarFallback
                className='bg-slate-700 text-white hover:bg-black hover:text-pink-600 transition duration-500 ease-in-out font-bold'
              >CN</AvatarFallback>
            </Avatar>
            <span className='text-sm tracking-wide'>Our manager Erick will call you back:</span>
          </div>
          <ContactForm />
        </div>
      </div>
      <Separator />
      <NewspaperSection />
    </div>
  )
}