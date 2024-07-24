import Sort from '@/components/index/sort/sort';
import { ThemePropType } from '@/contexts/themProvider';
import { useRoute } from '@react-navigation/native';
import HeaderBackButton from '../header-back-button/header-back-button';

export default function HeaderLeft({ theme }: ThemePropType) {
  const { name } = useRoute();
  return name === 'index' ? <Sort /> : <HeaderBackButton theme={theme} />;
}
