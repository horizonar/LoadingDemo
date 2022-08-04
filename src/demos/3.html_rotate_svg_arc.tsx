/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { colors, kfRotate } from "./constants";
import { Arc, Container } from "./shared";

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
            <div
              css={css`
                display: flex;
                position: absolute;
                animation: ${kfRotateArc} 2.5s linear infinite;
              `}
            >
              <Arc
                key={i}
                color={colors[i % colors.length]}
                deg={minDeg}
                startDeg={0}
              />
            </div>
          );
        })}
    </Container>
  );
};
