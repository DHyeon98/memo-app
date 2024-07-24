import { Path, Svg } from 'react-native-svg';

export default function Arrow({ width, height, fill }: any) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path d="M15 18L9 12L15 6" stroke={fill.sortFill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
