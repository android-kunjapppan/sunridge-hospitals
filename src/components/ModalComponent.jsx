
import React, { useEffect } from 'react'

const Modal = ({ isOpen, onClose, children, ariaLabel = 'Dialog' }) => {
  useEffect(() => {
    if (!isOpen) return
    const onEsc = (e) => { if (e.key === 'Escape') onClose?.() }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const onBackdropClick = (e) => {
    if (e.target.classList.contains('modal__backdrop')) onClose?.()
  }

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onBackdropClick} />
      <div className="modal__dialog" role="dialog" aria-modal="true" aria-label={ariaLabel}>
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  )
}

export default Modal
