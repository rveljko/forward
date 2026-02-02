import { useState } from 'react'

export default function useDropdown() {
  const [isOpened, setIsOpened] = useState(false)

  function toggleDropdown() {
    setIsOpened((prev) => !prev)
  }

  return { isOpened, toggleDropdown }
}
