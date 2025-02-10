document.addEventListener("DOMContentLoaded", function () {
    console.log("Add Opportunity page loaded");

    document.getElementById("addOpportunityForm").addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent default form submission
        console.log("Add Opportunity form submitted");

        const title = document.getElementById("opportunityTitle").value;
        const description = document.getElementById("opportunityDescription").value;

        // Retrieve admin status from localStorage
        const isAdmin = localStorage.getItem("isAdmin") === "true";

        if (!isAdmin) {
            alert("You do not have permission to add opportunities.");
            return;  // Stop if user is not an admin
        }

        // Send POST request to backend
        fetch("http://localhost:4567/admin/addOpportunity", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "isAdmin": "true",  // Make sure this is set if logged in as admin
            },
            body: JSON.stringify({
                title: title,
                description: description
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
            } else {
                alert("Failed to add opportunity: " + data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while adding the opportunity.");
        });
    });
});
