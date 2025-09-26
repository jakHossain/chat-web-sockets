<script>
  import ChatNav from "./navigation/ChatNav.svelte";
  import ChatBody from "./ChatBody.svelte";
  import { Menu } from "@lucide/svelte";
  import { writable } from "svelte/store";

  const showMobileNav = writable(false);
</script>

<div class="chat-app">
  <header class="chat-header">
    <button
      class="mobile-menu-icon"
      onclick={() => {
        console.log("FSSE", $showMobileNav);
        showMobileNav.update((prev) => !prev);
      }}><Menu size={35} /></button
    >
    <h2>App</h2>
  </header>
  <div class="chat-frame">
    <ChatNav {showMobileNav} />
    <div class="chat-body-container">
      <ChatBody />
    </div>
  </div>
</div>

<style>
  .chat-app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .chat-header {
    background-color: var(--blue-07);
    padding: 8px 0;
    position: relative;
    text-align: center;
  }

  .mobile-menu-icon {
    background-color: transparent;
    border: none;
    color: white;
    display: none;
    left: 8px;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease-out;
  }

  .mobile-menu-icon:hover,
  .mobile-menu-icon:focus-visible {
    color: var(--blue-02);
    scale: 1.05;
  }
  .chat-frame {
    display: flex;
    flex: 1 1 0;
    min-height: 0;
    position: relative;
  }

  .chat-body-container {
    display: flex;
    background-color: var(--purple-10);
    height: 100%;
    flex: 1;
    flex-direction: column;
  }

  @media (max-width: 1000px) {
    .mobile-menu-icon {
      display: block;
    }
  }
</style>
