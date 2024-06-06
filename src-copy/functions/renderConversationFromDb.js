import { conversationInDB } from "./DB";
import { createChatBubble } from "./createChatBubble";
import { get } from "firebase/database";

export async function renderConversationFromDb() {
  try {
    const snapshot = await get(conversationInDB);
    if (snapshot.exists()) {
      const conversationArr = Object.values(snapshot.val());

      conversationArr.forEach((conversation) => {
        const role = conversation.role;
        createChatBubble(conversation.content, role);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
