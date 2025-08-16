import styled from "styled-components";
import { media } from "../../../../utils/media";

const MessageCard = styled.div`
  background-color: blue;
  height: 200px;
`;

const StyledRollingPaperMessagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 28px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 112px 0 246px;

  @media (max-width: 1248px) {
    padding: 93px 24px 91px;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  ${media.mobile} {
    padding: 24px 20px 38px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

function RollingPaperMessagesGrid() {
  return (
    <StyledRollingPaperMessagesGrid>
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </StyledRollingPaperMessagesGrid>
  );
}

export default RollingPaperMessagesGrid;
