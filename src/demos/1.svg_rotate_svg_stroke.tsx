/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import {
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  DEFAULT_STROKE_WIDTH,
  kfRotate,
} from "./constants";

const size = DEFAULT_SIZE;
const strokeWidth = DEFAULT_STROKE_WIDTH;
const R = (size - strokeWidth) / 2;
const r = 35;

const kfStrokeLength = keyframes`
0% {
  stroke-dasharray: 1, ${(R / r) * 220};
  stroke-dashoffset: 0;
}
50% {
  stroke-dasharray: ${(R / r) * 150}, ${(size / r) * 220};
  stroke-dashoffset: ${(R / r) * -68}px;
}
100% {
  stroke-dasharray: ${(R / r) * 150}, ${(size / r) * 220};
  stroke-dashoffset: ${(R / r) * -218}px;
}
`;

export const LoadingSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        stroke={DEFAULT_COLOR}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeMiterlimit="10"
        fill="none"
        css={css`
          stroke-dasharray: 1, ${(size / r) * 220};
          stroke-dashoffset: 0;
          animation: ${kfStrokeLength} 2.5s ease-in-out infinite;
        `}
      />
    </svg>
  );
};

export default () => {
  return (
    <LoadingSVG
      css={css`
        animation: ${kfRotate} 1.2s linear infinite;
      `}
    />
  );
};
