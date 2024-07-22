export const lightTheme = {
  bgColor: "rgb(242, 242, 242)",
  cardBg: "#fff",
  textColor: "#1c1c1c",
  borderColor: "#ddd",
  inputBg: "#fff",
  buttonBg: "rgb(221, 221, 221)",
  buttonColor: "#fff",
  headerBg: "#fff",
  sortFill: "#393939",
  logoFill: "#000",
};

export const darkTheme = {
  bgColor: "#23242A",
  cardBg: "#323741",
  textColor: "#fff",
  borderColor: "#888",
  inputBg: "#2A2D35",
  buttonBg: "#fff",
  buttonColor: "#23242A",
  headerBg: "#323741",
  sortFill: "#fff",
  logoFill: "#fff",
};

export const themeType = (theme: string) => {
  return theme === "light" ? lightTheme : darkTheme;
};

export const sortList = {
  width: "100%",
};

export const sortGrid = {
  width: "50%",
};
