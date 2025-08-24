import styled from "styled-components";
import Portal from "../portal/portal";

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledModal = styled.div`
  background-color: white;
  width: 600px;
  border-radius: 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Modal({ shows, children }) {
  return (
    <>
      {shows && (
        <Portal id="modal">
          <ModalContainer>
            <StyledModal>
              <Content>{children}</Content>
            </StyledModal>
          </ModalContainer>
        </Portal>
      )}
    </>
  );
}

export default Modal;
