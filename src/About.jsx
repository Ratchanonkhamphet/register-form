function About({ language }) {
  return (
    <main className="home-page">
      <h1>{language === 'en' ? 'About Us' : 'เกี่ยวกับเรา'}</h1>
      <p>
        {language === 'en'
          ? 'Hello, my name is Ratchanon Khamphet (Nes). I am a 4th-year student at Rajamangala University of Technology and currently on internship training.'
          : 'สวัสดีครับชื่อ รัชชานนท์ คำเพชร ชื่อเล่น เนส เป็นนักศึกษา ชั้นที่ 4 จากมหาลัยเทคโนโลยีราชมงคล ตอนนี้อยู่ช่วงนักศึกษาฝึกงาน'}
      </p>
    </main>
  );
}

export default About;
