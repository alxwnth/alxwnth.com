<script lang="ts">
  import { onMount } from "svelte";

  let time = $state(new Date().toLocaleTimeString());

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
  };

  onMount(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="clock">{time}</div>

<style>
  .clock {
    padding: 6px;
    border: 2px solid;
    border-color: var(--primary-darker) var(--primary-light)
      var(--primary-light) var(--primary-darker);
    cursor: default;
  }
</style>
