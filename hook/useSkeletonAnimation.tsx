import { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

export const UseSkeletonAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return <Animated.View style={[styles.skeleton, { opacity }]} />;
};

const styles = StyleSheet.create({
  skeleton: {
    height: 20,
    width: '100%',
    backgroundColor: '#aaa',
    borderRadius: 4,
  },
});
