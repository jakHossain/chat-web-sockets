<script>
  import ChatNav from "./navigation/ChatNav.svelte";
  import ChatBody from "./ChatBody.svelte";
</script>

<div class="chat-frame">
  <div class="chat-navigation-container">
    <ChatNav />
  </div>
  <div class="chat-body-container">
    <ChatBody />
  </div>
</div>

<style>
  .chat-frame {
    display: flex;
    height: 100vh;
  }

  .chat-navigation-container {
    background-color: var(--blue-09);
    max-width: 400px;
    height: 100%;
  }

  .chat-body-container {
    display: flex;
    background-color: var(--purple-10);
    height: 100%;
    flex: 1;
    flex-direction: column;
  }
</style>
