import SortSvg from "@/components/svg/sort";
import { Pressable } from "react-native";

export default function BasicSort() {
  return (
    <Pressable>
      <SortSvg width={30} height={30} fill={"#000"} />
    </Pressable>
  );
}
