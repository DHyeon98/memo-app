import ModalComponent from "@/components/modal/modal";
import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return {
    ModalComponent,
    isOpen,
    openModal,
    closeModal,
  };
};
