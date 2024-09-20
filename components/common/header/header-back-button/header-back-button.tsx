import Arrow from '@/components/svg/arrow';
import { themeType } from '@/constants/theme';
import { ThemePropType } from '@/contexts/themProvider';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

/**
 * 뒤로 가기 버튼 컴포넌트 입니다.
 */
export default function HeaderBackButton({ theme }: ThemePropType) {
  const expoRouter = useRouter();
  // 버튼을 눌렀을 때 해당 페이지를 방문하기 전 페이지로 돌아갑니다.
  const handleBack = () => {
    expoRouter.back();
  };
  return (
    <Pressable onPress={handleBack}>
      <Arrow width={26} height={26} fill={themeType(theme).sortFill} />
    </Pressable>
  );
}
