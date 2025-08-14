import { useContext, useState } from "react";
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

  const openPopopver = ({ target, alignment }) => {
    const position = calculatePopoverPosition(target, alignment);
    setShowsPopover(true);
    setPopoverPosition(position);
  };

  const closePopover = () => {
    setShowsPopover(false);
  };

  return {
    popoverPosition,
    showsPopover,
    openPopopver,
    closePopover,
  };
}

export { usePopover };
