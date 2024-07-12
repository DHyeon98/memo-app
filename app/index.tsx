import { getItem, setItem } from "@/apis";
import Card from "@/components/card/card";
import SubmitButton from "@/components/submit-button/submit-button";
import Textarea from "@/components/textarea/textarea";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import * as Font from "expo-font";
import { createGlobalStyle } from "styled-components";

type DataItem = {
  id: string;
  text: string;
};

export default function Index() {
  const [data, setData] = useState<DataItem[]>([]);
  const [text, setText] = useState("");

  const [fontsLoaded] = Font.useFonts({
    Pretendard: require("../assets/fonts/Pretendard-Medium.ttf"),
  });

  if (!fontsLoaded) return null;

  const handleData = async () => {
    const storedData = await getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData([]);
    }
  };

  const handleSubmit = async () => {
    const newData: DataItem = {
      id: Date.now().toString(),
      text: text,
    };
    const updatedData = [newData, ...data];
    await setItem("data", JSON.stringify(updatedData));
    setText("");
    await handleData();
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Form>
          <Textarea value={text} onChangeText={setText} />
          <SubmitButton handleSubmit={handleSubmit}>제출</SubmitButton>
        </Form>
        <FlatList
          data={data}
          renderItem={({ item }) => <Card text={item.text} date={item.id} />}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </>
  );
}
const Container = styled.SafeAreaView`
  padding: 20px;
`;
const Form = styled.View`
  gap: 10px;
`;
const GlobalStyles = createGlobalStyle`
  div {
    font-family: "Pretendard" !important;
  }
`;
