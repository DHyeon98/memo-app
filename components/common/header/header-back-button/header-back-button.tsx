import Arrow from '@/components/svg/arrow';
import { ThemePropType } from '@/contexts/themProvider';
import { conversionType } from '@/utils/conversion-type';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

/**
 * 뒤로 가기 버튼 컴포넌트 입니다.
 */
export default function HeaderBackButton({ theme }: ThemePropType) {
  const expoRouter = useRouter();
  // 상호작용 시 해당 페이지를 방문하기 전 페이지로 돌아갑니다.
  const handleBack = () => expoRouter.back();
  return (
    <Pressable onPress={handleBack}>
      <Arrow width={26} height={26} fill={conversionType(theme).sortFill} />
    </Pressable>
  );
}
