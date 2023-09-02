document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("application-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            form.submit();
        }
    });

    function validateForm() {
        let isValid = true;

        // Clear previous error messages
        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach((msg) => msg.remove());

        // Validate required fields
        const requiredFields = form.querySelectorAll("[required]");
        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false;
                displayErrorMessage(field, "This field is required.");
            }
        });

        // Validate email format
        const emailField = form.querySelector("#email");
        const emailValue = emailField.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue && !emailPattern.test(emailValue)) {
            isValid = false;
            displayErrorMessage(emailField, "Enter a valid email address.");
        }

        // Validate contact numbers (optional)
        const contactNumberField = form.querySelector("#contactNumber");
        const whatsappNumberField = form.querySelector("#whatsappNumber");
        const contactNumberValue = contactNumberField.value.trim();
        const whatsappNumberValue = whatsappNumberField.value.trim();
        const phoneNumberPattern = /^\d{10}$/;
        if (contactNumberValue && !phoneNumberPattern.test(contactNumberValue)) {
            isValid = false;
            displayErrorMessage(contactNumberField, "Enter a valid 10-digit phone number.");
        }
        if (whatsappNumberValue && !phoneNumberPattern.test(whatsappNumberValue)) {
            isValid = false;
            displayErrorMessage(whatsappNumberField, "Enter a valid 10-digit phone number.");
        }

        return isValid;
    }

    function displayErrorMessage(field, message) {
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = message;
        field.parentNode.appendChild(errorMessage);
    }
});


window.alert()
