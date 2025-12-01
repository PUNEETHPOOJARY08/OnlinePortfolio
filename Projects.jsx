import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Event Management System',
      period: 'Dec 2024 – Jan 2025',
      description: 'Developed a full-stack web application for event scheduling, registration, and participant management using Java, Spring Boot and MySQL. Implemented a responsive frontend with HTML, CSS, JavaScript and ensured version control using Git/GitHub.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: '📅'
    },
    {
      id: 2,
      title: 'Online Portfolio',
      period: 'Sept 2023 – Oct 2023',
      description: 'Designed and developed a fully responsive personal portfolio website to showcase projects, skills, and contact information, implementing smooth navigation, interactive UI components, and scroll animations using JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      github: 'https://github.com',
      demo: 'http://localhost:5173/',
      image: '💼'
    },
    {
      id: 3,
      title: 'Bus Booking System',
      period: 'Apr 2025 – Jul 2025',
      description: 'Created the Yatra-Booking like bus booking website to practice responsive web design and full-stack MERN development. Structured semantic React components and RESTful API integration to build sections like search bars, route filters, bus listings, seat selection, payment option and ticket download etc.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://github.com/PUNEETHPOOJARY08/Yatra-Booking/edit/main/README.md',
      image: '🚌'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              role="button"
              tabIndex={0}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={(e) => {
                // If an inner link (GitHub / Demo icons) was clicked, don't handle here
                if (e.target.closest('a')) return
                if (project.demo) {
                  window.open(project.demo, '_blank', 'noopener,noreferrer')
                }
              }}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && project.demo) {
                  window.open(project.demo, '_blank', 'noopener,noreferrer')
                }
              }}
            >
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.period && <span className="project-period">{project.period}</span>}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

