import { useEffect, useRef, useState } from "react";
import { usePortal } from "./use-portal";

function makeRect({ x, y, width } = { x: 0, y: 0, width: 0 }) {
  return {
    origin: { x, y },
    size: { width },
  };
}

function calculateDropdownRect(target) {
  if (!target) {
    return makeRect();
  }

  const targetRect = target.getBoundingClientRect();
  const dropdownRect = makeRect({
    x: targetRect.left,
    y: targetRect.bottom + 8,
    width: targetRect.width,
  });

  return dropdownRect;
}

function useDropdown({ id, type }) {
  const key = `${type}_${id}`;
  const { isOpen, setIsOpen } = usePortal({ key });
  const [dropdownRect, setDropdownRect] = useState();

  const targetRef = useRef();

  const updateDropdownLayout = (target) => {
    const rect = calculateDropdownRect(target);
    setDropdownRect(rect);
  };

  const handleTargetClick = (shows) => {
    updateDropdownLayout(targetRef.current);
    setIsOpen(shows);
  };

  useEffect(() => {
    if (!isOpen) return;

    function handleWindowResize() {
      updateDropdownLayout(targetRef.current);
    }

    function handleWindowScroll() {
      updateDropdownLayout(targetRef.current);
    }

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [isOpen, targetRef]);

  return {
    targetRef,
    dropdownRect,
    showsDropdown: isOpen,
    setShowsDropdown: setIsOpen,
    handleTargetClick,
  };
}

export { useDropdown };
