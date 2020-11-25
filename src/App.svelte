<script lang="ts">
  import GlobalStyles from "./GlobalStyles.svelte";
  import { onMount } from "svelte";
  let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="bg-gray-300">Hello World, {count}</div>
