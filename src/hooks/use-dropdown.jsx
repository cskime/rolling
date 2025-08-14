import { useContext, useEffect, useRef, useState } from "react";
import DropdownContext from "../components/text-field/dropdown-input/dropdown-context";

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
  const { dropdownState, setDropdownState } = useContext(DropdownContext);
  const [dropdownRect, setDropdownRect] = useState();

  const targetRef = useRef();

  const key = `${type}_${id}`;
  const showsDropdown = dropdownState[key] ?? false;

  const setShowsDropdown = (shows) => {
    setDropdownState((prev) => ({ ...prev, [key]: shows }));
  };

  const updateDropdownLayout = (target) => {
    const rect = calculateDropdownRect(target);
    setDropdownRect(rect);
  };

  const handleTargetClick = (shows) => {
    updateDropdownLayout(targetRef.current);
    setShowsDropdown(shows);
  };

  useEffect(() => {
    if (!showsDropdown) return;

    function handleWindowResize() {
      updateDropdownLayout(targetRef.current);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [showsDropdown, targetRef]);

  return {
    targetRef,
    dropdownRect,
    showsDropdown,
    setShowsDropdown,
    handleTargetClick,
  };
}

export { useDropdown };
