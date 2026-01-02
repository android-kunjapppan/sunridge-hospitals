
// src/components/ModalAppointment.jsx
import React, { useEffect } from 'react'

const ModalAppointment = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const onBackdropClick = (e) => {
    if (e.target.classList.contains('modal__backdrop')) onClose()
  }

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onBackdropClick} />
      <div className="modal__dialog" role="dialog" aria-modal="true" aria-label="Book Appointment">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  )
}

export default ModalAppointment
