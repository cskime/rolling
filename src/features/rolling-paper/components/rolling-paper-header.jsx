import styled from "styled-components";
import addImage from "../../../assets/ic-face-smile-add.svg";
import shareImage from "../../../assets/ic-share.svg";
import { OutlinedButton } from "../../../components/button/button";
import BUTTON_SIZE from "../../../components/button/button-size";
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

const Divider = styled.div`
  width: 1px;
  height: 28px;
  background-color: ${Colors.gray(200)};
`;

const StyledDividedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

function DividedContainer({ children }) {
  return (
    <StyledDividedContainer>
      {children[0]}
      <Divider />
      {children[1]}
    </StyledDividedContainer>
  );
}

const HeaderTrailing = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ShareButton = styled(OutlinedButton)`
  width: auto;
  padding: 0 16px;
`;

function RollingPaperHeader({ recipientName }) {
  return (
    <StyledRollingPaperHeader>
      <HeaderContent>
        <div>
          <RecipientName>{`To. ${recipientName}`}</RecipientName>
        </div>
        <HeaderTrailing>
          <DividedContainer>
            <OutlinedButton
              size={BUTTON_SIZE.small}
              title="추가"
              icon={addImage}
            />
            <ShareButton size={BUTTON_SIZE.small} icon={shareImage} />
          </DividedContainer>
        </HeaderTrailing>
      </HeaderContent>
    </StyledRollingPaperHeader>
  );
}

export default RollingPaperHeader;
