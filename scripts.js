document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS (Animate On Scroll) library
    AOS.init();

    // Form validation for the request form
    const requestForm = document.getElementById('request-form');
    if (requestForm) {
        requestForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Simple captcha validation
            const captcha = document.getElementById('captcha').value;
            if (captcha !== '7') {
                alert('Captcha falsch! Bitte versuchen Sie es erneut.');
                return;
            }

            alert('Formular erfolgreich abgeschickt!');
            requestForm.reset();
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS (Animate On Scroll) library
    AOS.init();
});
