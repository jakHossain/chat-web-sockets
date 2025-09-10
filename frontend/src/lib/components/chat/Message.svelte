<script lang="ts">
  import type { MessageContent } from "../../../types/chat";
  let { type, content, timeStamp }: MessageContent = $props();
</script>

<div class={`message-item ${type === "user" ? "user-msg" : "sender-msg"}`}>
  <div
    class="message"
    style={`background-color: ${type === "user" ? "var(--purple-08)" : "var(--black-08)"};`}
  >
    <p>{content}</p>
    <span class="timestamp-block">
      <p class="timestamp">
        {timeStamp.toLocaleTimeString("en-us", { timeStyle: "short" })}
      </p>
    </span>
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
    align-items: end;
    border-radius: 20px;
    display: flex;
    gap: 8px;
    max-width: 70%;
    padding: 0.5em 1.3em;
    text-wrap: wrap;
  }

  .timestamp-block {
    display: block;
  }
  .timestamp {
    color: var(--black-05);
    font-size: 14px;
    margin-bottom: -6px;
    text-wrap: nowrap;
  }
</style>
