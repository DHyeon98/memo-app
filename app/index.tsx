import { getItem, setItem } from "@/apis";
import Card from "@/components/card/card";
import SubmitButton from "@/components/submit-button/submit-button";
import Textarea from "@/components/textarea/textarea";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import * as Font from "expo-font";

type DataItem = {
  id: string;
  text: string;
};

export default function Index() {
  const [data, setData] = useState<DataItem[]>([]);
  const [text, setText] = useState("");

  const [fontsLoaded] = Font.useFonts({
    Pretendard: require("../assets/fonts/Pretendard-Medium.ttf"),
    "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.ttf"),
  });

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

  if (!fontsLoaded) return null;

  return (
    <>
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
