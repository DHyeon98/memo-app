import { SortContext } from "@/contexts/sortProvidedr";
import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import CardItem from "./card-Item/card-item";
interface CardType {
  data: {
    id: string;
    text: string;
  }[];
  handleData: () => void;
}
export default function Card({ data, handleData }: CardType) {
  const [columNum, setColumNum] = useState(1);
  const [key, setKey] = useState("");
  const { sort } = useContext(SortContext);
  useEffect(() => {
    setKey(sort);
    if (sort === "GRID") {
      setColumNum(2);
    } else {
      setColumNum(1);
    }
  }, [sort]);

  return (
    <FlatList
      key={key}
      data={data}
      numColumns={columNum}
      renderItem={({ item, index }) => (
        <CardItem
          updateData={handleData}
          text={item.text}
          date={item.id}
          index={index}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        gap: 10,
      }}
    />
  );
}
