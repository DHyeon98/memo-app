import styled from 'styled-components/native';
import CardSkeletonItem from './card-skeleton-item/card-skeleton-item';

export default function CardSkeleton() {
  return (
    <Container>
      <CardSkeletonItem />
      <CardSkeletonItem />
      <CardSkeletonItem />
    </Container>
  );
}

const Container = styled.View`
  gap: 10px;
`;
