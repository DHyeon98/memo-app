import * as Font from "expo-font";

export const useFonts = () => {
  const [fontsLoaded] = Font.useFonts({
    Pretendard: require("../assets/fonts/Pretendard-Medium.ttf"),
    "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.ttf"),
  });

  return [fontsLoaded];
};
