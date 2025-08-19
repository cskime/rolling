import styled from "styled-components";
import arrowDownImage from "../../../assets/ic-chevron-down.svg";
import EmojiBadge from "../../../components/badge/emoji-badge";
import Popover from "../../../components/popover/popover";
import POPOVER_ALIGNMENT from "../../../components/popover/popover-alignment";
import { useMedia } from "../../../hooks/use-media";
import { media } from "../../../utils/media";

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

  ${media.mobile} {
    grid-template-columns: repeat(3, min-content);
  }
`;

const StyledRollingPaperReactions = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

function RollingPaperReactions({ reactions }) {
  const { isMobile } = useMedia();

  return (
    <StyledRollingPaperReactions>
      <TopThreeReactions>
        {reactions.slice(0, 3).map(({ id, emoji, count }) => (
          <EmojiBadge key={id} emoji={emoji} count={count} />
        ))}
      </TopThreeReactions>
      <Popover
        id="rolling-paper-reactions-popover"
        alignment={POPOVER_ALIGNMENT.right}
        action={
          <MoreButton>
            <img src={arrowDownImage} alt="열기 버튼" />
          </MoreButton>
        }
      >
        <AllReactions>
          {reactions.slice(0, isMobile ? 6 : 8).map(({ id, emoji, count }) => (
            <EmojiBadge key={id} emoji={emoji} count={count} />
          ))}
        </AllReactions>
      </Popover>
    </StyledRollingPaperReactions>
  );
}

export default RollingPaperReactions;
