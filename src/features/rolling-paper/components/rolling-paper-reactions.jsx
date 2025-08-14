import styled from "styled-components";
import arrowDownImage from "../../../assets/ic-chevron-down.svg";
import EmojiBadge from "../../../components/badge/emoji-badge";

const MoreButton = styled.button`
  background: none;
  border: none;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const Reactions = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledRollingPaperReactions = styled.div`
  display: flex;
  gap: 2px;
`;

function RollingPaperReactions({ reactions }) {
  return (
    <StyledRollingPaperReactions>
      <Reactions>
        {reactions.slice(0, 3).map(({ id, emoji, count }) => (
          <EmojiBadge key={id} emoji={emoji} count={count} />
        ))}
      </Reactions>
      <MoreButton>
        <img src={arrowDownImage} alt="열기 버튼" />
      </MoreButton>
    </StyledRollingPaperReactions>
  );
}

export default RollingPaperReactions;
