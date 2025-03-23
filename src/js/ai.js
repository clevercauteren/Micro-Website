// Function to parse Markdown-like syntax
function parseMarkdown(text) {
    // Replace *text* with <strong>text</strong> for bold
    return text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
}

async function askMistral(userMessage) {
    const chatHistory = document.getElementById("chatHistory");
    const inputBox = document.getElementById("userInput");
    const sendButton = document.getElementById("send-button");

    if (userMessage.trim() === "") {
        const errorMessage = document.createElement("div");
        errorMessage.className = "chat-bubble ai-response";
        errorMessage.textContent = "Please enter a message first!";
        chatHistory.appendChild(errorMessage);
        return;
    }

    // ⏳ Disable input and update the button
    inputBox.readOnly = true;
    sendButton.innerText = "Generating...";
    sendButton.disabled = true;

    // Append user message to chat history
    const userMessageElement = document.createElement("div");
    userMessageElement.className = "chat-bubble user-message";
    userMessageElement.textContent = userMessage;
    chatHistory.appendChild(userMessageElement);

    // Scroll to the bottom after user message is added
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Add loading animation for AI response
    const loadingElement = document.createElement("div");
    loadingElement.className = "chat-bubble ai-response loading-animation";

    const spinner = document.createElement("div");
    spinner.className = "spinner"; // Ensure the spinner class is added
    loadingElement.appendChild(spinner);

    chatHistory.appendChild(loadingElement);

    // Scroll to the bottom after loading animation is added
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Collect the full chat history
    const chatMessages = Array.from(chatHistory.children)
        .map((message) => {
            const isUserMessage = message.classList.contains("user-message");
            const role = isUserMessage ? "User" : "AI";
            return `${role}: ${message.textContent.trim()}`;
        })
        .join("\n");

    try {
        const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer HSLCZmOYODm8hW0fAfz2TdIYSpdMZYdw" // 🔴 Replace with a secure method!
            },
            body: JSON.stringify({
                model: "mistral-large-2411",
                messages: [
                    { role: "system", content: "de vragen die worden gesteld zijn altijd door leerlingen/toekomstige leerlingen van de school GTIbeveren (Gemeentelijk Technisch Instituut Beveren), de richting waarvoor jijj gebruikt word is ADB (Applicatie- en Data- Beheer). de richting specifieke vakken bevatten: Applicatie beheer (Leren werken met bepaald applicaties), Programmeren en Databeheer (Leren programeren in C# en later in het jaar databases maken en aanspreken), Webdesign(Websites leren maken op basis van HTML, CSS en hier en daar een heel klein beetje Js) en computer systemen (de werking van computers leren op hardware niveau en ook op software niveau met bijhoerende praktijk opdrachten). Deze informatie mag alleen gegeven worden als er achter gevraagd word." }, // Ensure the context
                    { role: "system", content: "Antwoord altijd in het Nederlands." }, // Ensure Dutch responses
                    { role: "system", content: "Chat-History:\n" + chatMessages },
                    { role: "user", content: userMessage }
                ],
            })
        });

        const data = await response.json();
        console.log(data); // Debugging

        // Remove loading animation
        chatHistory.removeChild(loadingElement);

        const aiResponseElement = document.createElement("div");
        aiResponseElement.className = "chat-bubble ai-response";

        if (data.choices) {
            // Parse the AI's response for Markdown-like syntax
            aiResponseElement.innerHTML = parseMarkdown(data.choices[0].message.content);
        } else {
            aiResponseElement.textContent = "Error: Invalid response from API.";
        }

        chatHistory.appendChild(aiResponseElement);

        // No scrolling here for AI response
    } catch (error) {
        console.error("API Error:", error);

        // Remove loading animation
        chatHistory.removeChild(loadingElement);

        const errorResponseElement = document.createElement("div");
        errorResponseElement.className = "chat-bubble ai-response";
        errorResponseElement.textContent = "API request failed. Check console.";
        chatHistory.appendChild(errorResponseElement);
    }

    // ✅ Reset the UI after the response
    inputBox.readOnly = false;
    sendButton.innerText = "Send";
    sendButton.disabled = false;
}

// Modify sendClicked to remove sound
function sendClicked(userInput) {
    if (!userInput.trim()) return;

    askMistral(userInput);

    // Clear input field
    document.getElementById("userInput").value = "";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendClicked(document.getElementById("userInput").value);
    }
}

let hasPrompted = false; // Flag to track if the prompt has been sent

// Show the tooltip
function showTooltip() {
    console.log("Tooltip function called"); // Debugging
    const tooltip = document.getElementById("aiTooltip");
    const tooltipShown = localStorage.getItem("tooltipShown");

    // Show the tooltip only if it hasn't been dismissed and the chatbot is not open
    if (tooltipShown) {
        setTimeout(() => {
            const chatModal = document.getElementById("chatModal");
            if (chatModal.style.display !== "flex") {
                console.log("Showing tooltip for the first time"); // Debugging
                tooltip.style.display = "flex";

                // Start repeating the tooltip every 10 seconds
                setInterval(() => {
                    if (chatModal.style.display !== "flex") {
                        console.log("Repeating tooltip every 10 seconds"); // Debugging
                        tooltip.style.display = "flex";
                    }
                }, 60000); // Repeat every 10 seconds
            }
        }, 2000); // Initial delay of 2 seconds
    }
}

// Hide the tooltip and mark it as dismissed
function hideTooltip() {
    const tooltip = document.getElementById("aiTooltip");
    tooltip.style.display = "none";

    // Store in localStorage to ensure it doesn't show again
    localStorage.setItem("tooltipShown", "true");
}

// 🎤 Open the chat
function openModal() {
    document.getElementById("chatModal").style.display = "flex";
    document.getElementById("overlay").style.display = "block";

    // Hide the tooltip if the chat is opened
    hideTooltip();

    if (!hasPrompted) {
        let promptMessage = "Stel jezelf kort voor en vertel mij meer over de richting Applicatie- en Data-beheer in GTI Beveren.";
        askMistral(promptMessage);
        hasPrompted = true; // Set the flag to true after the first prompt
    }
}

// ❌ Close the chat
function closeModal() {
    document.getElementById("chatModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Call the tooltip function when the page loads
window.onload = showTooltip;
