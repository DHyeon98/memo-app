import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

/**
 * 스켈레톤 UI 공통 컴포넌트 입니다.
 */
export default function SkeletonItem() {
  const opacity = useRef(new Animated.Value(0.5)).current;

  // 투명도 1 ~ 0.5를 0.5초 간격으로 반복하는 애니메이션 입니다.
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

  return <Skeleton style={{ opacity }} />;
}

const Skeleton = styled(Animated.View)`
  height: 100%;
  width: 100%;
  background-color: #aaa;
  border-radius: 4px;
`;
