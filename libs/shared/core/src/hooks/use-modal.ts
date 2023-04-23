import { useState } from 'react'

type Props = [boolean, () => void, () => void]

export const useModal = (): Props => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return [isOpen, openModal, closeModal]
}
