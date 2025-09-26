<script lang="ts">
  import { SendHorizontal } from "@lucide/svelte";

  let isFocused = $state(false);
</script>

<div class="send-box-container">
  <input
    class="message-writer"
    aria-label="Type a message"
    placeholder="Write a message..."
    type="text"
    onfocus={() => {
      isFocused = true;
    }}
    onblur={() => {
      isFocused = false;
    }}
  />
  <button
    class={`send-icon ${isFocused && "focus-send-icon"}`}
    aria-label="Send message"
  >
    <SendHorizontal />
  </button>
</div>

<style>
  .send-box-container {
    width: 85%;
    margin: 8px auto 16px auto;
    position: relative;
  }
  .message-writer {
    background-color: var(--purple-09);

    border-radius: 20px;
    border: none;
    box-shadow: rgba(255, 255, 255, 0.15) 2px 2px 4px;
    box-sizing: border-box;
    color: white;
    display: block;
    height: 40px;
    font-size: 16px;
    overflow: hidden;
    padding: 8px 40px 8px 16px;
    width: 100%;
  }

  .message-writer:focus,
  .message-writer:active {
    outline: none;
  }

  .send-icon {
    display: block;
    background-color: transparent;
    border: none;
    color: white;
    position: absolute;
    right: 4px;
    padding: 0;
    top: calc(50% + 4px / 2);
    transform: translate(-50%, -50%);
  }
</style>
