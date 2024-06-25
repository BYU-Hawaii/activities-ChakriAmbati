document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    let valid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
    const rating = document.getElementById('rating').value;

    if (name === '') {
        alert('Name is required.');
        valid = false;
    }

    if (email === '') {
        alert('Email is required.');
        valid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    if (comments === '') {
        alert('Comments are required.');
        valid = false;
    }

    if (rating === '') {
        alert('Rating is required.');
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
