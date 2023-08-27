document.addEventListener("DOMContentLoaded", function() {
  const chatMessages = document.getElementById("chat-messages");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  
  sendButton.addEventListener("click", sendMessage);
  messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = messageInput.value.trim();
    if (message === "") {
      return;
    }

    appendUserMessage(message);
    messageInput.value = "";

    // Send the message to the API and receive response
    const response = simulateChatBotResponse(message);

    setTimeout(function() {
      appendBotMessage(response);
    }, 1000);
  }

  function appendUserMessage(message) {
    const userBubble = document.createElement("div");
    userBubble.classList.add("bubble", "user-bubble", "animate__animated", "animate__fadeIn");
    userBubble.innerText = message;
    chatMessages.appendChild(userBubble);
  }

  function appendBotMessage(message) {
    const botBubble = document.createElement("div");
    botBubble.classList.add("bubble", "bot-bubble", "animate__animated", "animate__fadeIn");
    botBubble.innerText = message;
    chatMessages.appendChild(botBubble);
  }

  function simulateChatBotResponse(message) {
    // Replace this line with API call to OpenAI API
    // Example: return fetch('https://api.openai.com/chat', { method: 'POST', body: message })
    //           .then(response => response.json())
    //           .then(data => data.response)
    //           .catch(error => console.error(error));

    // Simulating a random chat bot response for demonstration purposes
    const botResponses = ["Hello!", "How can I assist you?", "I'm here to help!", "What can I do for you?"];
    const randomIndex = Math.floor(Math.random() * botResponses.length);
    return botResponses[randomIndex];
  }
});
