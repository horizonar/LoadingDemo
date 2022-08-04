/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import {
  colors,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  DEFAULT_STROKE_WIDTH,
  kfRotate,
} from "./constants";

const Container = styled.div<{
  size?: number;
}>(({ size = DEFAULT_SIZE }) => ({
  position: "relative",
  width: size,
  height: size,
}));

const Arc = ({
  className,
  size = DEFAULT_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  color = DEFAULT_COLOR,
  deg = 45,
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  deg?: number;
}) => {
  const R = (size - strokeWidth) / 2;

  const strokeLength = R * 2 * Math.PI * (deg / 360); // 45 度圆弧
  const strokeSpace = R * 2 * Math.PI - strokeLength;

  return (
    <div
      css={{
        width: size,
        height: size,
      }}
      className={className}
    >
      <svg
        css={{
          width: "100%",
          height: "100%",
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
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeDasharray={strokeLength + "," + strokeSpace}
        />
      </svg>
    </div>
  );
};

export default () => {
  const n = 6;
  const maxDeg = 270;
  const minDeg = maxDeg / n;
  return (
    <Container
      css={css`
        animation: ${kfRotate} 1.2s linear infinite;
      `}
    >
      {Array(n)
        .fill(0)
        .map((_, i) => {
          const kfRotateArc = keyframes`
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(${i * minDeg}deg);
          }
          100% {
            transform: rotate(360deg);
          }
          `;
          return (
            <Arc
              key={i}
              css={css`
                position: absolute;
                animation: ${kfRotateArc} 2.5s linear infinite;
              `}
              color={colors[i % colors.length]}
              deg={minDeg}
            />
          );
        })}
    </Container>
  );
};
