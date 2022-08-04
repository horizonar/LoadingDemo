/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { colors, kfRotate } from "./constants";
import { Arc, Container } from "./shared";

export default () => {
  const maxDeg = 270;
  return (
    <Container
      css={css`
        animation: ${kfRotate} 1.2s linear infinite;
      `}
    >
      <Arc color={colors[0]} deg={maxDeg} startDeg={0} />
    </Container>
  );
};
