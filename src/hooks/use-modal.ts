import { useState } from 'react'

export default function useModal() {
  const [isOpened, setIsOpened] = useState(false)

  function toggleModal() {
    setIsOpened((prev) => !prev)
  }

  return { isOpened, toggleModal }
}
