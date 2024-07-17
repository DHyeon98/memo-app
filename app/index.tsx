import styled from "styled-components/native";
import Card from "@/components/card/card";
import { useContext, useState } from "react";
import { FlatList } from "react-native";
import { ThemeContext } from "@/contexts/themProvider";
import { darkTheme, lightTheme } from "@/constants/theme";
import { useFonts } from "@/fonts/fonts";
import { useStorageData } from "@/hook/useStorageData";
import DataForm from "@/components/data-form/data-form";
import Header from "@/components/header/header";
import { SortContext } from "@/contexts/sortProvidedr";

export default function Index() {
  const [numState, setNumState] = useState(2);
  const { data, handleSubmit, handleData, text, setText } = useStorageData();
  const { theme } = useContext(ThemeContext);
  const { sort } = useContext(SortContext);
  useFonts();
  return (
    <>
      <Header />
      <Container theme={theme === "light" ? lightTheme : darkTheme}>
        <DataForm handleSubmit={handleSubmit} text={text} setText={setText} />
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <Card
              updateData={handleData}
              text={item.text}
              date={item.id}
              index={index}
            />
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 10,
          }}
        />
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
