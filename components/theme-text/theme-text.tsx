import { getCurrentTheme } from "@/constants/theme";
import { ThemeContext } from "@/contexts/themProvider";
import { PropsWithChildren, useContext } from "react";
import styled from "styled-components/native";

interface ThemeTextType {
  fontSize?: string;
  fontFamily?: string;
}

export default function ThemeText({
  children,
  fontSize,
  fontFamily,
}: PropsWithChildren<ThemeTextType>) {
  const { theme } = useContext(ThemeContext);
  const style = getCurrentTheme(theme);
  return (
    <Text theme={style} fontSize={fontSize} fontFamily={fontFamily}>
      {children}
    </Text>
  );
}

const Text = styled.Text<ThemeTextType>`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-family: ${({ fontFamily }) => fontFamily || "Pretendard"};
`;
