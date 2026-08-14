import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './Projects.css'

function Projects() {
  return <div className="projects-page">
    <section className="projects-hero"><div className="projects-container">
      <h1>My Projects</h1>
      <p>Backend systems and applications built with an emphasis on reliability, performance, and clear trade-offs.</p>
    </div></section>
    <section className="projects-grid-section"><div className="projects-container"><div className="projects-grid">
      {projects.map((project) => <article key={project.id} className="project-card">
        <div className="project-card-content">
          <div className="project-header"><h2 className="project-title">{project.title}</h2>{project.featured && <span className="featured-badge">Featured</span>}</div>
          <p className="project-tagline">{project.tagline}</p>
          <p className="project-description">{project.shortDescription}</p>
          <div className="project-techs">{project.technologies.slice(0, 5).map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}{project.technologies.length > 5 && <span className="tech-pill more">+{project.technologies.length - 5}</span>}</div>
          <div className="project-links">
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>}
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>}
            <Link to={`/projects/${project.id}`} className="project-link arrow">Case Study →</Link>
          </div>
        </div>
      </article>)}
    </div></div></section>
  </div>
}

export default Projects
