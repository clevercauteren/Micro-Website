async function askMistral(userMessage) {
    let responseBox = document.getElementById("response");
    let inputBox = document.getElementById("userInput");
    let sendButton = document.getElementById("send-button");

    if (userMessage.trim() === "") {
        responseBox.innerText = "Please enter a message first!";
        return;
    }

    // ⏳ Zet input op readonly en update de knop
    inputBox.readOnly = true;
    sendButton.innerText = "Generating...";
    sendButton.disabled = true;

    try {
        let response = await fetch("https://api.mistral.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer HSLCZmOYODm8hW0fAfz2TdIYSpdMZYdw" // 🔴 Vervang door een veilige methode!
            },
            body: JSON.stringify({
                model: "mistral-medium",
                messages: [{ role: "user", content: userMessage }],
            })
        });

        let data = await response.json();
        console.log(data); // Debugging

        if (data.choices) {
            responseBox.innerText = data.choices[0].message.content;
        } else {
            responseBox.innerText = "Error: Invalid response from API.";
        }
    } catch (error) {
        console.error("API Error:", error);
        responseBox.innerText = "API request failed. Check console.";
    }

    // ✅ Reset de UI na de response
    inputBox.readOnly = false;
    sendButton.innerText = "Send";
    sendButton.disabled = false;
}

// 🚀 Stuur bericht als op de knop wordt geklikt
function sendClicked(userInput) {
    let userMessage = document.getElementById("userInput").value;
    askMistral(userMessage);
}

// 🚀 Stuur bericht als Enter wordt ingedrukt
function handleKeyPress(event) {
    if (event.key === "Enter") { // Gebruik de moderne key-check
        event.preventDefault(); // Voorkom dat het formulier submit
        sendClicked(document.getElementById("userInput").value);
    }
}

// 🎤 Open de chat en stuur automatisch een prompt
function openModal() {
    document.getElementById("chatModal").style.display = "flex";
    document.getElementById("overlay").style.display = "block";

    let promptMessage = "Stel jezelf kort voor en vertel mij meer over de richting Applicatie- en Data-beheer in GTI Beveren.";
    // document.getElementById("userInput").value = promptMessage;
    askMistral(promptMessage);
}

// ❌ Sluit de chat
function closeModal() {
    document.getElementById("chatModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
