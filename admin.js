document.getElementById("addOpportunityForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("opportunityTitle").value;
    const description = document.getElementById("opportunityDescription").value;

    fetch("http://localhost:4567/admin/addOpportunity", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "isAdmin": "true", // Pass the admin verification header
        },
        body: JSON.stringify({ title, description }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert("Opportunity added successfully!");
                document.getElementById("addOpportunityForm").reset();
            } else {
                alert("Error: " + data.message);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred.");
        });
});
