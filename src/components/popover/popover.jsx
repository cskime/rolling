import styled from "styled-components";
import { usePopover } from "../../hooks/use-popover";
import Portal from "../portal/portal";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledPopover = styled.div`
  position: absolute;
  top: ${({ $position }) => $position.top}px;
  ${({ $position }) => ($position.left ? `left: ${$position.left}px` : "")};
  ${({ $position }) => ($position.right ? `right: ${$position.right}px` : "")};
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

function Popover({ id, alignment, action, children }) {
  const {
    targetRef,
    position,
    showsPopover,
    setShowsPopover,
    handleTargetClick,
  } = usePopover({
    id,
    type: "popover",
    alignment,
  });

  const handleClick = () => handleTargetClick(true);
  const handleBackdropClick = () => setShowsPopover(false);
  const handlePopoverClick = (event) => event.stopPropagation();

  return (
    <>
      <div onClick={handleClick} ref={targetRef}>
        {action}
      </div>
      {showsPopover && (
        <Portal id="popover">
          <Container onClick={handleBackdropClick}>
            <StyledPopover $position={position} onClick={handlePopoverClick}>
              {children}
            </StyledPopover>
          </Container>
        </Portal>
      )}
    </>
  );
}

export default Popover;
