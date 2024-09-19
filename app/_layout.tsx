import { ThemeProvider } from '@/contexts/themProvider';
import { SortProvider } from '@/contexts/sortProvidedr';
import { Stack } from 'expo-router';
import Header from '@/components/common/header/header';
import { SWRConfig } from 'swr';
import { getItem } from '@/apis';
import { useFonts } from 'expo-font';

const fetcher = async () => {
  const data = await getItem('data');
  return data ? JSON.parse(data) : null;
};

export default function RootLayout() {
  // 폰트 적용 코드 입니다.
  const [loaded, error] = useFonts({
    Pretendard: require('../assets/fonts/Pretendard-Medium-subset.otf'),
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold-subset.otf'),
  });
  if (!loaded && !error) return null;
  return (
    <SortProvider>
      <ThemeProvider>
        <SWRConfig value={{ fetcher }}>
          <Stack screenOptions={{ header: () => <Header /> }} />
        </SWRConfig>
      </ThemeProvider>
    </SortProvider>
  );
}
