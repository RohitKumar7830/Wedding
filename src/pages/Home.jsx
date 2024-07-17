import { BgVideo } from '../components/BgVideo';
import { Featured } from '../components/Featured';

export const Home = () => {
  return (
    <div className=' overflow-x-hidden flex flex-col justify-center items-center'>
      <BgVideo />
      <Featured />
    </div>
  );
};
