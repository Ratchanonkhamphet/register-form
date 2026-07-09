function Contact({ language }) {
  const contacts = [
    { name: language === 'en' ? 'Phone' : 'เบอร์โทร', value: '081-234-5678', icon: '📞' },
    { name: 'Instagram', value: '@wednes', icon: '📸' },
    { name: 'Line', value: '@wednes', icon: '💬' },
    { name: 'Facebook', value: 'Wed Nes', icon: '📘' },
  ];

  return (
    <main className="home-page contact-page">
      <h1>{language === 'en' ? 'Contact' : 'ติดต่อเรา'}</h1>
      <p>{language === 'en' ? 'Our contact channels' : 'ช่องทางติดต่อของเรา'}</p>

      <div className="contact-list">
        {contacts.map((item) => (
          <div className="contact-card" key={item.name}>
            <div className="contact-icon">{item.icon}</div>
            <div>
              <h3>{item.name}</h3>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Contact;
