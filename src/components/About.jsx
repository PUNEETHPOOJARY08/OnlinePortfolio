import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionate Java Full Stack Developer with hands-on experience in Java, Spring Boot, 
              Hibernate, RESTful APIs, SQL, HTML, CSS, JavaScript, and React.js. Skilled in developing 
              and deploying end-to-end web applications, implementing responsive UIs, and integrating 
              backend microservices.
            </p>
            <p>
              Strong foundation in OOPs, DSA, database management (MySQL, MongoDB), and Agile 
              development. Seeking to contribute to dynamic projects that leverage innovative 
              software solutions.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="tech-list">
              <li>Java & Spring Boot</li>
              <li>React.js & JavaScript</li>
              <li>Hibernate & RESTful APIs</li>
              <li>MySQL & MongoDB</li>
              <li>HTML5, CSS3 & Bootstrap</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-border"></div>
              <div className="image-placeholder">
                <img 
                  src="/about-photo.jpg" 
                  alt="Puneeth K" 
                  className="about-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

