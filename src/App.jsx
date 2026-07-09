import { useState } from 'react';
import Home from './Home';
import Footer from './components/Footer';

const translations = {
  th: {
    formTitle: 'ลงทะเบียน',
    submit: 'ส่ง',
    nameLabel: 'ชื่อ',
    lastNameLabel: 'นามสกุล',
    phoneLabel: 'เบอร์โทรศัพท์',
    emailLabel: 'Email',
    errors: {
      firstNameRequired: 'กรุณากรอกชื่อ',
      firstNameThai: 'ชื่อใช้ได้เฉพาะภาษาไทย',
      firstNameSpace: 'ชื่อไม่ควรมีช่องว่างติดกันหลายช่อง',
      lastNameRequired: 'กรุณากรอกนามสกุล',
      lastNameThai: 'นามสกุลใช้ได้เฉพาะภาษาไทย',
      lastNameSpace: 'นามสกุลไม่ควรมีช่องว่างติดกันหลายช่อง',
      phoneRequired: 'กรุณากรอกเบอร์โทรศัพท์',
      phoneInvalid: 'เบอร์โทรต้องเป็นตัวเลข 10 หลัก และขึ้นต้นด้วย 0',
      emailRequired: 'กรุณากรอก Email',
      emailNoSpace: 'Email ต้องไม่มีช่องว่าง',
      emailInvalid: 'รูปแบบ Email ไม่ถูกต้อง',
    },
    languageButton: 'EN',
  },
  en: {
    formTitle: 'Register',
    submit: 'Submit',
    nameLabel: 'First Name',
    lastNameLabel: 'Last Name',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    errors: {
      firstNameRequired: 'Please enter first name',
      firstNameThai: 'First name must be in Thai',
      firstNameSpace: 'First name cannot contain consecutive spaces',
      lastNameRequired: 'Please enter last name',
      lastNameThai: 'Last name must be in Thai',
      lastNameSpace: 'Last name cannot contain consecutive spaces',
      phoneRequired: 'Please enter phone number',
      phoneInvalid: 'Phone must be 10 digits and start with 0',
      emailRequired: 'Please enter Email',
      emailNoSpace: 'Email must not contain spaces',
      emailInvalid: 'Invalid Email format',
    },
    languageButton: 'TH',
  },
};

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState('home');
  const [language, setLanguage] = useState('th');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'th' ? 'en' : 'th'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const regex = {
      thaiFullName: /^[ก-๙\s]+$/,
      phone: /^0\d{9}$/,
      email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = t.errors.firstNameRequired;
    } else if (!regex.thaiFullName.test(formData.firstName.trim())) {
      newErrors.firstName = t.errors.firstNameThai;
    } else if (/\s{2,}/.test(formData.firstName.trim())) {
      newErrors.firstName = t.errors.firstNameSpace;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t.errors.lastNameRequired;
    } else if (!regex.thaiFullName.test(formData.lastName.trim())) {
      newErrors.lastName = t.errors.lastNameThai;
    } else if (/\s{2,}/.test(formData.lastName.trim())) {
      newErrors.lastName = t.errors.lastNameSpace;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.errors.phoneRequired;
    } else if (!regex.phone.test(formData.phone.trim())) {
      newErrors.phone = t.errors.phoneInvalid;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.errors.emailRequired;
    } else if (/\s/.test(formData.email.trim())) {
      newErrors.email = t.errors.emailNoSpace;
    } else if (!regex.email.test(formData.email.trim())) {
      newErrors.email = t.errors.emailInvalid;
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoggedIn(true);
      setFormData({ firstName: '', lastName: '', phone: '', email: '' });
      setErrors({});
    }
  };

  if (isLoggedIn) {
    return <Home page={page} setPage={setPage} language={language} toggleLanguage={toggleLanguage} />;
  }

  return (
    <div className="page-shell">
      <main className="container">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">{t.formTitle}</h1>
            <button type="button" className="lang-toggle" onClick={toggleLanguage}>
              {t.languageButton}
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="firstName">{t.nameLabel}</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
            <span className="error-message">{errors.firstName || ''}</span>
          </div>

          <div className="form-group">
            <label htmlFor="lastName">{t.lastNameLabel}</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
            <span className="error-message">{errors.lastName || ''}</span>
          </div>

          <div className="form-group">
            <label htmlFor="phone">{t.phoneLabel}</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <span className="error-message">{errors.phone || ''}</span>
          </div>

          <div className="form-group">
            <label htmlFor="email">{t.emailLabel}</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="error-message">{errors.email || ''}</span>
          </div>


            <button type="submit" className="btn-submit">
              {t.submit}
            </button>
          </form>
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
