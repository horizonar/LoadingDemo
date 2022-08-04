/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { colors, kfRotate } from "./constants";
import { Arc, Container } from "./shared";

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
