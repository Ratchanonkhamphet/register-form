// รอให้ HTML โหลดเสร็จก่อน ค่อยเริ่มทำงาน
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('registerForm');

    // ดักจับ Event ตอนกด Submit
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บ Refresh (พฤติกรรมปกติของ form)

        const isValid = validateForm();

        if (isValid) {
            console.log('ข้อมูลครบถ้วน พร้อมแสดง Popup (Feature ถัดไป)');
            // จะเพิ่มโค้ดแสดง Popup ใน Feature: popup-success
        }
    });

    function validateForm() {
        let isValid = true;

        // เคลียร์ error message เก่าทุกครั้งก่อนเช็คใหม่
        clearErrors();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();

        if (firstName === '') {
            showError('firstNameError', 'กรุณากรอกชื่อ');
            isValid = false;
        }

        if (lastName === '') {
            showError('lastNameError', 'กรุณากรอกนามสกุล');
            isValid = false;
        }

        if (phone === '') {
            showError('phoneError', 'กรุณากรอกเบอร์โทรศัพท์');
            isValid = false;
        }

        if (email === '') {
            showError('emailError', 'กรุณากรอก Email');
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

});