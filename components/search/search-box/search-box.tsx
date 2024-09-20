import { ThemeContext } from '@/contexts/themProvider';
import { StyleSheet, TextInput } from 'react-native';
import { useContext, Dispatch } from 'react';
import SubmitButton from '@/components/common/button/submit-button/submit-button';
import styled from 'styled-components/native';
import Search from '@/components/svg/search';
import { darkTheme, lightTheme } from '@/constants/theme';

interface SearchBoxType {
  text: string;
  setText: Dispatch<React.SetStateAction<string>>;
  handleData: () => void;
}

/**
 * 검색 폼 컨포넌트 입니다.
 * 검색 인풋과 submit 버튼으로 구성되어있습니다.
 */
export default function SearchBox({ text, setText, handleData }: SearchBoxType) {
  const { theme } = useContext(ThemeContext);
  // 입력한 키워드로 검색하는 함수 입니다.
  const handleSearch = () => {
    handleData();
  };
  return (
    <Container>
      <TextInput
        onSubmitEditing={handleData}
        value={text}
        onChangeText={setText}
        style={theme === 'light' ? styles.light : styles.dark}
      />
      <ButtonBox>
        <SubmitButton handleSubmit={handleSearch}>
          <Search width={20} height={20} fill="#fff" />
        </SubmitButton>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.View`
  height: 38px;
  margin-bottom: 10px;
  flex-direction: row;
`;
const ButtonBox = styled.View`
  height: 38px;
  width: 38px;
  flex-shrink: 0;
`;
const styles = StyleSheet.create({
  light: {
    flexShrink: 1,
    width: '100%',
    borderColor: `#47b976`,
    backgroundColor: `${lightTheme.inputBg}`,
    borderWidth: 1,
    padding: 10,
    fontSize: 14,
    fontFamily: 'Pretendard',
    color: `${lightTheme.textColor}`,
  },
  dark: {
    flexShrink: 1,
    width: '100%',
    borderColor: '#47b976',
    backgroundColor: `${darkTheme.inputBg}`,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 14,
    fontFamily: 'Pretendard',
    color: `${darkTheme.textColor}`,
  },
});
