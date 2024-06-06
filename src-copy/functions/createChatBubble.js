const chatbotConversation = document.getElementById("chatbot-conversation");
const userInput = document.getElementById("user-input");

export function createChatBubble(input, role) {
  const newSpeechBubble = document.createElement("div");
  newSpeechBubble.classList.add("speech", `speech-${role}`);
  chatbotConversation.appendChild(newSpeechBubble);
  newSpeechBubble.textContent = input;
  userInput.value = "";
  chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
}
