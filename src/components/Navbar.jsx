function Navbar({ setPage, language, toggleLanguage }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">wed nes</div>
      <ul className="navbar-menu">
        <li>
          <button onClick={() => setPage('home')}>
            {language === 'en' ? 'Home' : 'หน้าแรก'}
          </button>
        </li>
        <li>
          <button onClick={() => setPage('about')}>
            {language === 'en' ? 'About Us' : 'เกี่ยวกับเรา'}
          </button>
        </li>
        <li>
          <button onClick={() => setPage('contact')}>
            {language === 'en' ? 'Contact' : 'ติดต่อเรา'}
          </button>
        </li>
      </ul>
      <button type="button" className="lang-toggle" onClick={toggleLanguage}>
        {language === 'en' ? 'ไทย' : 'EN'}
      </button>
    </nav>
  );
}

export default Navbar;
