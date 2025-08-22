import { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../../../../components/color/colors";
import Toast from "../../../../components/toast/toast";
import { useMedia } from "../../../../hooks/use-media";
import { useToast } from "../../../../hooks/use-toast";
import { shareRollingPaper } from "../../../../libs/kakao/kakao-service";
import { media } from "../../../../utils/media";
import { getReactions } from "../../../reaction/api/reaction";
import AddReactionPopover from "../../../reaction/components/add-reaction-popover";
import ReceivedReactions from "../../../reaction/components/received-reactions";
import DividedContainer from "./divided-container";
import RollingPaperSenders from "./rolling-paper-senders";
import RollingPaperSharePopover from "./rolling-paper-share-popover";

const RecipientName = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  color: ${Colors.gray(800)};

  ${media.mobile} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const HeaderTrailing = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const RollingPaperHeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 68px;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.mobile} {
    height: 54px;
  }
`;

const StyledRollingPaperHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1248px) {
    padding: 0 24px;
  }

  ${media.mobile} {
    padding: 0 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
function RollingPaperHeader({
  isEditing,
  recipientId,
  recipientName,
  messages,
  topReactions,
}) {
  const { showsToast, setShowsToast } = useToast();
  const { isDesktop, isMobile } = useMedia();
  const [reactions, setReactions] = useState([]);

  const name = <RecipientName>{`To. ${recipientName}`}</RecipientName>;

  const handleShareKakao = () => {
    shareRollingPaper({
      recipientId,
      recipientName,
    });
  };

  const handleShareUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setShowsToast(true);
  };

  useEffect(() => {
    getReactions({ recipientId })
      .then(setReactions)
      .catch((error) => {
        // TODO: Error 처리 필요
        console.error(error);
      });
  }, [recipientId]);

  return (
    <StyledRollingPaperHeader>
      {isMobile && (
        <RollingPaperHeaderContent>{name}</RollingPaperHeaderContent>
      )}
      <RollingPaperHeaderContent>
        {isMobile || <div>{name}</div>}
        <HeaderTrailing>
          <DividedContainer>
            {isDesktop && (
              <RollingPaperSenders
                profiles={messages.map((message) => message.profileImageURL)}
              />
            )}
            <ReceivedReactions
              topReactions={topReactions}
              reactions={reactions}
            />
          </DividedContainer>
          <DividedContainer layout="compact">
            {isEditing || <AddReactionPopover />}
            <RollingPaperSharePopover
              onShareKakao={handleShareKakao}
              onShareUrl={handleShareUrl}
            />
          </DividedContainer>
        </HeaderTrailing>
      </RollingPaperHeaderContent>
      {showsToast && (
        <Toast
          message="URL이 복사 되었습니다."
          onDismiss={() => setShowsToast(false)}
        />
      )}
    </StyledRollingPaperHeader>
  );
}

export default RollingPaperHeader;
