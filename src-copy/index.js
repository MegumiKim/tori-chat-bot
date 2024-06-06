import { push } from "firebase/database";
import { fetchReply } from "./functions/fetchReply";
import { clearConversation } from "./functions/clearConversation";
import { conversationInDB } from "./functions/DB";
import { createChatBubble } from "./functions/createChatBubble";
import { renderConversationFromDb } from "./functions/renderConversationFromDb";
import { createFieldSet } from "./functions/fieldset";

//Chat Bot
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.getElementById("user-input");

  push(conversationInDB, {
    role: "user",
    content: userInput.value,
  });

  createChatBubble(userInput.value, "user");
  fetchReply();
});

//Clear Button
document
  .getElementById("clear-btn")
  .addEventListener("click", () => clearConversation());

// renderConversationFromDb();

//Fieldset for assistant type
// const inputs = document.querySelectorAll("input[type = 'radio']");
// inputs.forEach((input) => {
//   input.addEventListener("change", console.log("changed"));
// });

createFieldSet();
