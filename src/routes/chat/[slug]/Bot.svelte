<script>
import {fetchReq} from "$lib/fetchRequest.js"
import {createChatBubble} from "$lib/createChatBubble.js"
import { page } from '$app/stores';
import { onMount } from 'svelte';
import UserPanel from '../../../components/UserPanel.svelte';

$: userId = $page.params.slug;
let userInput = ""


  onMount(async () => {
   const chatContainer = document.getElementById('chatbot-conversation');
    const welcomeMsg = await fetchWelcomeMsg(userId);
    const assistantObj = { role: "assistant", message: welcomeMsg };
   createChatBubble(chatContainer, assistantObj);
   
  });

async function fetchWelcomeMsg(id) {
try {
  const res = await fetch(`https://chat-service.svc.beta.tori.fi/chatbot?userId=${id}`);
  const data = await res.json();

if(!data){
  throw new Error("No data available");
}
  return data.message;
} catch (error) {
  console.error(error);
}

}

  async function handleKeyDown(e) {
  if (e.key === "Enter") {
    if (e.shiftKey) {
      return;

    } else {
      handleSubmit(e);
    }
  } return;
}

async function handleSubmit(e){
  e.preventDefault();
  const chatContainer = document.getElementById('chatbot-conversation');

  // Check if userInput has content before proceeding
  if (userInput.trim() == ""){ return; } 

  const userObj = { role: "user", message: userInput, userId: userId };
  createChatBubble(chatContainer, userObj);
  userInput = "";

  
  // Display loading state
  const loadingObj = { role: "assistant", message: "..."};
  createChatBubble(chatContainer, loadingObj);
      
  try{
    const res = await fetchReq(userObj);
    if(!res){
      throw new Error("Failed to fetch data");
    }

    // Remove loading state
    chatContainer.removeChild(chatContainer.lastChild);

  const assistantObj = { role: "assistant", message: res.message };
  createChatBubble(chatContainer, assistantObj);

  }catch (error) {
    chatContainer.removeChild(chatContainer.lastChild);
    createChatBubble(chatContainer, { role: "assistant", message: "Something went wrong. I couldn't process your request." })
  }
}

</script>

<UserPanel userId={userId} />

  <section class="chatbot-container">
    <div class="chatbot-conversation-wrapper">
      <div class="chatbot-conversation-container" id="chatbot-conversation">
      </div>
    </div>
    <form id="form" class="chatbot-input-container" on:submit={handleSubmit} >
      <textarea name="user-input" type="text" id="user-input" placeholder="Your inquiry..." bind:value={userInput} on:keydown={handleKeyDown} autofocus/>
      <button type="submit" class="chatbot-send-btn">Send</button>
    </form>
  </section>

