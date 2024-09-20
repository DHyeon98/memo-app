import { SortContext } from '@/contexts/sortProvidedr';
import { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CardItem from '../card/card-Item/card-item';
import { DataType } from '@/types/data';
import ThemeText from '../theme-text/theme-text';
interface CardType {
  data: DataType[];
}

/**
 * 메모 카드 컴포넌트 입니다.
 */
export default function Card({ data }: CardType) {
  const [columNum, setColumNum] = useState(1);
  const [key, setKey] = useState('');
  const { sort } = useContext(SortContext);

  // 정렬 상태가 변할 때마다 FlatList를 변경하기 위한 코드 입니다.
  useEffect(() => {
    setKey(sort);
    setColumNum(sort === 'GRID' ? 2 : 1);
  }, [sort]);

  if (data.length <= 0) return <ThemeText fontSize="16px">등록된 데이터가 없습니다.</ThemeText>;
  return (
    <FlatList
      key={key}
      data={data}
      numColumns={columNum}
      renderItem={({ item, index }) => <CardItem text={item.text} date={item.id} delay={index * 200} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        gap: 10,
      }}
      columnWrapperStyle={columNum > 1 ? { gap: 10 } : undefined}
    />
  );
}
