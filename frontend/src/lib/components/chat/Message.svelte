<script lang="ts">
  import type { MessageContent } from "../../../types/chat";
  let { type, content }: MessageContent = $props();
</script>

<div class={`message-item ${type === "user" ? "user-msg" : "sender-msg"}`}>
  <div
    class="message"
    style={`background-color: ${type === "user" ? "var(--purple-08)" : "var(--black-08)"};`}
  >
    <p>{content}</p>
  </div>
</div>

<style>
  .message-item {
    display: flex;
    margin: 16px 0;
  }

  .user-msg {
    justify-content: flex-end;
  }

  .sender-msg {
    justify-content: flex-start;
  }

  .message {
    padding: 0.5em 1.3em;
    border-radius: 20px;
    max-width: 70%;
    text-wrap: wrap;
  }
</style>
