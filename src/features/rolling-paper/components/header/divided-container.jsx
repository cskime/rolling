import styled from "styled-components";
import Colors from "../../../../components/color/colors";
import { media } from "../../../../utils/media";

const gap = {
  normal: "28px",
  compact: "12px",
};

const Divider = styled.div`
  width: 1px;
  height: 28px;
  background-color: ${Colors.gray(200)};
`;

const StyledDividedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $layout }) => gap[$layout]};

  ${media.mobile} {
    gap: 16px;
  }
`;

function DividedContainer({ children, layout = "normal" }) {
  return (
    <StyledDividedContainer $layout={layout}>
      {children[0]}
      {children[0] && <Divider />}
      {children[1]}
    </StyledDividedContainer>
  );
}

export default DividedContainer;
