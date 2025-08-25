import styled from "styled-components";
import { PrimaryButton } from "../button/button";
import BUTTON_SIZE from "../button/button-size";
import Colors from "../color/colors";

const Title = styled.h2`
  margin: 0;
  color: ${Colors.gray(600)};
`;

const Content = styled.p`
  margin: 0;
  color: ${Colors.gray(600)};
`;

const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const StyledAlertDialog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function ModalDialog({ title, content, action }) {
  return (
    <StyledAlertDialog>
      <Title>{title}</Title>
      {content && <Content>{content}</Content>}
      <Action>
        {action ?? <PrimaryButton size={BUTTON_SIZE.medium} title="확인" />}
      </Action>
    </StyledAlertDialog>
  );
}

export default ModalDialog;
