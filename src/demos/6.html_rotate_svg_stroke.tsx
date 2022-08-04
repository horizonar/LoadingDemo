/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { LoadingSVG } from "./1.svg_rotate_svg_stroke";
import { kfRotate } from "./constants";
import { Container } from "./shared";

export default () => {
  return (
    <Container
      css={css`
        display: flex;
        animation: ${kfRotate} 1.2s linear infinite;
      `}
    >
      <LoadingSVG />
    </Container>
  );
};
