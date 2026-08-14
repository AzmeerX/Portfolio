import React from 'react'
import { contact } from '../data/projects'
import './Contact.css'

function Contact() {
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
    <section className="contact-cta"><div className="contact-container"><div className="cta-box"><h2>Have a question?</h2><p>I&apos;d be glad to hear from you.</p><a href={`mailto:${contact.email}`} className="btn btn-primary">Start a Conversation</a></div></div></section>
  </div>
}
export default Contact
