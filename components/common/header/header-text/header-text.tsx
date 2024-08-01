import { extractHeaderText } from '@/constants/header-text';
import { useRoute } from '@react-navigation/native';
import ThemeText from '../../theme-text/theme-text';

export default function HeaderText() {
  const { name } = useRoute();
  return (
    <ThemeText fontSize="20px" fontFamily="Pretendard-Bold">
      {extractHeaderText(name)}
    </ThemeText>
  );
}
