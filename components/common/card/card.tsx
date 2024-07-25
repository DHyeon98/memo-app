import { SortContext } from '@/contexts/sortProvidedr';
import { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CardItem from '../card/card-Item/card-item';
import useSWR from 'swr';
interface CardType {
  handleData: () => void;
}
export default function Card() {
  const { data } = useSWR('data');
  const [columNum, setColumNum] = useState(1);
  const [key, setKey] = useState('');
  const { sort } = useContext(SortContext);

  useEffect(() => {
    setKey(sort);
    setColumNum(sort === 'GRID' ? 2 : 1);
  }, [sort]);

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
