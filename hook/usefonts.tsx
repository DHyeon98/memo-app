import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Pretendard: require('../assets/fonts/Pretendard-Medium.ttf'),
        'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};
