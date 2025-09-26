<script lang="ts">
  import type { Readable, Writable } from "svelte/store";
  import { createMatchMediaState } from "../../../util/helpers";
  import ChatList from "./ChatList.svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicInOut, elasticInOut } from "svelte/easing";

  let { showMobileNav }: { showMobileNav: Writable<boolean> } = $props();
  const messages: number[] = [1, 2, 3, 4];

  const isMobile: Readable<boolean> = createMatchMediaState(
    "(max-width: 1000px)"
  );

  $effect(() => {
    if (!$isMobile) {
      //ensure mobile nav state is reset when no longer in mobile
      showMobileNav.set(false);
    }
  });
</script>

{#if $showMobileNav}
  <div class="nav-mobile-backdrop" transition:fade></div>
  <div
    class="chat-navigation-container-mobile"
    transition:fly={{ duration: 500, x: "-100%", easing: cubicInOut }}
  >
    <div class="nav-mobile">
      <ChatList {messages} />
    </div>
  </div>
{:else}
  <div class="chat-navigation-container-desktop">
    <div class="nav-desktop">
      <ChatList {messages} />
    </div>
  </div>
{/if}

<style>
  .chat-navigation-container-mobile,
  .chat-navigation-container-desktop {
    background-color: var(--blue-09);
    height: 100%;
    max-width: 400px;
  }

  .chat-navigation-container-mobile {
    display: none;
    z-index: 100;
    position: absolute;
  }

  .nav-mobile-backdrop {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .nav-mobile {
    z-index: 101;
  }

  .nav-desktop,
  .nav-mobile {
    height: 100%;
    position: relative;
  }

  @media (max-width: 1000px) {
    .chat-navigation-container-mobile {
      display: block;
    }

    .nav-desktop {
      display: none;
    }
  }
</style>
