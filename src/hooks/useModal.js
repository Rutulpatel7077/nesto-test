import { useState, useCallback } from 'react'
/**
 * Manage modal using utils
 * @returns {object} returns helpers for modal
 */
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const toggleModal = useCallback(() => {
    setOpacity(0);
    setIsOpen(!isOpen);
  }, [isOpen])

  const closeModal = useCallback(() => {
    setOpacity(0);
    setIsOpen(false);
  }, [])

  const afterOpen = useCallback(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, [])

  const beforeClose = useCallback(() => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }, [])

  return {
    opacity,
    beforeClose,
    afterOpen,
    toggleModal,
    isOpen,
    backgroundProps: { opacity },
    onBackgroundClick: toggleModal,
    onEscapeKeydown: toggleModal,
    closeModal
  }
}

export default useModal
