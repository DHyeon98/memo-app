import { getItem, setItem } from "@/apis";
import Textarea from "@/components/textarea/textarea";
import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import styled from "styled-components/native";

type DataItem = {
  id: string;
  text: string;
};

export default function Index() {
  const [data, setData] = useState<DataItem[]>([]);
  const [text, setText] = useState("");

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
    const updatedData = [...data, newData];
    await setItem("data", JSON.stringify(updatedData));
    setText("");
    await handleData();
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Textarea value={text} onChangeText={setText} />
      <Button title="submit" onPress={handleSubmit} />
      {data.map((item) => (
        <Text key={item.id}>{item.text}</Text>
      ))}
    </View>
  );
}
// const Button = styled.Pressable`
//   background-color: red;
// `;
const Input = styled.TextInput`
  background-color: blue;
`;
