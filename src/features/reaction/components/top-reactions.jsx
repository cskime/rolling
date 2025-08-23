import styled from "styled-components";
import EmojiBadge from "../../../components/badge/emoji-badge";
import TOP_REACTIONS_LAYOUT from "./top-reactions-layout";

const gap = {
  [TOP_REACTIONS_LAYOUT.normal]: "8px",
  [TOP_REACTIONS_LAYOUT.compact]: "4px",
};

const StyledTopReactions = styled.div`
  display: flex;
  gap: ${({ $layout }) => gap[$layout]};
`;

function TopReactions({ reactions, layout = TOP_REACTIONS_LAYOUT.normal }) {
  return (
    <StyledTopReactions $layout={layout}>
      {reactions.map(({ id, emoji, count }) => (
        <EmojiBadge key={id} emoji={emoji} count={count} />
      ))}
    </StyledTopReactions>
  );
}

export default TopReactions;
