import { BgVideo } from '../components/BgVideo';
import { Featured } from '../components/Featured';
import { HomeNavbar } from '../components/HomeNavbar';

export const Home = () => {
  return (
    <div className='overflow-x-hidden flex items-center flex-col'>
      <HomeNavbar />
      <div className="h-screen">
        <BgVideo />
      </div>
      <Featured />
    </div>
  );
};