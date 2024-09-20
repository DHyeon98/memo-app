import styled from 'styled-components/native';
import ThemeText from '../theme-text/theme-text';
import CommonButton from '../button/common-button';
import { useRouter } from 'expo-router';

/**
 * 서브 페이지 에러 컴포넌트 입니다.
 */
export default function ErrorSubPage() {
  const expoRouter = useRouter();
  // 상호작용 시 메인 페이지로 이동합니다.
  const handlePushHome = () => {
    expoRouter.replace('/');
  };
  return (
    <Container>
      <ThemeText fontSize="24">데이터를 불러오는데 문제가 발생했습니다.</ThemeText>
      <CommonButton backgroundColor="#555" onPress={handlePushHome}>
        홈으로
      </CommonButton>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  padding-top: 50px;
  align-items: center;
  gap: 30px;
`;
