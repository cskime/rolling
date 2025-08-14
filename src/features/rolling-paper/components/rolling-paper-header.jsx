import styled from "styled-components";
import Colors from "../../../components/color/colors";
import { media } from "../../../utils/media";

const StyledRollingPaperHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
  border-bottom: 1px solid #ededed;
  padding: 0 24px;

  ${media.mobile} {
    padding: 0 16px;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecipientName = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  color: ${Colors.gray(800)};
`;

function RollingPaperHeader({ recipientName }) {
  return (
    <StyledRollingPaperHeader>
      <HeaderContent>
        <div>
          <RecipientName>{`To. ${recipientName}`}</RecipientName>
        </div>
      </HeaderContent>
    </StyledRollingPaperHeader>
  );
}

export default RollingPaperHeader;
