// รอให้ HTML โหลดเสร็จก่อน ค่อยเริ่มทำงาน
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('registerForm');

    // ดักจับ Event ตอนกด Submit
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            showSuccessPopup();
        }
    });

    function validateForm() {
        let isValid = true;

        clearErrors();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();

        // Regular Expressions
        const regex = {
            thaiName: /^[ก-๙]+$/,
            thaiFullName: /^[ก-๙\s]+$/,
            phone: /^0\d{9}$/,
            email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        };
        // ===== ชื่อ =====
        if (firstName === '') {
            showError('firstNameError', 'กรุณากรอกชื่อ');
            isValid = false;
        } else if (!thaiRegex.test(firstName)) {
            showError('firstNameError', 'ชื่อใช้ได้เฉพาะภาษาไทย');
            isValid = false;
        }

        // ===== นามสกุล =====
        if (lastName === '') {
            showError('lastNameError', 'กรุณากรอกนามสกุล');
            isValid = false;
        } else if (!thaiRegex.test(lastName)) {
            showError('lastNameError', 'นามสกุลใช้ได้เฉพาะภาษาไทย');
            isValid = false;
        }

        // ===== เบอร์โทร =====
        if (phone === '') {
            showError('phoneError', 'กรุณากรอกเบอร์โทรศัพท์');
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            showError('phoneError', 'เบอร์โทรต้องเป็นตัวเลข 10 หลัก และขึ้นต้นด้วย 0');
            isValid = false;
        }

        // ===== Email =====
        if (email === '') {
            showError('emailError', 'กรุณากรอก Email');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('emailError', 'รูปแบบ Email ไม่ถูกต้อง');
            isValid = false;
        }

        return isValid;
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');

        errorMessages.forEach(function (element) {
            element.textContent = '';
        });
    }

    function showSuccessPopup() {
        alert('ลงทะเบียนสำเร็จ');
        form.reset();
    }

});