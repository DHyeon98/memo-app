import { getItem } from '@/apis';
import Card from '@/components/common/card/card';
import SearchBox from '@/components/search/search-box/search-box';
import { themeType } from '@/constants/theme';
import { ThemeContext } from '@/contexts/themProvider';
import { useContext, useState } from 'react';
import styled from 'styled-components/native';

interface DataItem {
  id: string;
  text: string;
}

export default function Search() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState<DataItem[]>([]);
  const [text, setText] = useState('');

  const handleData = async () => {
    const storedData = await getItem('data');
    if (storedData) {
      const allData = JSON.parse(storedData);
      const filterData = allData.filter((item: DataItem) => item.text.includes(text));
      setData(filterData);
      setText('');
    } else {
      setData([]);
    }
  };

  return (
    <Container theme={themeType(theme)}>
      <SearchBox text={text} setText={setText} handleData={handleData} />
      <Card data={data} handleData={handleData} />
    </Container>
  );
}
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
