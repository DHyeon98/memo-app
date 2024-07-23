import { conversionTime } from "@/utils/conversionTime";
import styled from "styled-components/native";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/themProvider";
import { darkTheme, lightTheme, themeType } from "@/constants/theme";
import { SortContext } from "@/contexts/sortProvidedr";
import { extractSortStyle } from "@/constants/sort-type";
import { View, StyleSheet } from "react-native";
import { useModal } from "@/hook/useModal";
import CardModal from "../card-modal/card-modal";
import { Link } from "expo-router";


interface CardItemType {
  text: string;
  date: string;
  updateData: () => void;
}

export default function CardItem({ text, date, updateData }: CardItemType) {
  const { sort } = useContext(SortContext);
  const sortStyle = extractSortStyle(sort);
  const { theme } = useContext(ThemeContext);
  const { isOpen, ModalComponent, closeModal, openModal } = useModal();
  const stylesCondition = [styles.Link, theme === 'light' ? styles.light : styles.dark, sortStyle];

  return (
    <Link
      href={`details/${date}`}
      style={stylesCondition}
    >
      <View>
        <DateText theme={themeType(theme)}>{conversionTime(date)}</DateText>
        <Text numberOfLines={3} theme={themeType(theme)}>
          {text}
        </Text>
      </View>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        <CardModal
          text={text}
          date={date}
          updateData={updateData}
          theme={theme}
        />
      </ModalComponent>
    </Link>
  );
}

const CardContainer = styled.Pressable`
  padding: 10px;
  background-color: ${({ theme }) => theme.cardBg};
  flex-shrink: 1;
  justify-content: space-between;
`;
const DateText = styled.Text`
  font-family: "Pretendard-Bold";
  margin-bottom: 5px;
  word-break: keep-all;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
`;
const Text = styled.Text`
  color: ${({ theme }) => theme.textColor};
  line-height: 20px;
  font-family: "Pretendard";
`;
const styles = StyleSheet.create({
  Link: {
    padding: 10,
    flexShrink: 1,
    justifyContent: 'space-between',
  },
  dark: {
    backgroundColor: "#323741",
  },
  light: {
    backgroundColor: '#fff',
  }
});