import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

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
      newErrors.firstName = 'กรุณากรอกชื่อ';
    } else if (!regex.thaiFullName.test(formData.firstName.trim())) {
      newErrors.firstName = 'ชื่อใช้ได้เฉพาะภาษาไทย';
    } else if (/\s{2,}/.test(formData.firstName.trim())) {
      newErrors.firstName = 'ชื่อไม่ควรมีช่องว่างติดกันหลายช่อง';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'กรุณากรอกนามสกุล';
    } else if (!regex.thaiFullName.test(formData.lastName.trim())) {
      newErrors.lastName = 'นามสกุลใช้ได้เฉพาะภาษาไทย';
    } else if (/\s{2,}/.test(formData.lastName.trim())) {
      newErrors.lastName = 'นามสกุลไม่ควรมีช่องว่างติดกันหลายช่อง';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
    } else if (!regex.phone.test(formData.phone.trim())) {
      newErrors.phone = 'เบอร์โทรต้องเป็นตัวเลข 10 หลัก และขึ้นต้นด้วย 0';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'กรุณากรอก Email';
    } else if (/\s/.test(formData.email.trim())) {
      newErrors.email = 'Email ต้องไม่มีช่องว่าง';
    } else if (!regex.email.test(formData.email.trim())) {
      newErrors.email = 'รูปแบบ Email ไม่ถูกต้อง';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('ลงทะเบียนสำเร็จ');
      setFormData({ firstName: '', lastName: '', phone: '', email: '' });
      setErrors({});
    }
  };

  return (
    <main className="container">
      <div className="card">
        <h1 className="card-title">ลงทะเบียน</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="firstName">ชื่อ</label>
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
            <label htmlFor="lastName">นามสกุล</label>
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
            <label htmlFor="phone">เบอร์โทรศัพท์</label>
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
            <label htmlFor="email">Email</label>
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
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
