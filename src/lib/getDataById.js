import { CardsData } from '@/data/data';

export const getDataById = (id) => {
  const data = CardsData.find((item) => {
    return item.id === id;
  });
  console.log({ data });
  return data;
};
