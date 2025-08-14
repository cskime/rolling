import { useContext, useState, useEffect } from "react";
import POPOVER_ALIGNMENT from "../components/popover/popover-alignment";
import PopoverContext from "../components/popover/popover-context";

function calculatePopoverPosition(target, alignment) {
  if (!target) {
    return { top: 0, left: 0, right: 0 };
  }

  const targetRect = target.getBoundingClientRect();
  const position = {
    top: targetRect.bottom + 8,
  };

  switch (alignment) {
    case POPOVER_ALIGNMENT.right:
      position.right = window.innerWidth - targetRect.right;
      break;
    default:
      position.left = targetRect.left;
      break;
  }

  return position;
}

function usePopover() {
  const { showsPopover, setShowsPopover } = useContext(PopoverContext);
  const [popoverPosition, setPopoverPosition] = useState();
  const [target, setTarget] = useState();
  const [alignment, setAlignment] = useState(POPOVER_ALIGNMENT.left);

  const openPopopver = ({ target, alignment }) => {
    updatePopoverPosition(target, alignment);
    setTarget(target);
    setAlignment(alignment);
    setShowsPopover(true);
  };

  const closePopover = () => {
    setShowsPopover(false);
  };

  const updatePopoverPosition = (target, alignment) => {
    const position = calculatePopoverPosition(target, alignment);
    setPopoverPosition(position);
  };

  useEffect(() => {
    if (!showsPopover) return;

    function handleWindowResize() {
      updatePopoverPosition(target, alignment);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [showsPopover, target, alignment]);

  return {
    popoverPosition,
    showsPopover,
    openPopopver,
    closePopover,
  };
}

export { usePopover };
