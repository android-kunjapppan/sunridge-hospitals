
import React from 'react'

/**
 * EmailButton — triggers a mailto URL on click.
 */
const EmailButton = ({
  email,
  subject,
  body,
  cc,
  bcc,
  children = 'Email Us',
  className = 'btn btn--primary',
  ariaLabel,
}) => {
  if (!email) return null

  const normalizeList = (val) =>
    Array.isArray(val) ? val.join(',') : (val || '')

  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  if (cc) params.set('cc', normalizeList(cc))
  if (bcc) params.set('bcc', normalizeList(bcc))

  const href = `mailto:${email}${params.toString() ? `?${params.toString()}` : ''}`

  const onClick = () => {
    window.location.href = href
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel || `Email ${email}`}
    >
      {children}
    </button>
  )
}

export default EmailButton
