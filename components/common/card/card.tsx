import { SortContext } from '@/contexts/sortProvidedr';
import { useContext, useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import CardItem from '../card/card-Item/card-item';
import { DataType } from '@/types/data';
interface CardType {
  data: DataType[];
}
export default function Card({ data }: CardType) {
  const [columNum, setColumNum] = useState(1);
  const [key, setKey] = useState('');
  const { sort } = useContext(SortContext);

  useEffect(() => {
    setKey(sort);
    setColumNum(sort === 'GRID' ? 2 : 1);
  }, [sort]);

  if (data.length <= 0) return <Text>등록된 데이터가 없습니다.</Text>;
  return (
    <FlatList
      key={key}
      data={data}
      numColumns={columNum}
      renderItem={({ item }) => <CardItem text={item.text} date={item.id} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        gap: 10,
      }}
      columnWrapperStyle={columNum > 1 ? { gap: 10 } : undefined}
    />
  );
}
