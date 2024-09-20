import styled from 'styled-components/native';
import SkeletonItem from '../skeleton-Item';

export default function DetailSkeleton() {
  return (
    <Container>
      <SkeletonContainer width="30%">
        <SkeletonItem />
      </SkeletonContainer>
      <TextSkeletonBox>
        <SkeletonContainer width="60%">
          <SkeletonItem />
        </SkeletonContainer>
        <SkeletonContainer width="30%">
          <SkeletonItem />
        </SkeletonContainer>
      </TextSkeletonBox>
      <ButtonSkeletonBox>
        <SkeletonItem />
      </ButtonSkeletonBox>
    </Container>
  );
}

const Container = styled.View`
  gap: 10px;
`;
const SkeletonContainer = styled.View<{ width: string }>`
  width: ${({ width }) => width};
  height: 20px;
`;
const TextSkeletonBox = styled.View`
  height: 300px;
  background-color: #fff;
  padding: 10px;
  gap: 10px;
`;
const ButtonSkeletonBox = styled.View`
  height: 30px;
`;
