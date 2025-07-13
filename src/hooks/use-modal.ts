import { useState } from 'react'

export default function useModal() {
  const [isOpened, setIsOpened] = useState(false)

  function openModal() {
    setIsOpened(true)
  }

  function closeModal() {
    setIsOpened(false)
  }

  return { isOpened, openModal, closeModal }
}
