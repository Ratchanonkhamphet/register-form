import Navbar from './components/Navbar';
import About from './About';
import Contact from './Contact';
import Footer from './components/Footer';

function Home({ page, setPage, language, toggleLanguage }) {
  return (
    <div className="page-shell">
      <Navbar setPage={setPage} language={language} toggleLanguage={toggleLanguage} />

      {page === 'home' && (
        <main className="home-page">
          <h1>{language === 'en' ? 'Welcome' : 'ยินดีต้อนรับ'}</h1>
          <p>
            {language === 'en'
              ? 'This is the main page after logging in. You can browse and use the website.'
              : 'นี่คือหน้าหลักหลังจากเข้าสู่ระบบ คุณสามารถทำการเรียกดูและใช้งานเว็บไซต์ได้'}
          </p>
        </main>
      )}

      {page === 'about' && <About language={language} />}
      {page === 'contact' && <Contact language={language} />}

      <Footer language={language} />
    </div>
  );
}

export default Home;
