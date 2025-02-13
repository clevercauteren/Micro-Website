// Function to send a request to Mistral AI
async function askMistral(userMessage) {
    let responseBox = document.getElementById("response");

    if (userMessage.trim() === "") {
        responseBox.innerText = "Please enter a message first!";
        return;
    }

    try {
        let response = await fetch("https://api.mistral.ai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer HSLCZmOYODm8hW0fAfz2TdIYSpdMZYdw" // Replace with your actual API key
            },
            body: JSON.stringify({
                model: "mistral-medium", // AI model to use
                messages: [{ role: "user", content: userMessage }], // User message
            })
        });

        let data = await response.json();
        console.log(data); // Debugging output

        if (data.choices) {
            responseBox.innerText = data.choices[0].message.content;
        } else {
            responseBox.innerText = "Error: " + JSON.stringify(data);
        }
    } catch (error) {
        console.error("API Error:", error);
        responseBox.innerText = "API request failed. Check console.";
    }
}

function sendClicked(userInput)
{
        let userMessage = document.getElementById("userInput").value;
        // let userMessage = userInput;
        askMistral(userMessage);
    
}

// Function to detect Enter key press in the input field
function handleKeyPress(event) {
    if (event.keyCode === 13) { // 13 is the Enter key code
        let userMessage = document.getElementById("userInput").value;
        askMistral(userMessage); // Call the chatbot function
    }
}

// Function to open the modal (chat window)
function openModal() {
    document.getElementById("chatModal").style.display = "flex";
    document.getElementById("overlay").style.display = "block"; // Show the overlay when modal is open

    // Automatically send the prompt when the modal opens
    let promptMessage = "stel mij jezelf voor in één korte zin!";
    document.getElementById("userInput").value = promptMessage; // Set the input field to the prompt
    askMistral(promptMessage); // Send the prompt as a message to the AI
}

// Function to close the modal (chat window)
function closeModal() {
    document.getElementById("chatModal").style.display = "none";
    document.getElementById("overlay").style.display = "none"; // Hide the overlay when modal is closed
}
