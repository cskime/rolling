import { useContext } from "react";
import PortalContext from "../components/portal/portal-context";

function usePortal({ key }) {
  const { portalState, setPortalState } = useContext(PortalContext);
  const isOpen = portalState[key] ?? false;

  const setIsOpen = (value) => {
    setPortalState((prev) => ({ ...prev, [key]: value }));
  };

  return { isOpen, setIsOpen };
}

export { usePortal };
