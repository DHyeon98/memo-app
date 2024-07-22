import Header from "@/components/header/header";
import { themeType } from "@/constants/theme";
import { ThemeContext } from "@/contexts/themProvider";
import { Link } from "expo-router";
import { useContext } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export default function Search() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <Container theme={themeType(theme)}>
        <Link href={"/"}>이동</Link>
      </Container>
    </>
  );
}
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
