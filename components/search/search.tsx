import Card from '@/components/common/card/card';
import WarningModal from '@/components/common/modal/warning-modal/warning-modal';
import SearchBox from '@/components/search/search-box/search-box';
import { themeType } from '@/constants/theme';
import { ThemeContext } from '@/contexts/themProvider';
import { useModal } from '@/hook/useModal';
import { DataType } from '@/types/data';
import { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import useSWR from 'swr';

export default function Search() {
  const { theme } = useContext(ThemeContext);
  const { data } = useSWR('data');
  const [searchData, setSearchData] = useState<DataType[]>([]);
  const [text, setText] = useState('');
  const isFirstRender = useRef(true);
  const { ModalComponent, isOpen, openModal, closeModal } = useModal();

  const handleData = async () => {
    if (!text) return openModal();
    if (data) {
      const filterData = data.filter((item: DataType) => item.text.includes(text));
      setSearchData(filterData);
    } else {
      setSearchData([]);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      handleData();
    }
  }, [data]);

  return (
    <Container theme={themeType(theme)}>
      <SearchBox text={text} setText={setText} handleData={handleData} />
      <Card data={searchData} />
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        <WarningModal>
          <WarningModal.Text>내용을 입력해주세요.</WarningModal.Text>
          <WarningModal.Button buttonColor="#47b976" handleFun={closeModal}>
            확인
          </WarningModal.Button>
        </WarningModal>
      </ModalComponent>
    </Container>
  );
}
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
