import ModalComponent from '@/components/common/modal/modal';
import { useState } from 'react';

/**
 * 모달을 커스텀 훅으로 관리합니다.
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 상호작용 시 모달이 열리는 함수입니다.
  const openModal = () => setIsOpen(true);

  // 상호작용 시 모달이 닫히는 함수입니다.
  const closeModal = () => setIsOpen(false);
  return {
    ModalComponent,
    isOpen,
    openModal,
    closeModal,
  };
};
