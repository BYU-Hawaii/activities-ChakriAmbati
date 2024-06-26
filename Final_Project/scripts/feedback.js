// feedback.js
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('form-feedback');
    
    if (name && email && message) {
        feedback.textContent = 'Thank you for your feedback!';
        // Code to send the form data to the server or an external service
    } else {
        feedback.textContent = 'Please fill out all fields.';
    }
});
