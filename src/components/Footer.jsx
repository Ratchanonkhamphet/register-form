function Footer({ language }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Wed Nes</h3>
          <p>
            {language === 'en'
              ? 'Website for showing our information and contact channels.'
              : 'เว็บไซต์สำหรับแสดงข้อมูลและช่องทางติดต่อของเรา'}
          </p>
        </div>

        <div>
          <h4>{language === 'en' ? 'Contact Us' : 'ติดต่อเรา'}</h4>
          <ul className="footer-links">
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="mailto:contact@wednes.com">Email</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 Wed Nes. {language === 'en' ? 'All rights reserved.' : 'สงวนลิขสิทธิ์'}
      </p>
    </footer>
  );
}

export default Footer;
