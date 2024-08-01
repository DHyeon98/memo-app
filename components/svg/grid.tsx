import { svgType } from '@/types/svg';
import { Rect, Svg } from 'react-native-svg';

export default function GridSvg({ width, height, fill }: svgType) {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
      <Rect x="20" y="20" width="24" height="24" fill={fill} />
      <Rect x="56" y="20" width="24" height="24" fill={fill} />
      <Rect x="20" y="56" width="24" height="24" fill={fill} />
      <Rect x="56" y="56" width="24" height="24" fill={fill} />
    </Svg>
  );
}
