import { getItem, setItem } from '@/apis';

export const setInitialData = () => {
  const setData = async () => {
    await setItem('data', '[]');
  };
  const earlyData = async () => {
    await getItem('data');
  };
  if (!earlyData) setData();
};
