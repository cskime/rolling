import styled from "styled-components";
import { media } from "../../utils/media";

const StyledEmojiBadge = styled.div`
  background-color: rgba(0, 0, 0, 0.54);
  color: white;
  padding: 8px 12px;
  border-radius: 32px;

  ${media.mobile} {
    padding: 4px 8px;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  ${media.mobile} {
    gap: 6px;
    font-size: 14px;
    line-height: 20px;
  }
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
