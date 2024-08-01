import { setItem } from '@/apis';
import Textarea from '@/components/index/textarea/textarea';
import { DataType } from '@/types/data';
import { useState } from 'react';
import { Text } from 'react-native';
import useSWR from 'swr';

interface DetailsTextType {
  id: string;
  data: DataType[];
  defaultValue: DataType;
}

export default function DetailsText({ id, data, defaultValue }: DetailsTextType) {
  const [text, setText] = useState('');
  const { mutate } = useSWR('data');

  const handleModifyData = async () => {
    if (!text) return;
    const parseData = data.filter((data: DataType) => data.id !== id);
    const newData = {
      id: Date.now().toString(),
      text: text,
    };
    const updatedData = [newData, ...parseData];
    await setItem('data', JSON.stringify(updatedData));
    mutate();
  };

  return defaultValue ? (
    <Textarea onBlur={handleModifyData} type="details" onChangeText={setText} defaultValue={defaultValue.text} />
  ) : (
    <Text>데이터가 존재하지 않습니다.</Text>
  );
}
