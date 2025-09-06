<script>
  import ChatNavItem from "./ChatNavItem.svelte";
</script>

<div class="navigation">
  <ol class="chat-list">
    {#each [1, 2, 3, 4] as chat}
      <li><ChatNavItem /></li>
    {/each}
  </ol>
</div>

<style>
  .chat-list {
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
