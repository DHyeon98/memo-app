import SortSvg from '../../svg/sort';
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/themProvider';
import { conversionType } from '@/utils/conversion-type';
import SortList from './sort-list/sort-list';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useModal } from '@/hook/useModal';
import ThemeText from '@/components/common/theme-text/theme-text';

export default function Sort() {
  const { theme } = useContext(ThemeContext);
  const { isOpen, openModal, closeModal, ModalComponent } = useModal();
  return (
    <View>
      <FlexContainer onPress={openModal}>
        <SortSvg width={30} height={30} fill={conversionType(theme).sortFill} />
        <ThemeText fontSize="16px" fontFamily="Pretendard-Bold">
          보기
        </ThemeText>
      </FlexContainer>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        <SortList theme={theme} closeModal={closeModal} />
      </ModalComponent>
    </View>
  );
}
const FlexContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
