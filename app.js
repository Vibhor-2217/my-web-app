// Show alert message
function showAlert() {
    alert("Button clicked!");
}

// Handle form submission
function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Form submitted:", { name, email, message });

    // Clear the form
    document.getElementById('contactForm').reset();

    // Display a success message (you could show a modal or alert)
    alert("Thank you for your message!");
}
