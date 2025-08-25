import styled, { keyframes } from "styled-components";
import Colors from "../color/colors";

const LoadingAnimation = keyframes`
  from {
    background-position-x: 100%;
  }

  to {
    background-position-x: 0%;
  }
`;

const StyledSkeletonLoading = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    ${Colors.gray(200)} 40%,
    white 50%,
    ${Colors.gray(200)} 60%
  );
  background-size: 300% 100%;
  background-repeat: no-repeat;
  animation: ${({ $isLoading }) => ($isLoading ? LoadingAnimation : "none")} 2s
    infinite;
`;

function SkeletonLoading({ isLoading, children }) {
  return (
    <StyledSkeletonLoading $isLoading={isLoading}>
      {children}
    </StyledSkeletonLoading>
  );
}

export default SkeletonLoading;
