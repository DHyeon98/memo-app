import styled from "styled-components/native";
import Card from "@/components/card/card";
import { useContext } from "react";
import { FlatList } from "react-native";
import { ThemeContext } from "@/contexts/themProvider";
import { darkTheme, lightTheme } from "@/constants/theme";
import { useFonts } from "@/fonts/fonts";
import { useStorageData } from "@/hook/useStorageData";
import DataForm from "@/components/data-form/data-form";
import Header from "@/components/header/header";

export default function Index() {
  const { data, handleSubmit, handleData, text, setText } = useStorageData();
  const { theme } = useContext(ThemeContext);
  useFonts();
  return (
    <>
      <Container theme={theme === "light" ? lightTheme : darkTheme}>
        <Header />
        <DataForm handleSubmit={handleSubmit} text={text} setText={setText} />
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card updateData={handleData} text={item.text} date={item.id} />
          )}
          keyExtractor={(item) => item.id}
          style={{
            paddingHorizontal: 16,
          }}
        />
      </Container>
    </>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
`;
