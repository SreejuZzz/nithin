document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
    
    // Here you could add code to actually send the form data to a server.
    
    // Clear the form fields
    document.getElementById('contact-form').reset();
});
