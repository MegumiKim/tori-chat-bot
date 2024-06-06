<script>
  import ClearBtn from "./ClearBtn.svelte";
  export let userId;

</script>



<div class="user-panel">
  <a href="/">
    <img src="/logo.png" alt="tori logo" id="logo">

  </a>
  <div>
    <p class="supportId">User ID: {userId}</p>

    <ClearBtn userId={userId}/>
  </div>
</div>