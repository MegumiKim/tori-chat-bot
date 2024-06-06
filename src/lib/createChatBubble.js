export function createChatBubble(container, inputObj) {
  const { message, role } = inputObj;

  const wrapper = document.createElement("div");
  wrapper.classList.add("speech-wrapper", `speech-wrapper-${role}`);

  const messageElement = document.createElement("div");
  messageElement.classList.add("speech", `speech-${role}`);

  messageElement.textContent = message;
  wrapper.appendChild(messageElement);
  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}
