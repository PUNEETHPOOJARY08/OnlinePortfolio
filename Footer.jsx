import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>Designed & Built by Puneeth K</p>
          <p className="footer-year">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

