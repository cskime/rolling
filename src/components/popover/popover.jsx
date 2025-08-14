import { createPortal } from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

function PopoverPortal({ children }) {
  return createPortal(children, document.getElementById("popover"));
}

const StyledPopover = styled.div`
  position: absolute;
  top: ${({ $position }) => $position.top}px;
  ${({ $position }) => ($position.left ? `left: ${$position.left}px` : "")};
  ${({ $position }) => ($position.right ? `right: ${$position.right}px` : "")};
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
`;

function Popover({ isOpen, onClose, position, children }) {
  return (
    isOpen && (
      <PopoverPortal>
        <Container onClick={onClose}>
          <StyledPopover $position={position}>{children}</StyledPopover>
        </Container>
      </PopoverPortal>
    )
  );
}

export default Popover;
