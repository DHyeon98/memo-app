import { Rect, Svg } from "react-native-svg";

export default function SortSvg({ width, height, fill }: any) {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
      <Rect
        x="13.8887"
        y="22.2222"
        width="72.2222"
        height="11.1111"
        fill={fill}
      />
      <Rect
        x="13.8887"
        y="44.4443"
        width="72.2222"
        height="11.1111"
        fill={fill}
      />
      <Rect
        x="13.8887"
        y="66.6667"
        width="72.2222"
        height="11.1111"
        fill={fill}
      />
    </Svg>
  );
}
