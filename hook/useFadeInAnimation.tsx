import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useFadeInAnimation = (delay: number) => {
  const opacityAni = useRef(new Animated.Value(0)).current;
  const translateAni = useRef(new Animated.Value(-30)).current;

  useEffect(() => {
    const animationTime = setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacityAni, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateAni, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);

    return () => clearTimeout(animationTime);
  }, []);

  return {
    opacityAni,
    translateAni,
  };
};
