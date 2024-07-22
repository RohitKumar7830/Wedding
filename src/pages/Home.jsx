import { BgVideo } from '../components/BgVideo';
import { Featured } from '../components/Featured';

export const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className="h-screen">
        <BgVideo />
      </div>
      <Featured />
    </div>
  );
};