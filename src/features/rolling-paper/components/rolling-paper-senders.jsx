import styled from "styled-components";
import RollingPaperSenderAvatars from "./rolling-paper-sender-avatars";

const SenderCountDescription = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;

  span {
    font-weight: 700;
  }
`;

const StyledRollingPaperSenders = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

function RollingPaperSenders({ profiles }) {
  return (
    <StyledRollingPaperSenders>
      <RollingPaperSenderAvatars profiles={profiles} />
      <SenderCountDescription>
        <span>{profiles.length}</span>명이 작성했어요!
      </SenderCountDescription>
    </StyledRollingPaperSenders>
  );
}

export default RollingPaperSenders;
