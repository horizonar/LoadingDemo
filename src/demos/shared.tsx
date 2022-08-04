/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { DEFAULT_COLOR, DEFAULT_SIZE, DEFAULT_STROKE_WIDTH } from "./constants";

export const Arc = ({
  size = DEFAULT_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  color = DEFAULT_COLOR,
  deg,
  startDeg,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  deg: number;
  startDeg: number;
}) => {
  const R = (size - strokeWidth) / 2;

  const strokeLength = R * 2 * Math.PI * (deg / 360);
  const strokeSpace = R * 2 * Math.PI - strokeLength;
  const stokeOffset = R * 2 * Math.PI * (startDeg / 360);

  return (
    <svg
      css={{
        width: size,
        height: size,
      }}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={R}
        stroke={color}
        fill="none"
        strokeWidth={strokeWidth}
        // strokeMiterlimit={10}
        strokeLinecap="round"
        strokeDasharray={strokeLength + "," + strokeSpace}
        strokeDashoffset={stokeOffset}
      />
    </svg>
  );
};

export const Container = styled.div<{
  size?: number;
}>(({ size = DEFAULT_SIZE }) => ({
  position: "relative",
  width: size,
  height: size,
}));
