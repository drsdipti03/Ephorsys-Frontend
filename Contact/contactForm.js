document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://localhost:8090/addUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            showPopup("✅ Thank you for contacting Ephorsys!<br>We’ve received your details and will get back to you shortly.", "green");
            document.getElementById("contactForm").reset();
        } else if (response.status === 400) {
            showPopup("⚠️ Email already exists. Please try another email.", "red");
        } else {
            showPopup("❌ Something went wrong. Please try again later.", "red");
        }
    } catch (error) {
        console.error("Error:", error);
        showPopup("⚠️ Failed to connect to the server.", "red");
    }
});

// Function to show popup
function showPopup(message, color) {
    // Create popup container
    const popup = document.createElement("div");
    popup.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            padding: 25px 40px;
            text-align: center;
            font-size: 18px;
            color: ${color};
            z-index: 9999;
            animation: fadeIn 0.3s ease;
        ">
            ${message}
            <br><br>
            <button id="closePopup" style="
                padding: 8px 18px;
                border: none;
                background: ${color};
                color: white;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            ">OK</button>
        </div>
    `;

    document.body.appendChild(popup);

    // Close popup on button click
    document.getElementById("closePopup").addEventListener("click", () => {
        popup.remove();
    });
}
