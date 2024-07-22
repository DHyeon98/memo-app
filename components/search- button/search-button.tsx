import Search from "../svg/search";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function SearchButton() {
  return (
    <Link href={"/search"} style={styles.Link}>
      <Search width={26} height={26} fill={"#fff"} />
    </Link>
  );
}

const styles = StyleSheet.create({
  Link: {
    display: "flex",
    position: "absolute",
    right: 16,
    bottom: 30,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#47b976",
  },
});
