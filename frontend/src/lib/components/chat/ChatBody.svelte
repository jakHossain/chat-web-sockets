<script lang="ts">
  import ChatHeader from "./ChatHeader.svelte";
  import Message from "./Message.svelte";
  import type { MessageContent } from "../../../types/chat";
  import SendBox from "./SendBox.svelte";
  import { onMount } from "svelte";

  const fakemsg: MessageContent[] = Array.from({ length: 20 }, (v, i) => {
    return {
      type: i % 3 === 0 ? "user" : "sender",
      content: "Nulla est anim sunt labore ",
      timeStamp: new Date(),
    };
  });

  let messageContainer: HTMLDivElement | null = $state(null);

  onMount(() => {
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  });
</script>

<ChatHeader />

<div class="chat-body" bind:this={messageContainer}>
  <div class="message-body">
    {#each fakemsg as msg}
      <Message {...msg} />
    {/each}
  </div>
</div>
<SendBox />

<style>
  .chat-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
  }

  .message-body {
    width: 80%;
    margin: auto;
  }
</style>
