import Sort from '@/components/index/sort/sort';
import { ThemePropType } from '@/contexts/themProvider';
import { useRoute } from '@react-navigation/native';
import HeaderBackButton from '../header-back-button/header-back-button';

/**
 * 헤더 좌측 부분 컴포넌트 입니다.
 * 메인 페이지일 때는 정렬 컴포넌트가 보이고, 그 외 페이지는 뒤로 가기 컴포넌트를 보여줍니다.
 */
export default function HeaderLeft({ theme }: ThemePropType) {
  const { name } = useRoute();
  return name === 'index' ? <Sort /> : <HeaderBackButton theme={theme} />;
}
