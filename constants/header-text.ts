interface headerTextType {
  [key: string]: () => string;
}

const headerText: headerTextType = {
  index() {
    return '메모장';
  },
  search() {
    return '검색하기';
  },
  detail() {
    return '상세페이지';
  },
};

export const extractHeaderText = (name: string) => {
  const routeName = name === 'detail/[id]' ? 'detail' : name;
  return headerText[routeName]();
};
