import { setItem } from '@/apis';
import DetailsButton from '@/components/details/details-button/details-button';
import DetailsDate from '@/components/details/details-date/details-date';
import Textarea from '@/components/index/textarea/textarea';
import { themeType } from '@/constants/theme';
import { ThemeContext } from '@/contexts/themProvider';
import { DataType } from '@/types/data';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import useSWR from 'swr';

type RouteParams = {
  params: {
    id: string;
  };
};

export default function Details() {
  const [detailsData, setDetailsData] = useState<DataType>();
  const { data, mutate, isLoading } = useSWR('data');
  const [text, setText] = useState('');
  const { theme } = useContext(ThemeContext);
  const { params } = useRoute<RouteProp<RouteParams, 'params'>>();
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

  if (!detailsData) return null;
  return (
    <Container theme={themeType(theme)}>
      <DetailsDate detailsId={id} />
      <Textarea onBlur={handleModifyData} type="details" onChangeText={setText} defaultValue={detailsData.text} />
      <DetailsButton detailsId={id} />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
