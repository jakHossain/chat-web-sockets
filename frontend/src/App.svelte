<script lang="ts">
  import Chat from "./lib/components/chat/Chat.svelte";
  import "./styles/typography.css";
  import "./styles/colors.css";
  import "./app.css";
  import { loadUsers } from "$lib/util/mockApi";
  loadUsers();
</script>

<main>
  <Chat />
</main>
