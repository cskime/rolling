import { css } from "styled-components";

function mountAnimation({ isOpen, open, close }) {
  return css`
    animation: ${isOpen ? open : close} 300ms both;
  `;
}

export { mountAnimation };
