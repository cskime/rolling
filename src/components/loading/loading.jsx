import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border: ${({ thickness }) => thickness || "4px"} solid #f3f3f313;
  border-top: ${({ thickness }) => thickness || "4px"} solid
    var(--color-purple-700);

  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  justify-self: anchor-center;
  align-self: anchor-center;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

const SpinnerOverlay = ({ size, thickness }) => {
  return <Spinner size={size} thickness={thickness} />;
};

export default SpinnerOverlay;
