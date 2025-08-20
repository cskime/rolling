import styled from "styled-components";
import Colors from "../../../../components/color/colors";

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

const StyledRollingPaperSharePopover = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  background-color: white;
  width: 140px;
  list-style: none;
  margin: 0;
`;

function RollingPaperSharePopover({ onShareKakao, onShareUrl }) {
  return (
    <StyledRollingPaperSharePopover>
      <ShareOption onClick={onShareKakao}>카카오톡 공유</ShareOption>
      <ShareOption onClick={onShareUrl}>URL 공유</ShareOption>
    </StyledRollingPaperSharePopover>
  );
}

export default RollingPaperSharePopover;
