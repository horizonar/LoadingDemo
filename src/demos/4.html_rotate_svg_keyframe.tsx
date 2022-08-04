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

  const strokeLength = R * 2 * Math.PI * (deg / 360); // 45 度圆弧
  const strokeSpace = R * 2 * Math.PI - strokeLength;
  const stokeOffset = R * 2 * Math.PI * (startDeg / 360);

  return (
    <svg
      css={{
        width: size,
        height: size,
      }}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
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
        strokeDashoffset={stokeOffset}
      />
    </svg>
  );
};

export default () => {
  const strokeAnimationDuration = 2.5;
  const frameCount = strokeAnimationDuration * 60; // 每秒 60 帧
  const maxDeg = 270;
  const minDeg = 45;

  const kfTranslate = keyframes`
0% {
  transform: translate3d(0, 0, 0);
}

100% {
 transform: translate3d(-100%, 0, 0);
}
`;

  return (
    <Container
      css={css`
        animation: ${kfRotate} 1.2s linear infinite;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          animation: ${kfTranslate} 2.5s steps(${frameCount}) infinite;
          width: max-content;
        `}
      >
        {Array(frameCount)
          .fill(0)
          .map((_, i) => {
            const percent = i / frameCount;
            const step1 = 0.5;

            const deg = (() => {
              // minDeg -> maxDeg -> minDeg
              if (percent <= step1) {
                return minDeg + (percent / step1) * (maxDeg - minDeg);
              }
              return (
                maxDeg + ((percent - step1) / (1 - step1)) * (minDeg - maxDeg)
              );
            })();
            // 0 -> 0 -> 360
            const startDeg =
              percent <= step1
                ? 0
                : 0 + ((percent - step1) / (1 - step1)) * (0 - 360);

            return (
              <Arc
                key={i}
                color={colors[i % colors.length]}
                deg={deg}
                startDeg={startDeg}
              />
            );
          })}
      </div>
    </Container>
  );
};
