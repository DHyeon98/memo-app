import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

/**
 * fadeIn 애니메이션 커스텀 훅입니다.
 * delay 시간을 인자로 받아, 커스텀하여 활용할 수 있습니다.
 */
export const useFadeInAnimation = (delay: number) => {
  const opacityAni = useRef(new Animated.Value(0)).current;

  // 투명도를 0 ~ 1로 설정하는 애니메이션 입니다.
  useEffect(() => {
    const animationTime = setTimeout(() => {
      Animated.timing(opacityAni, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, delay);

    return () => clearTimeout(animationTime);
  }, []);

  return {
    opacityAni,
  };
};
