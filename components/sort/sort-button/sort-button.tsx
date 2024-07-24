import { PropsWithChildren } from 'react';
import styled from 'styled-components/native';

interface SortButtonType {
  handleSort: () => void;
  closeModal: () => void;
}

export default function SortButton({ children, handleSort, closeModal }: PropsWithChildren<SortButtonType>) {
  const handleClick = () => {
    handleSort();
    closeModal();
  };
  return <Button onPress={handleClick}>{children}</Button>;
}

const Button = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
