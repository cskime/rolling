import styled from "styled-components";
import Colors from "../../color/colors";
import Portal from "../../portal/portal";

const BACKDROP_CLASS_NAME = "dropdown-backdrop";

const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 111;

  & > *:not(.${BACKDROP_CLASS_NAME}) {
    z-index: 114;
  }
`;

const DropdownBackdrop = styled(DropdownContainer)`
  z-index: 112;
  position: fixed;
`;

const DropdownContent = styled(DropdownContainer)`
  z-index: 113;
  position: relative;
  height: 100%;
`;

const StyledDropdown = styled.div`
  background-color: white;
  box-shadow: 0 0 0 1px ${Colors.gray(300)} inset,
    0 2px 12px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  position: absolute;
  top: ${({ $origin }) => $origin.y}px;
  left: ${({ $origin }) => $origin.x}px;
  width: ${({ $size }) => $size.width}px;
`;

function Dropdown({ children, origin, size, onClose }) {
  return (
    <Portal id="dropdown">
      <DropdownContainer>
        <DropdownBackdrop className={BACKDROP_CLASS_NAME} onClick={onClose}>
          <DropdownContent>
            <StyledDropdown $origin={origin} $size={size}>
              {children}
            </StyledDropdown>
          </DropdownContent>
        </DropdownBackdrop>
      </DropdownContainer>
    </Portal>
  );
}

export default Dropdown;
