import { useBgColor } from '@/hook/useBgColor';
import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components/native';

interface SubmitButtonType {
  handleSubmit: () => void;
}

export default function SubmitButton({ children, handleSubmit }: PropsWithChildren<SubmitButtonType>) {
  const { handlePressIn, handlePressOut, bgColor } = useBgColor('#47b976', '#17492c');

  return (
    <Button onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={handleSubmit} bgColor={bgColor}>
      {children}
    </Button>
  );
}

const Button = styled.Pressable<{ bgColor: string }>`
  height: 100%;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  justify-content: center;
  align-items: center;
`;
