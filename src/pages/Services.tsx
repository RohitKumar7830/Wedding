import { Navbar } from '@/components/Navbar';
import { ServicesComponent } from '@/components/services-component';

export const Services = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col min-h-screen'>
      <div className='h-[70px]'>
        <Navbar />
      </div>
      <div className='bg-white flex flex-grow p-4'>
        <ServicesComponent />
      </div>
    </div>
  )
};
