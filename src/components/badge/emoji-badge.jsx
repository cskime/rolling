import styled from "styled-components";

const StyledEmojiBadge = styled.div`
  background-color: rgba(0, 0, 0, 0.54);
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  padding: 8px 12px;
  border-radius: 32px;
`;

const Content = styled.div`
  display: flex;
  gap: 4px;
`;

function EmojiBadge({ emoji, count }) {
  return (
    <StyledEmojiBadge>
      <Content>
        <span>{emoji}</span>
        <span>{count}</span>
      </Content>
    </StyledEmojiBadge>
  );
}

export default EmojiBadge;
