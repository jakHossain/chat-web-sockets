<div class="chat-item">
  <img
    class="chat-icon"
    src="https://dummyimage.com/40x40.png?text=Chat"
    alt=""
  />
  <div class="content-preview">
    <h4>Chat name</h4>
    <p class="message-preview">
      Preview of last chat message long message can go here and here and here
    </p>
  </div>
</div>

<style>
  .chat-item {
    align-items: center;
    background-color: var(--blue-08);
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    gap: 8px;
    padding: 8px;
    position: relative;
    margin: 4px 0;
    transition: background-color 300ms ease-out;
  }

  .chat-item:hover {
    background-color: var(--blue-07);
  }

  .chat-icon {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }

  .content-preview {
    flex-grow: 1;
    min-width: 0;
  }

  .message-preview {
    overflow: hidden;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }
</style>
