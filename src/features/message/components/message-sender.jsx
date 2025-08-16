import styled from "styled-components";
import Avatar from "../../../components/avatar/avatar";
import Badge from "../../../components/badge/badge";
import BADGE_TYPE from "../../../components/badge/badge-type";
import { media } from "../../../utils/media";

const SenderName = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;

  span {
    font-weight: 700;
  }

  ${media.mobile} {
    font-size: 16px;
    line-height: 26px;
  }
`;

const StyledSenderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

function SenderInfo({ name, type }) {
  return (
    <StyledSenderInfo>
      <SenderName>
        From.<span>{` ${name}`}</span>
      </SenderName>
      <Badge type={type} />
    </StyledSenderInfo>
  );
}
const StyledMessageSender = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

function MessageSender({ profileImage, name }) {
  return (
    <StyledMessageSender>
      <Avatar source={profileImage} />
      <SenderInfo name={name} type={BADGE_TYPE.coworker} />
    </StyledMessageSender>
  );
}

export default MessageSender;
