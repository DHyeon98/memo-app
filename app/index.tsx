import Card from "@/components/card/card";
import { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import ThemeProvider, { ThemeContext } from "@/context/themProvider";
import { darkTheme, lightTheme } from "@/constants/theme";
import { useFonts } from "@/fonts/fonts";
import { useStorageData } from "@/hook/useStorageData";
import DataForm from "@/components/data-form/data-form";

export default function Index() {
  const { data, handleSubmit, handleData, text, setText } = useStorageData();
  const { theme } = useContext(ThemeContext);
  useFonts();
  return (
    <>
      <ThemeProvider>
        <Container theme={theme === "light" ? lightTheme : darkTheme}>
          <DataForm handleSubmit={handleSubmit} text={text} setText={setText} />
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Card updateData={handleData} text={item.text} date={item.id} />
            )}
            keyExtractor={(item) => item.id}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

const Container = styled.SafeAreaView`
  padding: 16px;
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;
