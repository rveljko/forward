import { useModalContext } from '@services/contexts/modal-context'
import { useState } from 'react'

export default function useModal() {
  const [isOpened, setIsOpened] = useState(false)
  const { setIsModalOpened } = useModalContext()

  function openModal() {
    setIsOpened(true)
    setIsModalOpened(true)
  }

  function closeModal() {
    setIsOpened(false)
    setIsModalOpened(false)
  }

  return { isOpened, openModal, closeModal }
}
