<script lang="ts">
  import ChatHeader from "./ChatHeader.svelte";
  import Message from "./Message.svelte";
  import type { MessageContent } from "../../../types/chat";

  const fakemsg: MessageContent[] = [
    {
      type: "user",
      content: "Nulla est anim sunt labore ",
    },
    {
      type: "user",
      content:
        "Nulla est anim sunt labore sint anim officia sint quis voluptate.",
    },
    {
      type: "sender",
      content:
        "Nulla est anim sunt labore sint anim officia sint quis voluptate. Nulla est anim sunt labore sint anim officia sint quis voluptate. Nulla est anim sunt labore sint anim officia sint quis voluptate.",
    },
    {
      type: "sender",
      content:
        "Nulla est anim sunt labore sint anim officia sint quis voluptate.",
    },
  ];
</script>

<div class="chat-body">
  <ChatHeader />
  <div class="message-body">
    {#each fakemsg as msg}
      <Message {...msg} />
    {/each}
  </div>
  <div class="send-box-container"></div>
</div>

<style>
  .chat-body {
    height: 100%;
  }
</style>
