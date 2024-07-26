import { getItem, setItem } from '@/apis';
import RemoveButton from '@/components/common/button/card-button/remove-button/remove-button';
import ThemeText from '@/components/common/theme-text/theme-text';
import DetailsButton from '@/components/details/details-button/details-button';
import DetailsDate from '@/components/details/details-date/details-date';
import Textarea from '@/components/index/textarea/textarea';
import { themeType } from '@/constants/theme';
import { ThemeContext } from '@/contexts/themProvider';
import { conversionTime } from '@/utils/conversionTime';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import useSWR from 'swr';

type RouteParams = {
  params: {
    id: string;
  };
};

interface DataItem {
  id: string;
  text: string;
}

export default function Details() {
  const [detailsData, setDetailsData] = useState<DataItem>();
  const { data, mutate } = useSWR('data');
  const [text, setText] = useState('');
  const { theme } = useContext(ThemeContext);
  const { params } = useRoute<RouteProp<RouteParams, 'params'>>();
  const id = params ? params.id : 'id 값이 없습니다.';

  const handleData = async () => {
    if (data) {
      const filterData = data.filter((data: DataItem) => data.id === id);
      setDetailsData(filterData[0]);
      setText(filterData[0].text);
    }
  };

  const handleModifyData = async () => {
    if (!text) return;
    const parseData = data.filter((data: DataItem) => data.id !== id);
    const newData: DataItem = {
      id: Date.now().toString(),
      text: text,
    };
    const updatedData = [newData, ...parseData];
    await setItem('data', JSON.stringify(updatedData));
    mutate();
  };

  useEffect(() => {
    handleData();
  }, []);

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
