import { ThemeContext } from '@/contexts/themProvider';
import { DataType } from '@/types/data';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import DetailsDate from './details-date/details-date';
import DetailsButton from './details-button/details-button';
import DetailSkeleton from '../common/skeleton/detail-skeleton/detail-skeleton';
import styled from 'styled-components/native';
import DetailsText from './details-text/details-text';
import { Keyboard } from 'react-native';
import { conversionType } from '@/utils/conversion-type';

type RouteParams = {
  params: {
    id: string;
  };
};

/**
 * 상세페이지 컴포넌트 입니다.
 */
export default function Details() {
  const [detailsData, setDetailsData] = useState<DataType>();
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useSWR('data');
  const { params } = useRoute<RouteProp<RouteParams, 'params'>>();
  const id = params ? params.id : 'id 값이 없습니다.';

  // 해당 페이지의 id 값을 받아와 해당 id 값과 일치하는 데이터를 렌더링 합니다.
  const handleData = async () => {
    if (data) {
      const filterData = data.filter((data: DataType) => data.id === id);
      setDetailsData(filterData[0]);
    }
  };

  useEffect(() => {
    handleData();
  }, [isLoading]);

  return (
    <Container theme={conversionType(theme)} onPress={() => Keyboard.dismiss()}>
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <>
          <DetailsDate detailsId={id} />
          <DetailsText defaultValue={detailsData!} data={data} id={id} />
          <DetailsButton detailsId={id} />
        </>
      )}
    </Container>
  );
}

const Container = styled.Pressable`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
