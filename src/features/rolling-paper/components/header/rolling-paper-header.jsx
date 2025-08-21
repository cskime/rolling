import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";
import addImage from "../../../../assets/ic-face-smile-add.svg";
import shareImage from "../../../../assets/ic-share.svg";
import { OutlinedButton } from "../../../../components/button/button";
import BUTTON_SIZE from "../../../../components/button/button-size";
import Colors from "../../../../components/color/colors";
import Popover from "../../../../components/popover/popover";
import POPOVER_ALIGNMENT from "../../../../components/popover/popover-alignment";
import Toast from "../../../../components/toast/toast";
import { useMedia } from "../../../../hooks/use-media";
import { useToast } from "../../../../hooks/use-toast";
import { shareRollingPaper } from "../../../../libs/kakao/kakao-service";
import { media } from "../../../../utils/media";
import RollingPaperReactions from "./rolling-paper-reactions";
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

const Divider = styled.div`
  width: 1px;
  height: 28px;
  background-color: ${Colors.gray(200)};
`;

const StyledDividedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  ${media.mobile} {
    gap: 16px;
  }
`;

function DividedContainer({ children }) {
  return (
    <StyledDividedContainer>
      {children[0]}
      {children[0] && <Divider />}
      {children[1]}
    </StyledDividedContainer>
  );
}

const HeaderTrailing = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const AddButton = styled(OutlinedButton)`
  ${media.mobile} {
    padding: 0 8px;
  }
`;

const ShareButton = styled(OutlinedButton)`
  width: auto;
  padding: 0 16px;

  ${media.mobile} {
    padding: 0 8px;
  }
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
  reactions,
}) {
  const { showsToast, setShowsToast } = useToast();
  const { isDesktop, isMobile } = useMedia();

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
            <RollingPaperReactions reactions={reactions.slice(0, 8)} />
          </DividedContainer>
          <DividedContainer>
            {isEditing || (
              <Popover
                id="emoji-picker-popover"
                alignment={POPOVER_ALIGNMENT.right}
                action={
                  <AddButton
                    size={BUTTON_SIZE.small}
                    title={isMobile ? null : "추가"}
                    icon={addImage}
                  />
                }
              >
                <EmojiPicker />
              </Popover>
            )}
            <Popover
              id="share-popover"
              alignment={POPOVER_ALIGNMENT.right}
              action={
                <ShareButton size={BUTTON_SIZE.small} icon={shareImage} />
              }
            >
              <RollingPaperSharePopover
                onShareKakao={handleShareKakao}
                onShareUrl={handleShareUrl}
              />
            </Popover>
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
