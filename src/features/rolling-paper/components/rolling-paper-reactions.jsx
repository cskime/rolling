import { useRef } from "react";
import styled from "styled-components";
import arrowDownImage from "../../../assets/ic-chevron-down.svg";
import EmojiBadge from "../../../components/badge/emoji-badge";
import Popover from "../../../components/popover/popover";
import POPOVER_ALIGNMENT from "../../../components/popover/popover-alignment";
import { usePopover } from "../../../hooks/use-popover";

const MoreButton = styled.button`
  background: none;
  border: none;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const TopThreeReactions = styled.div`
  display: flex;
  gap: 8px;
`;

const AllReactions = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(4, min-content);
  row-gap: 10px;
  column-gap: 8px;
`;

const StyledRollingPaperReactions = styled.div`
  display: flex;
  gap: 2px;
`;

function RollingPaperReactions({ reactions }) {
  const { popoverPosition, showsPopover, openPopopver, closePopover } =
    usePopover();
  const targetRef = useRef();

  const handleMoreClick = () => {
    openPopopver({
      target: targetRef.current,
      alignment: POPOVER_ALIGNMENT.right,
    });
  };

  return (
    <StyledRollingPaperReactions>
      <TopThreeReactions>
        {reactions.slice(0, 3).map(({ id, emoji, count }) => (
          <EmojiBadge key={id} emoji={emoji} count={count} />
        ))}
      </TopThreeReactions>
      <MoreButton ref={targetRef} onClick={handleMoreClick}>
        <img src={arrowDownImage} alt="열기 버튼" />
      </MoreButton>
      <Popover
        isOpen={showsPopover}
        onClose={closePopover}
        position={popoverPosition}
      >
        <AllReactions>
          {reactions.slice(0, 8).map(({ id, emoji, count }) => (
            <EmojiBadge key={id} emoji={emoji} count={count} />
          ))}
        </AllReactions>
      </Popover>
    </StyledRollingPaperReactions>
  );
}

export default RollingPaperReactions;
