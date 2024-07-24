import { useState, useEffect } from 'react';
import { getItem, setItem } from '@/apis';

interface DataItem {
  id: string;
  text: string;
}

export const useStorageData = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [text, setText] = useState('');

  const handleData = async () => {
    const storedData = await getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData([]);
    }
  };

  const handleSubmit = async () => {
    const newData: DataItem = {
      id: Date.now().toString(),
      text: text,
    };
    const updatedData = [newData, ...data];
    await setItem('data', JSON.stringify(updatedData));
    await handleData();
    setText('');
  };

  useEffect(() => {
    handleData();
  }, []);

  return { data, text, setText, handleSubmit, handleData };
};
