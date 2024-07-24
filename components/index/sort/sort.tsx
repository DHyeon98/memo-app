import SortSvg from '../../svg/sort';
import { useContext, useState } from 'react';
import { ThemeContext } from '@/contexts/themProvider';
import { themeType } from '@/constants/theme';
import SortList from './sort-list/sort-list';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useModal } from '@/hook/useModal';

export default function Sort() {
  const { theme } = useContext(ThemeContext);
  const { isOpen, openModal, closeModal, ModalComponent } = useModal();
  return (
    <View>
      <FlexContainer onPress={openModal}>
        <SortSvg width={30} height={30} fill={themeType(theme)} />
        <ButtonText theme={themeType(theme)}>보기</ButtonText>
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
const ButtonText = styled.Text`
  font-size: 16px;
  font-family: 'Pretendard-Bold';
  color: ${({ theme }) => theme.textColor};
`;
