import styled, { keyframes } from "styled-components";

const mountAnimation = keyframes`
  from {
    transform: translateY(36px);
  }

  to {
    transform: initial;
  }
`;

function animationDelay({ $index = 0 }) {
  const delay = 150;
  return `${delay * $index}ms`;
}

const StyledMessageCardBase = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  overflow: hidden;
  animation: ${mountAnimation} 900ms ${animationDelay} backwards;
  transition: transform 300ms;

  &:hover {
    transform: scale(1.02);
  }
`;

function MessageCardBase({ index, children }) {
  return (
    <StyledMessageCardBase $index={index}>{children}</StyledMessageCardBase>
  );
}

export default MessageCardBase;
