import { useFonts } from 'expo-font';

export const useFontsLoad = () => {
  const [loaded, error] = useFonts({
    Pretendard: require('../assets/fonts/Pretendard-Medium-subset.otf'),
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold-subset.otf'),
  });
  if (!loaded && !error) return null;
};
