import { svgType } from '@/types/svg';
import { Path, Svg } from 'react-native-svg';

export default function Search({ width, height, fill }: svgType) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M17.5 17.5L13.875 13.875" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
