import React from 'react'
import { skills, about } from '../data/projects'
import './About.css'

function About() {
  return <div className="about">
    <section className="about-hero"><div className="about-container"><h1>About Me</h1><p className="about-intro">{about.bio}</p></div></section>
    <section className="about-content"><div className="about-container"><div className="about-grid">
      <div className="about-left">
        <div className="about-card"><h2>Who I Am</h2><p>I&apos;m a {about.education.school} interested in backend engineering and distributed systems. I enjoy building software that is fast, reliable, and practical to maintain.</p><p>My project work explores concurrency, asynchronous processing, caching, and the choices involved in designing systems under load.</p></div>
        <div className="about-card"><h2>Technical Interests</h2><ul className="interests-list">{about.interests.map((interest) => <li key={interest}>{interest}</li>)}</ul></div>
      </div>
      <div className="about-right">
        <div className="about-card"><h2>How I Work</h2><p>I prefer systems with explicit trade-offs, useful measurements, and clear boundaries between components. I use load tests and focused unit tests to guide changes.</p></div>
        <div className="about-card"><h2>Education</h2><p><strong>{about.education.school}</strong></p><p>Focus: {about.education.focus}</p></div>
      </div>
    </div></div></section>
    <section className="skills-section"><div className="about-container"><h2>Technical Skills</h2><div className="skills-matrix">{Object.entries(skills).map(([category, list]) => <div key={category} className="skill-category"><h3>{formatCategoryName(category)}</h3><div className="skill-list">{list.map((skill) => <div key={skill} className="skill-item">{skill}</div>)}</div></div>)}</div></div></section>
    <section className="experience-section"><div className="about-container"><h2>Selected Highlights</h2><div className="experience-highlights">
      <Highlight number="01" title="High-Performance Systems">Built a Go telemetry pipeline measured at 5.25 ms p95 at approximately 550 RPS under a 100 virtual-user load test.</Highlight>
      <Highlight number="02" title="System Architecture">Designed event-driven processing with Kafka, TimescaleDB, Redis, and background consumers.</Highlight>
      <Highlight number="03" title="Backend APIs">Built services in C++, Go, and Node.js with a focus on caching, rate limiting, and maintainable boundaries.</Highlight>
      <Highlight number="04" title="Open Source">Contributed fixes to the Drogon C++ framework and express-rate-limiter.</Highlight>
    </div></div></section>
  </div>
}

function Highlight({ number, title, children }) { return <div className="highlight-card"><div className="highlight-icon" aria-hidden="true">{number}</div><h3>{title}</h3><p>{children}</p></div> }
function formatCategoryName(category) { return category.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase()) }
export default About
