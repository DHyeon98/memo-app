import { ThemeContext } from '@/contexts/themProvider';
import { conversionType } from '@/utils/conversion-type';
import { PropsWithChildren, useContext } from 'react';
import styled from 'styled-components/native';

interface ThemeTextType {
  fontSize?: string;
  fontFamily?: string;
  numberOfLines?: number;
}

/**
 * 다크 모드 텍스트 컨포넌트 입니다.
 * size, family, 줄길이 를 인자로 받고 텍스트를 생성합니다.
 */
export default function ThemeText({
  children,
  fontSize,
  fontFamily,
  numberOfLines = 1,
}: PropsWithChildren<ThemeTextType>) {
  const { theme } = useContext(ThemeContext);
  return (
    <Text numberOfLines={numberOfLines} theme={conversionType(theme)} fontSize={fontSize} fontFamily={fontFamily}>
      {children}
    </Text>
  );
}

const Text = styled.Text<ThemeTextType>`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-family: ${({ fontFamily }) => fontFamily || 'Pretendard'};
  line-height: 20px;
`;
