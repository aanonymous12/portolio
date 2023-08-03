document.addEventListener("DOMContentLoaded", function () {
    const formData = localStorage.getItem("formData");
    const formDataArray = formData ? JSON.parse(formData) : [];

    const formDataContainer = document.getElementById("form-data");

    if (formDataArray.length > 0) {
        formDataContainer.innerHTML = ""; // Clear existing content

        formDataArray.forEach(function (data, index) {
            const dataDiv = document.createElement("div");
            dataDiv.className = "entry";

            dataDiv.innerHTML = `
                <h3>Entry ${index + 1}</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <p><strong>Message:</strong> ${data.message}</p>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;

            formDataContainer.appendChild(dataDiv);
        });

        // Add event listeners to delete buttons
        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const index = parseInt(button.getAttribute("data-index"));
                deleteEntry(index);
            });
        });
    } else {
        formDataContainer.innerHTML = "No form data stored.";
    }
});

function deleteEntry(index) {
    const formData = localStorage.getItem("formData");
    const formDataArray = formData ? JSON.parse(formData) : [];

    if (formDataArray.length > index) {
        formDataArray.splice(index, 1);
        localStorage.setItem("formData", JSON.stringify(formDataArray));

        // Refresh the displayed data
        location.reload();
    }
}
