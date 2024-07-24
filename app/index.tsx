import styled from 'styled-components/native';
import Card from '@/components/common/card/card';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/contexts/themProvider';
import { darkTheme, lightTheme } from '@/constants/theme';
import DataForm from '@/components/index/data-form/data-form';
import { getItem, setItem } from '@/apis';
import { useFonts } from '@/hook/usefonts';
import SearchButton from '@/components/index/search- button/search-button';
import { useNavigationState } from '@react-navigation/native';

interface DataItem {
  id: string;
  text: string;
}

export default function Index() {
  const [data, setData] = useState<DataItem[]>([]);
  const [text, setText] = useState('');
  const { theme } = useContext(ThemeContext);
  const fontsLoaded = useFonts();
  const route = useNavigationState((state) => state.routes);

  const handleData = async () => {
    const storedData = await getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData([]);
    }
  };

  const handleSubmit = async () => {
    const newData: DataItem = {
      id: Date.now().toString(),
      text: text,
    };
    const updatedData = [newData, ...data];
    await setItem('data', JSON.stringify(updatedData));
    await handleData();
    setText('');
  };

  useEffect(() => {
    handleData();
  }, [route]);

  if (!fontsLoaded) return null;
  return (
    <>
      <Container theme={theme === 'light' ? lightTheme : darkTheme}>
        <DataForm handleSubmit={handleSubmit} text={text} setText={setText} />
        <Card data={data} handleData={handleData} />
        <SearchButton />
      </Container>
    </>
  );
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
