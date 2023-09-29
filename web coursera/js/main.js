
const yourEmailAddress = 'gaganmjainwayanad@gmail.com';

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    submitButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // You can add client-side validation here if needed
        
        // Send the message to the server for processing (simulated here)
        const formData = { name, email, message };
        
        // Simulate sending the data to the server
        // In a real application, this should be an AJAX request to your server
        // to handle form submission and email sending
        setTimeout(() => {
            // Display a confirmation message to the user
            confirmationMessage.textContent = 'Message sent successfully!';
            confirmationMessage.style.color = 'green';
            
            // Reset the form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }, 2000); // Simulated delay (2 seconds) to mimic server processing
        
        // In a real application, you'd send the form data to the server
        // using an AJAX request or form submission to handle email sending
        // Example using fetch:
        
        fetch('/your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the server response here
            // Display a success or error message to the user
        })
        .catch(error => {
            // Handle any network or server errors here
        });
    
    });
});
