import SortSvg from "../svg/sort";
import { useContext, useState } from "react";
import { ThemeContext } from "@/contexts/themProvider";
import { darkTheme, lightTheme } from "@/constants/theme";
import SortList from "./sort-list/sort-list";
import { View, Pressable } from "react-native";

export default function Sort() {
  const { theme } = useContext(ThemeContext);
  const [sortShow, setSortShow] = useState(false);
  const handleShowToggle = () => {
    setSortShow(!sortShow);
  };
  return (
    <View>
      <Pressable onPress={handleShowToggle}>
        <SortSvg
          width={30}
          height={30}
          fill={theme === "light" ? lightTheme.sortFill : darkTheme.sortFill}
        />
      </Pressable>
      {sortShow && <SortList />}
    </View>
  );
}
