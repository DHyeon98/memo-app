import { useBgColor } from '@/hook/useBgColor';
import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components/native';

interface SubmitButtonType {
  handleSubmit: () => void;
}

/**
 * submit 버튼 컴포넌트 입니다.
 * 공통 버튼으로 통일하지 않은 이유는
 * prop drilling을 방지하기 위해서 입니다.
 */
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
