import { useEffect, useRef, useState } from "react";
import POPOVER_ALIGNMENT from "../components/popover/popover-alignment";
import { usePortal } from "./use-portal";

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

function usePopover({ id, type, alignment }) {
  const key = `${type}_${id}`;
  const { isOpen, setIsOpen } = usePortal({ key });
  const [position, setPopoverPosition] = useState();
  const targetRef = useRef();

  const updatePopoverPosition = (target, alignment) => {
    const position = calculatePopoverPosition(target, alignment);
    setPopoverPosition(position);
  };

  const handleTargetClick = (shows) => {
    updatePopoverPosition(targetRef.current, alignment);
    setIsOpen(shows);
  };

  useEffect(() => {
    if (!isOpen) return;

    function handleWindowResize() {
      updatePopoverPosition(targetRef.current, alignment);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [isOpen, targetRef, alignment]);

  return {
    targetRef,
    position,
    showsPopover: isOpen,
    setShowsPopover: setIsOpen,
    handleTargetClick,
  };
}

export { usePopover };
