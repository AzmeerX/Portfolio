import React from 'react';
import { Link } from 'react-router-dom';
import { projects, skills, contact } from '../data/projects';
import './Home.css';

function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Backend Engineer <span className="highlight">&</span>
              <br />
              Distributed Systems Builder
            </h1>
            <p className="hero-subtitle">
              I build backend systems with an emphasis on throughput, reliability, and clear engineering trade-offs.
              Focused on Go, Kafka, databases, and distributed architectures.
            </p>
            <div className="hero-cta">
              <Link to="/projects" className="btn btn-primary">
                View My Projects
              </Link>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <span className="code-title">distributed_system.go</span>
              </div>
              <div className="code-content">
                <pre><code>{`func (p *Pipeline) Process() {
  for event := range p.Events {
    processed := p.transform(event)
    p.store(processed)
    p.cache(processed)
  }
}`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="tech-section">
        <div className="tech-container">
          <h2>Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Languages</h3>
              <div className="tech-tags">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-tags">
                {skills.backend.slice(0, 4).map((skill, i) => (
                  <span key={i} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="tech-category">
              <h3>Messaging</h3>
              <div className="tech-tags">
                {skills.distributedSystems.map((skill, i) => (
                  <span key={i} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="featured-section">
          <div className="featured-container">
            <h2>Featured Project</h2>
            {featuredProjects.map((project) => (
              <div key={project.id} className="featured-card">
                <div className="featured-content">
                  <h3>{project.title}</h3>
                  <p className="featured-tagline">{project.tagline}</p>
                  <p className="featured-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 6).map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="featured-actions">
                    <Link to={`/projects/${project.id}`} className="btn btn-primary">
                      View Case Study
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to explore more?</h2>
          <p>Check out all my projects and learn about my approach to building scalable systems.</p>
          <Link to="/projects" className="btn btn-primary">
            See All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
