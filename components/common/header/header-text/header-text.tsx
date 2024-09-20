import { extractHeaderText } from '@/constants/header-text';
import { useRoute } from '@react-navigation/native';
import ThemeText from '../../theme-text/theme-text';

/**
 * 헤더에 들어갈 텍스트 컴포넌트 입니다.
 * params의 name 값으로 텍스트를 구성합니다.
 */
export default function HeaderText() {
  const { name } = useRoute();
  return (
    <ThemeText fontSize="20px" fontFamily="Pretendard-Bold">
      {extractHeaderText(name)}
    </ThemeText>
  );
}
