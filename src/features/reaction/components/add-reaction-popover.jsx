import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";
import addImage from "../../../assets/ic-face-smile-add.svg";
import { OutlinedButton } from "../../../components/button/button";
import BUTTON_SIZE from "../../../components/button/button-size";
import Popover from "../../../components/popover/popover";
import POPOVER_ALIGNMENT from "../../../components/popover/popover-alignment";
import { useMedia } from "../../../hooks/use-media";
import { media } from "../../../utils/media";

const StyledPopoverAction = styled(OutlinedButton)`
  ${media.mobile} {
    padding: 0 8px;
  }
`;

function PopoverAction() {
  const { isMobile } = useMedia();

  return (
    <StyledPopoverAction
      size={BUTTON_SIZE.small}
      title={isMobile ? null : "추가"}
      icon={addImage}
    />
  );
}

function AddReactionPopover({ onSelect }) {
  const handleEmojiClick = (data) => {
    onSelect(data.emoji);
  };

  return (
    <Popover
      id="emoji-picker-popover"
      alignment={POPOVER_ALIGNMENT.right}
      action={<PopoverAction />}
    >
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </Popover>
  );
}

export default AddReactionPopover;
