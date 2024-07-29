import { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

export default function SkeletonItem() {
  const opacity = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return <Animated.View style={[styles.skeleton, { opacity }]} />;
}

const styles = StyleSheet.create({
  skeleton: {
    height: '100%',
    width: '100%',
    backgroundColor: '#aaa',
    borderRadius: 4,
  },
});
