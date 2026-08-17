import React, { useState } from 'react'
import { contact } from '../data/projects'
import './Contact.css'

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    if (status !== 'submitting') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  function validate() {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.'
    else if (!emailPattern.test(formData.email.trim())) nextErrors.email = 'Enter a valid email address.'
    if (!formData.message.trim()) nextErrors.message = 'Please enter a message.'
    return nextErrors
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus('error')
      setStatusMessage('Please correct the highlighted fields and try again.')
      return
    }

    if (!formEndpoint) {
      setStatus('error')
      setStatusMessage('The contact form is not configured yet. Please use the email link above.')
      return
    }

    setStatus('submitting')
    setStatusMessage('Sending your message…')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        })
      })

      if (!response.ok) throw new Error('Form submission failed.')

      setFormData({ name: '', email: '', message: '' })
      setErrors({})
      setStatus('success')
      setStatusMessage('Thank you — your message has been sent.')
    } catch {
      setStatus('error')
      setStatusMessage('Your message could not be sent. Please try again or use the email link above.')
    }
  }

  return <div className="contact-page">
    <section className="contact-hero"><div className="contact-container"><h1>Let&apos;s Connect</h1><p>I&apos;m always interested in thoughtful conversations about backend engineering and distributed systems.</p></div></section>
    <section className="contact-content"><div className="contact-container"><div className="contact-grid">
      <div className="contact-message"><h2>Get in Touch</h2><p>Whether you have a question about a project, want to discuss system design, or want to connect, feel free to reach out.</p><p>I&apos;m particularly interested in:</p><ul className="interests"><li>Backend architecture and microservices</li><li>Distributed systems and event-driven design</li><li>System performance and optimization</li><li>Open source contributions</li></ul></div>
      <div className="contact-cards">
        <a href={`mailto:${contact.email}`} className="contact-card"><div className="card-icon" aria-hidden="true">@</div><div className="card-content"><h3>Email</h3><p className="card-value">{contact.email}</p><span className="card-link">Send an email</span></div></a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-card"><div className="card-icon" aria-hidden="true">GH</div><div className="card-content"><h3>GitHub</h3><p className="card-value">@AzmeerX</p><span className="card-link">View my projects</span></div></a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card"><div className="card-icon" aria-hidden="true">in</div><div className="card-content"><h3>LinkedIn</h3><p className="card-value">Azmeer Farhan</p><span className="card-link">Connect with me</span></div></a>
      </div>
    </div></div></section>
    <section className="contact-cta"><div className="contact-container"><div className="cta-box">
      <h2>Send a Message</h2><p>Use the form below and I&apos;ll receive your message by email.</p>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" type="text" value={formData.name} onChange={updateField} autoComplete="name" maxLength="100" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} disabled={status === 'submitting'} />{errors.name && <p id="contact-name-error" className="field-error">{errors.name}</p>}</div>
        <div className="form-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" value={formData.email} onChange={updateField} autoComplete="email" inputMode="email" maxLength="254" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} disabled={status === 'submitting'} />{errors.email && <p id="contact-email-error" className="field-error">{errors.email}</p>}</div>
        <div className="form-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="5" value={formData.message} onChange={updateField} maxLength="5000" required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} disabled={status === 'submitting'} />{errors.message && <p id="contact-message-error" className="field-error">{errors.message}</p>}</div>
        {status !== 'idle' && <p className={`form-status ${status}`} role={status === 'error' ? 'alert' : 'status'} aria-live="polite">{statusMessage}</p>}
        <button type="submit" className="btn btn-primary form-submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send Message'}</button>
      </form>
    </div></div></section>
  </div>
}
export default Contact
