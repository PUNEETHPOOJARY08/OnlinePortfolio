
import { useState } from 'react'
import './Certificates.css'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      name: 'DevOps Fundamentals',
      issuer: 'IBM',
      icon: '☁️',
      link: '/ibm-devops-certificate.pdf'
    },
    {
      id: 2,
      name: 'CSS Certification',
      issuer: 'HackerRank',
      icon: '🎨',
      link: '/css-certificate.pdf'
    },
    {
      id: 3,
      name: 'Java Full Stack Development',
      issuer: 'Simplilearn',
      icon: '☕',
      link: '/java-fullstack-certificate.pdf'
    },
    {
      id: 4,
      name: 'Python Certification',
      issuer: 'Certiport',
      icon: '🐍',
      link: '/python-certificate.pdf'
    },
    {
      id: 5,
      name: 'Java Full Stack Development',
      issuer: 'Infosys Springboard',
      icon: '☕',
      link: '/java-fullstack-infosys-certificate.pdf'
    },
    {
      id: 8,
      name: 'Java Full Stack Development with React.js',
      issuer: 'Codegnan Destination',
      icon: '⚛️',
      link: '#'
    }
  ]

  const handleCertificateClick = (e, certificate) => {
    e.preventDefault()
    if (certificate.link !== '#') {
      setSelectedCertificate(certificate)
    }
  }

  const closeModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">
          Certificates
        </h2>
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <a
              key={certificate.id}
              href={certificate.link}
              onClick={(e) => handleCertificateClick(e, certificate)}
              className="certificate-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="certificate-icon">{certificate.icon}</div>
              <div className="certificate-content">
                <h3 className="certificate-name">{certificate.name}</h3>
                <p className="certificate-issuer">{certificate.issuer}</p>
              </div>
              <div className="certificate-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-header">
              <h3>{selectedCertificate.name}</h3>
              <p>{selectedCertificate.issuer}</p>
            </div>
            <div className="modal-body">
              <iframe
                src={selectedCertificate.link}
                title={selectedCertificate.name}
                className="certificate-iframe"
              />
            </div>
            <div className="modal-footer">
              <a
                href={selectedCertificate.link}
                download
                className="btn btn-download"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </div>

      )}

export default Certificates

