import { useRef } from 'react';
import { Animated } from 'react-native';

export const UseSkeletonAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
};
