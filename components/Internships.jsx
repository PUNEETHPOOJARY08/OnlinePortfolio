import { useState } from 'react'
import './Internships.css'

const Internships = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const internships = [
    {
      id: 1,
      company: 'Samagra Technologies',
      position: 'Frontend Development Intern',
      period: 'Sep 2023 – Oct 2023',
      description:
        'Developed responsive and interactive web pages using HTML, CSS, and JavaScript, improving UI performance and design consistency.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      icon: '💼',
      certificate: '/internship-fullstack-certificate.jpg'
    },
    {
      id: 2,
      company: 'Samagra Technologies',
      position: 'MERN Stack Development Intern',
      period: 'Feb 2025 – May 2025',
      description:
        'Built full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), implementing CRUD operations and authentication features.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express.js',
        'React.js',
        'Node.js'
      ],
      icon: '🚀',
      certificate: '/internship-mernstack-certificate.jpg'
    }
  ]

  return (
    <section id="internships" className="internships">
      <div className="container">
        <h2 className="section-title">Internships</h2>

        <div className="internships-content">
          {internships.map((internship, index) => (
            <div
              key={internship.id}
              className="internship-card"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedImage(internship.certificate)}
            >
              <div className="internship-icon">{internship.icon}</div>

              <div className="internship-content">
                <div className="internship-header">
                  <div>
                    <h3 className="internship-position">{internship.position}</h3>
                    <p className="internship-company">{internship.company}</p>
                  </div>
                  <span className="internship-period">{internship.period}</span>
                </div>

                <p className="internship-description">{internship.description}</p>

                <div className="internship-technologies">
                  {internship.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="certificate-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Certificate" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Internships
