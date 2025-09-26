<div class="chat-header">
  <div class="icon">
    <img src="https://dummyimage.com/200x200.png" alt="" />
  </div>
  <h4 class="chat-name">Chat title</h4>
</div>

<style>
  .chat-header {
    align-items: center;
    background-color: var(--blue-10);
    display: flex;
    gap: 20px;
    padding: 1.2em 1em;
  }

  .icon {
    border-radius: 50%;
    height: 40px;
    overflow: hidden;
    min-width: 40px;
    width: 40px;
  }
  .icon img {
    width: 100%;
    height: 100%;
  }

  .chat-name {
    text-wrap: nowrap;
    overflow: hidden;
  }
</style>
