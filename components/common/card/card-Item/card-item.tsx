import { useContext } from 'react';
import { Animated, Pressable, useWindowDimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemeContext } from '@/contexts/themProvider';
import { SortContext } from '@/contexts/sortProvidedr';
import { getCardWidth } from '@/constants/get-card-width';
import { conversionTime } from '@/utils/conversionTime';
import styled from 'styled-components/native';
import ThemeText from '../../theme-text/theme-text';
import { useFadeInAnimation } from '@/hook/useFadeInAnimation';
import { themeType } from '@/constants/theme';

interface CardItemType {
  text: string;
  date: string;
  delay: number;
}

export default function CardItem({ text, date, delay }: CardItemType) {
  const { sort } = useContext(SortContext);
  const { theme } = useContext(ThemeContext);
  const { opacityAni } = useFadeInAnimation(delay);
  const expoRouter = useRouter();
  const { width } = useWindowDimensions();
  const cardWidth = getCardWidth(sort, width);
  const handleLink = () => {
    expoRouter.push(`detail/${date}`);
  };

  return (
    <AnimationContainer theme={themeType(theme)} width={cardWidth} style={{ opacity: opacityAni }}>
      <Pressable onPress={handleLink}>
        <DateTextBox>
          <ThemeText fontFamily="Pretendard-Bold">{conversionTime(date)}</ThemeText>
        </DateTextBox>
        <ThemeText numberOfLines={3}>{text}</ThemeText>
      </Pressable>
    </AnimationContainer>
  );
}

const DateTextBox = styled.View`
  margin-bottom: 5px;
`;

const AnimationContainer = styled(Animated.View)<{ width: number }>`
  background-color: ${({ theme }) => theme.cardBg};
  width: ${({ width }) => `${width}px`};
  padding: 10px;
`;
