import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export default function Spinner() {
  return (
    <Container>
      <ActivityIndicator size="large" color="#47b976" />
    </Container>
  );
}

const Container = styled.View`
  padding-top: 30px;
`;
