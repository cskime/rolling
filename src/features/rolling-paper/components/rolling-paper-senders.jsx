import styled from "styled-components";
import RollingPaperSenderAvatars from "./rolling-paper-sender-avatars";

const StyledRollingPaperSenders = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

function RollingPaperSenders({ profiles }) {
  return (
    <StyledRollingPaperSenders>
      <RollingPaperSenderAvatars profiles={profiles} />
      <p>{`${profiles.length}명이 작성했어요!`}</p>
    </StyledRollingPaperSenders>
  );
}

export default RollingPaperSenders;
