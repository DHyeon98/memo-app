import { themeType } from '@/constants/theme';
import { ThemeContext } from '@/contexts/themProvider';
import { useContext } from 'react';
import SkeletonItem from '../../skeleton-Item';
import styled from 'styled-components/native';

export default function CardSkeletonItem() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <SkeletonBox theme={themeType(theme)}>
        <SkeletonItemContainer width="50%">
          <SkeletonItem />
        </SkeletonItemContainer>
        <SkeletonItemContainer width="20%">
          <SkeletonItem />
        </SkeletonItemContainer>
      </SkeletonBox>
    </Container>
  );
}
const Container = styled.View`
  gap: 10px;
`;
const SkeletonBox = styled.View<{ theme: string }>`
  padding: 10px;
  background-color: ${({ theme }) => theme.cardBg};
  gap: 5px;
`;
const SkeletonItemContainer = styled.View<{ width: string }>`
  width: ${({ width }) => width};
  height: 20px;
`;
