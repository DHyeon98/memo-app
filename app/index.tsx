import styled from "styled-components/native";
import Card from "@/components/card/card";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/themProvider";
import { darkTheme, lightTheme } from "@/constants/theme";
import { useFonts } from "@/fonts/fonts";
import { useStorageData } from "@/hook/useStorageData";
import DataForm from "@/components/data-form/data-form";
import Header from "@/components/header/header";

export default function Index() {
  useFonts();
  const { data, handleSubmit, handleData, text, setText } = useStorageData();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <Container theme={theme === "light" ? lightTheme : darkTheme}>
        <DataForm handleSubmit={handleSubmit} text={text} setText={setText} />
        <Card data={data} handleData={handleData} />
      </Container>
    </>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px 0;
`;
