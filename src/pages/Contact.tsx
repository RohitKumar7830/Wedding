import { ContactUsComponent } from '@/components/contact_us_components/contact_us_component';
import { Navbar } from '@/components/Navbar';

export const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col h-full'>
      <div className='h-[70px]'>
        <Navbar />
      </div>
      <div className='bg-white flex flex-grow p-4'>
        <ContactUsComponent />
      </div>
    </div>
  )
}
