import { clearConversation } from "./clearConversation";
import { instructionObj } from "./configurations";
const chatbotConversation = document.getElementById("chatbot-conversation");

export function createInput(type, title) {
  // Create the container div
  const div = document.createElement("div");
  div.className = "radio-item";

  // Create the input element
  const input = document.createElement("input");
  input.type = "radio";
  input.id = type;
  input.name = "assistant-type";
  input.value = type;
  // Initially, set one input as checked if needed
  // For example, you might check the first one by setting this conditionally outside this function
  // input.checked = true;

  // Create the label element
  const label = document.createElement("label");
  label.setAttribute("for", type);

  // Create the image element
  const img = document.createElement("img");
  img.src = `images/${type}.jpg`;
  img.className = "logo";

  // Create the text div inside label
  const textDiv = document.createElement("div");
  textDiv.textContent = title;

  // Append img and div to label
  label.appendChild(img);
  label.appendChild(textDiv);

  // Add an onchange event listener to the input
  input.addEventListener("change", (e) => handleChange(e));

  // Append input and label to the div
  div.appendChild(input);
  div.appendChild(label);

  // Return the complete div
  return div;
}

function handleChange(e) {
  clearConversation();

  const assistantType = e.target.value;

  switch (assistantType) {
    case "friend":
      instructionObj.content =
        "You are the user's best friend. Speak casually and respond in short sentences.";

      chatbotConversation.innerHTML = `
      <div class="speech speech-assistant">Hey, what's up?</div>
      `;
      break;
    case "coach":
      instructionObj.content =
        "You are a grumpy, sarcastic and rude coach. Answer your's input in curt manner in short sentences.";

      chatbotConversation.innerHTML = `
      <div class="speech speech-assistant">Do not bother me.</div>
      `;
      break;

    case "therapist":
      instructionObj.content =
        "You are a empathetic therapist. Offer the user understanding and emotional comfort.";

      chatbotConversation.innerHTML = `
      <div class="speech speech-assistant">How are you feeling today?</div>
      `;
      break;

    default:
      break;
  }
}
