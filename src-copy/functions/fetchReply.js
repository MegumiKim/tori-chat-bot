import { fetchReq } from "./fetchRequest";
import { conversationInDB } from "./DB";
import { push, get } from "firebase/database";
import { instructionObj } from "./configurations";
import { createChatBubble } from "./createChatBubble";

export async function fetchReply() {
  try {
    // Get snapshot from the database
    const snapshot = await get(conversationInDB);
    if (snapshot.exists()) {
      const conversationArr = Object.values(snapshot.val());
      conversationArr.unshift(instructionObj);

      // Fetch response from openaiAPI
      const res = await fetchReq(conversationArr);

      if (res) {
        //store response in DB
        await push(conversationInDB, res);
        createChatBubble(res.content, "assistant");
      }
    } else {
      console.log("No data available");
    }
  } catch (err) {
    console.error("Error fetching or pushing data", err);
  }
}
