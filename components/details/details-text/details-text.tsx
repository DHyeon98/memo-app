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

/**
 * 상세 페이지의 내용을 담당하는 컴포넌트 입니다.
 */
export default function DetailsText({ id, data, defaultValue }: DetailsTextType) {
  const [text, setText] = useState('');
  const { mutate } = useSWR('data');

  // onBlur를 했을 때 작동합니다.
  // 수정된 텍스트의 내용이 없다면 동작을 종료하고,
  // 수정된 텍스트가 있다면 해당 페이지의 id를 찾아서 mutaion을 합니다.
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
