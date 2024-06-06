import { getDatabase, ref } from "firebase/database";
// import { process } from "./env.js";
import { initializeApp } from "firebase/app";

export const appSettings = {
  databaseURL:
    "https://openai-chatbot-30ab0-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const DB = getDatabase(app);
export const conversationInDB = ref(DB);
