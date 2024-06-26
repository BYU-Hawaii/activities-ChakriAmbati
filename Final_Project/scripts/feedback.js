document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const feedback = document.getElementById('form-feedback');
    
    if (name && email && comments) {
        feedback.textContent = 'Thank you for your feedback!';
        feedback.style.color = 'green';
        // Code to send the form data to the server or an external service can be added here
    } else {
        feedback.textContent = 'Please fill out all fields.';
        feedback.style.color = 'red';
    }
});
