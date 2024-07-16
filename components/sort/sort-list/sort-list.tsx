import styled from "styled-components/native";
import BasicSort from "../basic-sort/basic-sort";
import GridSort from "../grid-sort/grid-sort";

export default function SortList() {
  return (
    <SortListContainer>
      <BasicSort />
      <GridSort />
    </SortListContainer>
  );
}

const SortListContainer = styled.View`
  z-index: 10;
  position: absolute;
  top: 30;
  left: 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
