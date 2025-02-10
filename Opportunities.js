document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:4567/opportunities")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("opportunitiesContainer");
            container.innerHTML = "";  // Clear existing content

            data.forEach(opportunity => {
                const card = document.createElement("div");
                card.className = "opportunity-card";

                card.innerHTML = `
                    <div class="image-placeholder">[Image Placeholder]</div>
                    <h3>${opportunity.title}</h3>
                    <p>${opportunity.description}</p>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching opportunities:", error);
        });
});
