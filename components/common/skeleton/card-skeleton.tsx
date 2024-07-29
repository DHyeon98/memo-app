import { themeType } from '@/constants/theme';
import { ThemeContext } from '@/contexts/themProvider';
import { useContext } from 'react';
import styled, { css } from 'styled-components/native';
import { skeleton } from './skeleton-animation';

export default function CardSkeleton() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      <SkeletonBox theme={themeType(theme)}>
        <SkeletonItem width="200px" />
        <SkeletonItem width="100px" />
      </SkeletonBox>
    </Container>
  );
}

const Container = styled.View`
  gap: 10px;
`;
const SkeletonBox = styled.View`
  padding: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  gap: 5px;
`;
const SkeletonItem = styled.View<{ width: string }>`
  width: ${({ width }) => width};
  height: 20px;
  background: linear-gradient(to right, #aaa, #ddd, #aaa);
  background-size: 200% 100%;
  animation: ${({ theme }) => css`
    ${skeleton} 1.5s alternate ease infinite;
  `};
`;
