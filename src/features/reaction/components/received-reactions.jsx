import styled from "styled-components";
import { useMedia } from "../../../hooks/use-media";
import AllReactionsPopover from "./all-reactions-popover";
import TopReactions from "./top-reactions";

const StyledRollingPaperReactions = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

function ReceivedReactions({ topReactions, reactions }) {
  const { isMobile } = useMedia();

  return (
    <StyledRollingPaperReactions>
      <TopReactions reactions={topReactions.slice(0, 3)} />
      <AllReactionsPopover reactions={reactions.slice(0, isMobile ? 6 : 8)} />
    </StyledRollingPaperReactions>
  );
}

export default ReceivedReactions;
