/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import {
  colors,
  DEFAULT_COLOR,
  DEFAULT_STROKE_WIDTH,
  kfRotate,
} from "./constants";
import { Container } from "./shared";

const Arc = styled.div<{ strokeWidth?: number; color?: string }>(
  ({ strokeWidth = DEFAULT_STROKE_WIDTH, color = DEFAULT_COLOR }) => ({
    boxSizing: "border-box",
    position: "absolute",
    border: `${strokeWidth}px solid transparent`,
    borderTopColor: color,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999,
  })
);

export default () => {
  return (
    <Container
      css={css`
        animation: ${kfRotate} 1.2s linear infinite;
      `}
    >
      {Array(3)
        .fill(0)
        .map((_, i) => {
          const kfRotateArc = keyframes`
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(${(i + 1) * 90}deg);
          }
          100% {
            transform: rotate(360deg);
          }
          `;
          return (
            <Arc
              key={i}
              css={css`
                animation: ${kfRotateArc} 2.4s ease-in-out infinite;
              `}
              color={colors[i % colors.length]}
            />
          );
        })}
    </Container>
  );
};
