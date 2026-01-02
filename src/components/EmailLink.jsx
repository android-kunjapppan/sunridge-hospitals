
import React from 'react'

/**
 * EmailLink — renders a mailto anchor that opens the user’s email client.
 *
 * Props:
 *  - email:        string (required) — the recipient email address
 *  - subject:      string (optional) — email subject
 *  - body:         string (optional) — email body
 *  - cc:           string | string[] (optional) — cc addresses
 *  - bcc:          string | string[] (optional) — bcc addresses
 *  - children:     ReactNode (optional) — link text; defaults to email
 *  - className:    string (optional) — extra class names
 *  - openNewTab:   boolean (optional) — if true, opens in new tab/window
 *
 * Example:
 *  <EmailLink
 *    email="sunridgehospital@gmail.com"
 *    subject="Appointment Request"
 *    body="Hello Team,\n\nPlease book an appointment.\n\nThanks."
 *    className="btn btn--primary"
 *  />
 */
const EmailLink = ({
  email,
  subject,
  body,
  cc,
  bcc,
  children,
  className = '',
  openNewTab = false,
  ariaLabel,
}) => {
  if (!email) return null

  // Normalize cc/bcc inputs to comma-separated strings
  const normalizeList = (val) =>
    Array.isArray(val) ? val.join(',') : (val || '')

  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  if (cc) params.set('cc', normalizeList(cc))
  if (bcc) params.set('bcc', normalizeList(bcc))

  const href = `mailto:${email}${params.toString() ? `?${params.toString()}` : ''}`
  const target = openNewTab ? '_blank' : undefined
  const rel = openNewTab ? 'noopener noreferrer' : undefined

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel || `Email ${email}`}
    >
      {children || email}
    </a>
  )
}

export default EmailLink
