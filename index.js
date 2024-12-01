// Run JavaScript only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS
    emailjs.init("ToEWEsKClEpevADOt"); // Replace with your EmailJS User ID

    // Get the form element
    const form = document.getElementById("form");

    // Ensure the form exists before adding event listener
    if (!form) {
        console.error("Form element with id 'form' not found.");
        return;
    }

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate inputs
        if (!name || !email || !message) {
            displayStatus("Please fill out all fields!", "error");
            return;
        }

        // Show loading status
        displayStatus("Sending your message...", "info");

        // Send email using EmailJS
        const formData = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs
            .send("service_hz7sbue", "template_7cymfxj", formData) // Replace with your Service ID and Template ID
            .then(function(response) {
                console.log("Email sent successfully:", response);
                displayStatus("Message sent successfully!", "success");

                // Clear the message after 3 seconds
                setTimeout(() => {
                    clearStatusMessage();
                }, 3000);

                form.reset(); // Clear the form
            })
            .catch(function(error) {
                console.error("Failed to send email:", error);
                displayStatus("Failed to send message. Please try again later.", "error");

                // Clear the error message after 3 seconds
                setTimeout(() => {
                    clearStatusMessage();
                }, 3000);
            });
    });

    // Function to display status messages
    function displayStatus(message, status) {
        const statusMessage = document.getElementById("statusMessage");
        if (!statusMessage) {
            console.error("Status message element not found.");
            return;
        }
        statusMessage.textContent = message;
        statusMessage.style.color =
            status === "success" ? "green" :
            status === "error" ? "red" : "blue";
    }

    // Function to clear the status message
    function clearStatusMessage() {
        const statusMessage = document.getElementById("statusMessage");
        if (statusMessage) {
            statusMessage.textContent = "";
        }
    }
});




