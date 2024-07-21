import styled from "styled-components/native";
import Search from "../svg/search";

export default function SearchButton() {
  return (
    <Button>
      <Search width={26} height={26} fill={"#fff"} />
    </Button>
  );
}
const Button = styled.Pressable`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #47b976;
`;
