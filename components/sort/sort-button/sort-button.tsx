import { PropsWithChildren } from "react";
import { Pressable } from "react-native";

interface SortButtonType {
  handleSort: () => void;
}

export default function SortButton({
  children,
  handleSort,
}: PropsWithChildren<SortButtonType>) {
  const handleClick = () => {
    handleSort();
  };
  return <Pressable onPress={handleClick}>{children}</Pressable>;
}
