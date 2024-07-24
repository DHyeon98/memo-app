import { extractHeaderText } from '@/constants/header-text';
import { themeType } from '@/constants/theme';
import { ThemePropType } from '@/contexts/themProvider';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';

export default function HeaderText({ theme }: ThemePropType) {
  const { name } = useRoute();
  return <Text theme={themeType(theme)}>{extractHeaderText(name)}</Text>;
}
const Text = styled.Text`
  font-size: 20px;
  font-family: 'Pretendard-Bold';
  color: ${({ theme }) => theme.textColor};
`;
