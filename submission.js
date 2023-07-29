// Function to handle the form submission
function handleFormSubmission(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Submit the form using JavaScript's Fetch API or XMLHttpRequest
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target)
    })
    .then(response => {
        // Check if the form submission was successful (status code 200-299)
        if (response.ok) {
            // Optional: Redirect to the custom thank-you page
            window.location.href = 'thankyou.html';
        } else {
            // Handle form submission error if needed
            console.error('Form submission failed');
        }
    })
    .catch(error => {
        // Handle any network errors or other issues
        console.error('Error submitting form:', error);
    });
}

// Add an event listener to the form for form submission
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmission);
