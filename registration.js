document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    /*** Handle Sign Up Form Submission ***/
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Signup form submitted");

        // Get input values
        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        console.log("Name:", name, "Email:", email, "Password:", password);

        // Send POST request to backend /signup endpoint
        fetch("http://localhost:4567/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Response from server:", data);
            if (data.success) {
                alert(data.message);
                document.getElementById("signupForm").reset(); // Clear form after success
            } else {
                alert("Signup failed: " + data.message);
            }
        })
       .catch((error) => {
           console.error("Error during signup:", error);  // This should log the exact HTTP error
           alert("An error occurred during signup. Please try again.");
       });
    });

    /*** Handle Login Form Submission ***/
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Login form submitted");

        // Get input values
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        console.log("Email:", email, "Password:", password);

        // Send POST request to backend /login endpoint
        fetch("http://localhost:4567/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Response from server:", data);
            if (data.success) {
                alert(data.message);

                // Store isAdmin status in localStorage for later use
                localStorage.setItem("isAdmin", data.isAdmin);

                // Redirect based on admin status
                if (data.isAdmin) {
                    window.location.href = "admin_dashboard.html";
                } else {
                    window.location.href = "index.html";
                }
            } else {
                alert("Login failed: " + data.message);
            }
        })
        .catch((error) => {
            console.error("Error during login:", error);
            alert("An error occurred during login.");
        });
    });
});
