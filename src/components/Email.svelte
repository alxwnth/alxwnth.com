<script lang="ts">
  const email = "alxwnth@posteo.me";
  let visible = $state(false);
</script>

{#if visible}
  <a href="mailto:{email}">{email}</a>
{:else}
  <button onclick={() => (visible = true)}>[reveal]</button>
{/if}
