import styled from "styled-components";
import shareImage from "../../../../assets/ic-share.svg";
import { OutlinedButton } from "../../../../components/button/button";
import BUTTON_SIZE from "../../../../components/button/button-size";
import Colors from "../../../../components/color/colors";
import Popover from "../../../../components/popover/popover";
import POPOVER_ALIGNMENT from "../../../../components/popover/popover-alignment";
import { media } from "../../../../utils/media";

const ShareOption = styled.li`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.gray(100)};
  }
`;

const ShareOptions = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  background-color: white;
  width: 140px;
  list-style: none;
  margin: 0;
`;

function PopoverContent({ onShareKakao, onShareUrl }) {
  return (
    <ShareOptions>
      <ShareOption onClick={onShareKakao}>카카오톡 공유</ShareOption>
      <ShareOption onClick={onShareUrl}>URL 공유</ShareOption>
    </ShareOptions>
  );
}

const PopoverAction = styled(OutlinedButton)`
  width: auto;
  padding: 0 16px;

  ${media.mobile} {
    padding: 0 8px;
  }
`;

function RollingPaperSharePopover({ onShareKakao, onShareUrl }) {
  return (
    <Popover
      id="share-popover"
      alignment={POPOVER_ALIGNMENT.right}
      action={<PopoverAction size={BUTTON_SIZE.small} icon={shareImage} />}
    >
      <PopoverContent onShareKakao={onShareKakao} onShareUrl={onShareUrl} />
    </Popover>
  );
}

export default RollingPaperSharePopover;
