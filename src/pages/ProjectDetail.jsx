import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)
  if (!project) return <div className="project-detail"><div className="projects-container not-found"><h1>Project Not Found</h1><p>Sorry, we couldn&apos;t find that project.</p><Link to="/projects" className="btn btn-primary">Back to Projects</Link></div></div>
  const { details } = project
  return <div className="project-detail">
    <section className="detail-header"><div className="projects-container"><Link to="/projects" className="back-link">← Back to Projects</Link><h1>{project.title}</h1><p className="detail-tagline">{project.tagline}</p></div></section>
    <section className="detail-content"><div className="projects-container"><div className="detail-grid">
      <div className="detail-main">
        <TextSection title="Overview" content={details.overview} />
        <TextSection title="The Problem" content={details.problem} />
        <TextSection title="The Solution" content={details.solution} />
        {details.architecture && <section className="detail-section"><h2>Architecture</h2><div className="architecture-components"><h3>Key Components</h3><ul className="components-list">{details.architecture.components.map((component) => <li key={component.name}><strong>{component.name}:</strong> {component.description}</li>)}</ul></div><div className="data-flow"><h3>Data Flow</h3><p className="flow-diagram">{details.architecture.dataFlow}</p></div></section>}
        {details.implementation && <section className="detail-section"><h2>Technical Implementation</h2><ul className="implementation-list">{Object.entries(details.implementation).map(([label, value]) => <li key={label}><strong>{formatLabel(label)}:</strong> {value}</li>)}</ul></section>}
        <ListSection title="Technology Choices" items={details.technologyChoices} className="choices-list" />
        <ListSection title="Challenges & Trade-offs" items={details.challenges} className="challenges-list" />
        <ListSection title="What I Built" items={details.whatIBuilt} className="contributions-list" />
        <ListSection title="Results" items={details.results} className="learnings-list" />
      </div>
      <aside className="detail-sidebar"><div className="sidebar-card"><h2>Technologies</h2><div className="tech-cloud">{project.technologies.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}</div></div>{(project.github || project.demo) && <div className="sidebar-card"><h2>Resources</h2><div className="links-list">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="resource-link">→ GitHub Repository</a>}{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="resource-link">→ Live Demo</a>}</div></div>}<div className="sidebar-card"><Link to="/projects" className="btn btn-primary">All Projects</Link></div></aside>
    </div></div></section>
  </div>
}
function TextSection({ title, content }) { return content ? <section className="detail-section"><h2>{title}</h2><p>{content}</p></section> : null }
function ListSection({ title, items, className }) { return items?.length ? <section className="detail-section"><h2>{title}</h2><ul className={className}>{items.map((item) => <li key={item}>{item}</li>)}</ul></section> : null }
function formatLabel(label) { return label.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase()) }
export default ProjectDetail
