## Memo App📝
<img src="https://github.com/user-attachments/assets/a59329a6-0c2a-4e7b-80c8-c2efde03802a" width=300 />

## 소개
- React Native + Expo로 개발된 간단한 메모 어플리케이션 입니다.

## 어플리케이션 링크
- Android: https://expo.dev/artifacts/eas/7rrLLNtPZLheSVSDDhKHN.apk

## 기획의도
- 공식문서를 보고 React Native 공부를 하면서 간단한 어플리케이션을 만들고자 하였습니다.

## Skills

| FlatForms & Language |
| :-: |
| <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><br/><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/expo-000020?style=for-the-badge&logo=expo&logoColor=white"><br/><img src="https://img.shields.io/badge/swr-000000?style=for-the-badge&logo=swr&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
 
## 주요 기능

### CRUD
- 데이터 베이스는 <strong>Async Storage</strong>를 사용하였고, <strong>SWR</strong>을 사용하여 캐싱과 데이터 최신화를 하였습니다.
- React Query를 사용하지 않고 SWR을 사용한 이유는 이 프로젝트에서 필요한 기능은 캐싱과 뮤테이션이기 때문에 용량이 더 적은 SWR을 사용하였습니다.

### 정렬 기능, 다크 모드
- <strong>Context Api</strong>를 활용하여 정렬, 테마 상태가 변할 때마다 컴포넌트의 스타일 변화를 주었습니다.

### 스켈레톤 UI, 애니메이션
- React Native의 <strong>Animated Api</strong>를 활용하여 스켈레톤 UI와 카드 애니메이션을 개발했습니다.
- 스켈레톤과 애니메이션은 커스텀 훅을 개발하여 재사용성을 강조하였습니다.

## Custom Hook

### useBgColor
- onPressIn, onPressOut의 색을 변경하는 커스텀 훅
- 초기 색상과 클릭됐을 때의 색상을 인자로 받아서 색을 변경합니다.
```
export const useBgColor = (initialColor: string, pressColor: string) => {
  const [bgColor, setBgColor] = useState(initialColor);
  const handlePressIn = () => {
    setBgColor(pressColor);
  };
  const handlePressOut = () => {
    setBgColor(initialColor);
  };
  return {
    bgColor,
    handlePressIn,
    handlePressOut,
  };
};
```

### useModal
- Modal 컴포넌트를 재사용하기 위한 커스텀 훅
- isOpen 값으로 Modal의 상태를 체크하고, openModal과, closeModal로 모달 상태를 변경할 수 있습니다.
```
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return {
    ModalComponent,
    isOpen,
    openModal,
    closeModal,
  };
};
```

### useFadeInAnimation
- FadeIn 애니메이션을 재사용하기 위한 훅
- 첫 번째 인자로 delay를 받은 후 배열 컴포넌트에서 순차적 애니메이션을 적용할 수 있습니다.
```
export const useFadeInAnimation = (delay: number) => {
  const opacityAni = useRef(new Animated.Value(0)).current;
  const translateAni = useRef(new Animated.Value(-30)).current;

  useEffect(() => {
    const animationTime = setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacityAni, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateAni, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);

    return () => clearTimeout(animationTime);
  }, []);

  return {
    opacityAni,
    translateAni,
  };
};
```

## 성능 최적화

### 서브셋 폰트
![image](https://github.com/user-attachments/assets/1fa010a5-5573-4055-88b5-66708fc56837)
- 기존 웹에서는 worff, woff2를 선호하지만 Android에서 지원을 하지 않기 때문에 Expo에서 권장하는 otf를 사용하였습니다.
- Pretendard.otf : 약 1500KB
- Pretendard-subset.otf : 약 400KB
- 1500KB를 400KB로 줄였기 때문에 폰트 로딩 속도와 서버에 대한 부담이 적어지는 효과를 가져왔습니다.

### SVG 활용
- 비교적 용량이 많은 png와 jpg 파일 대신 svg를 사용하였습니다.
- React Native에서 svg 활용을 가능하게 해주는 <strong>react-native-svg</strong>를 활용하였습니다.
- 높이와 넓이, 색상 값을 인자로 받기 때문에 서로 다른 색이 필요한 상황에서도 재사용할 수 있습니다.
```
export default function Arrow({ width, height, fill }: svgType) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path d="M15 18L9 12L15 6" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
```

## 트러블 슈팅
- [calc 사용이 불가능한 React Native](https://velog.io/@d_hyeon/RN%EC%97%90%EC%84%9C-calc-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B2%95)
- [Pressable과 Touchable](https://velog.io/@d_hyeon/Pressable-vs-Button-vs-Touchable)
- [React Native에서의 폰트 적용](https://velog.io/@d_hyeon/RN-%ED%8F%B0%ED%8A%B8-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)
