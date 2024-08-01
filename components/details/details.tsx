import { ThemeContext } from '@/contexts/themProvider';
import { DataType } from '@/types/data';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import DetailsDate from './details-date/details-date';
import DetailsButton from './details-button/details-button';
import DetailSkeleton from '../common/skeleton/detail-skeleton/detail-skeleton';
import { themeType } from '@/constants/theme';
import styled from 'styled-components/native';
import DetailsText from './details-text/details-text';

type RouteParams = {
  params: {
    id: string;
  };
};

export default function Details() {
  const [detailsData, setDetailsData] = useState<DataType>();
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useSWR('data');
  const { params } = useRoute<RouteProp<RouteParams, 'params'>>();
  const id = params ? params.id : 'id 값이 없습니다.';

  const handleData = async () => {
    if (data) {
      const filterData = data.filter((data: DataType) => data.id === id);
      setDetailsData(filterData[0]);
    }
  };

  useEffect(() => {
    if (!isLoading) handleData();
  }, [isLoading]);

  return (
    <Container theme={themeType(theme)}>
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

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
