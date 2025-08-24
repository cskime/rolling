import { useState } from "react";
import { useModal } from "./use-modal";

function useModalDialog() {
  const { showsModal, setShowsModal } = useModal({
    key: "delete-modal",
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [primaryAction, setPrimaryAction] = useState(null);

  const openDialog = ({ title, content, primaryAction }) => {
    setShowsModal(true);
    setTitle(title);
    setContent(content);
    setPrimaryAction(() => primaryAction);
  };

  const closeDialog = () => {
    setShowsModal(false);
    setTitle("");
    setContent("");
    setPrimaryAction(null);
  };

  const onPrimaryAction = () => {
    primaryAction();
    closeDialog();
  };

  return {
    showsDialog: showsModal,
    dialogTitle: title,
    dialogContent: content,
    openDialog,
    closeDialog,
    onPrimaryAction,
  };
}

export { useModalDialog };
