import { PropsWithChildren } from 'react';
import { ButtonProps, PressableProps } from 'react-native';
import styled from 'styled-components/native';

interface UtilButtonType {
  backgroundColor: string;
}
interface StyledPropsType {
  backgroundColor: string;
}

export default function CommonButton(props: PropsWithChildren<PressableProps & UtilButtonType>) {
  return (
    <Button
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      backgroundColor={props.backgroundColor}
    >
      <Text>{props.children}</Text>
    </Button>
  );
}

export const Button = styled.Pressable<StyledPropsType>`
  padding: 8px 15px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;
`;
export const Text = styled.Text`
  color: #fff;
  font-size: 12px;
  font-family: 'Pretendard';
  text-align: center;
`;
