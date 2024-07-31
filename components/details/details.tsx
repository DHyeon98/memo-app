import { ThemeContext } from '@/contexts/themProvider';
import { useLoadingSkeleton } from '@/hook/useLoadingSkeleton';
import { DataType } from '@/types/data';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import DetailsDate from './details-date/details-date';
import Textarea from '../index/textarea/textarea';
import DetailsButton from './details-button/details-button';
import DetailSkeleton from '../common/skeleton/detail-skeleton/detail-skeleton';
import { themeType } from '@/constants/theme';
import { setItem } from '@/apis';
import styled from 'styled-components/native';

type RouteParams = {
  params: {
    id: string;
  };
};

export default function Details() {
  const [detailsData, setDetailsData] = useState<DataType>();
  const [text, setText] = useState('');
  const { theme } = useContext(ThemeContext);
  const { data, mutate, isLoading } = useSWR('data', { suspense: true });
  const { params } = useRoute<RouteProp<RouteParams, 'params'>>();
  const skeletonLoading = useLoadingSkeleton();
  const id = params ? params.id : 'id 값이 없습니다.';

  const handleData = async () => {
    if (data) {
      const filterData = data.filter((data: DataType) => data.id === id);
      setDetailsData(filterData[0]);
      setText(filterData[0].text);
    }
  };

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

  useEffect(() => {
    if (!isLoading) handleData();
  }, [isLoading]);

  return (
    <Container theme={themeType(theme)}>
      {/* {isLoading || skeletonLoading ? (
        <DetailSkeleton />
      ) : (
        <>
          <DetailsDate detailsId={id} />
          <Textarea onBlur={handleModifyData} type="details" onChangeText={setText} defaultValue={detailsData!.text} />
          <DetailsButton detailsId={id} />
        </>
      )} */}
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
