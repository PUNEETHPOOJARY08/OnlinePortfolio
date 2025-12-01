import './Education.css'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Secondary School, Class X',
      institution: 'Shree Ramachandra High School Perne',
      year: '2018-2019',
      marks: 'Marks: 88.32%',
      icon: '🎓'
    },
    {
      id: 2,
      degree: 'Pre-University College, Science Stream, Class XII',
      institution: 'Sri Rama PU college Kalladka',
      year: '2019-2021',
      marks: 'Marks: 82.5%',
      icon: '📚'
    },
    {
      id: 3,
      degree: 'Bachelor of Engineering (B.E) in Artificial Intelligence and Machine Learning',
      institution: 'Srinivas Institute of Technology Mangalore, Valacchil',
      year: '2021-2025',
      marks: 'CGPA: 7.4',
      icon: '🎓'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">
          Education
        </h2>
        <div className="education-content">
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={edu.id} className="education-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="education-icon">{edu.icon}</div>
                <div className="education-card">
                  <div className="education-year">{edu.year}</div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-marks">{edu.marks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

