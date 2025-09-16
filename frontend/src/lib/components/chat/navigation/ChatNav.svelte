<script lang="ts">
  import ChatNavItem from "./ChatNavItem.svelte";
  import { Plus } from "@lucide/svelte";

  const messages: Number[] = [1, 2, 3, 4];
</script>

<div class="navigation">
  <ol class="chat-list">
    {#if !!!messages || messages.length == 0}
      <p>No messages found</p>
    {:else}
      {#each [1, 2, 3, 4] as chat}
        <li><ChatNavItem /></li>
      {/each}
    {/if}
  </ol>
  <button class="add-chat-btn"><Plus /></button>
</div>

<style>
  .navigation {
    position: relative;
    height: 100%;
  }

  .chat-list {
    height: 100%;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .add-chat-btn {
    background-color: var(--blue-05);
    border: none;
    border-radius: 50%;
    bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 4px;
    display: block;
    height: 50px;
    width: 50px;
    position: absolute;
    right: 12px;
    transition: all 0.2s ease-in;
  }

  .add-chat-btn:hover {
    background-color: var(--blue-04);
    scale: 1.05;
  }
</style>
