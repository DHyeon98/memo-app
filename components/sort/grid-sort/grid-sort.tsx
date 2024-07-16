import GridSvg from "@/components/svg/grid";
import { Pressable } from "react-native";

export default function GridSort() {
  return (
    <Pressable>
      <GridSvg width={30} height={30} fill={"#000"} />
    </Pressable>
  );
}
