<script>
	import { goto } from '$app/navigation';
  export let userId;

  async function handleClick() {
    try {
      const response = await fetch(`https://chat-service.svc.beta.tori.fi/chatbot?userId=${userId} `, {
        method: 'DELETE'
        })
        if (!response.ok) {
          throw new Error('Failed to delete');
        }
        // Clear the chatbox by removing all message elements
        const chatContainer = document.getElementById('chatbot-conversation');
        chatContainer.innerHTML = "";
        goto('/');

      }catch (error) {
        console.error(error);
      }
  }
</script>

<button class="clear-btn"
on:click={handleClick}>Clear & Leave</button>


