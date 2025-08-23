import styled from "styled-components";
import arrowDownImage from "../../../assets/ic-chevron-down.svg";
import EmojiBadge from "../../../components/badge/emoji-badge";
import Popover from "../../../components/popover/popover";
import POPOVER_ALIGNMENT from "../../../components/popover/popover-alignment";
import { media } from "../../../utils/media";

const StyledPopoverAction = styled.button`
  background: none;
  border: none;
  width: 36px;
  height: 36px;
  cursor: pointer;
  padding: 0;
`;

function PopoverAction() {
  return (
    <StyledPopoverAction>
      <img src={arrowDownImage} alt="전체 리액션 보기" />
    </StyledPopoverAction>
  );
}

const StyledAllReactions = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(4, min-content);
  row-gap: 10px;
  column-gap: 8px;

  ${media.mobile} {
    grid-template-columns: repeat(3, min-content);
  }
`;

function AllReactionsPopover({ reactions }) {
  return (
    <Popover
      id="rolling-paper-reactions-popover"
      alignment={POPOVER_ALIGNMENT.right}
      action={<PopoverAction />}
    >
      <StyledAllReactions>
        {reactions.map(({ id, emoji, count }) => (
          <EmojiBadge key={id} emoji={emoji} count={count} />
        ))}
      </StyledAllReactions>
    </Popover>
  );
}

export default AllReactionsPopover;
