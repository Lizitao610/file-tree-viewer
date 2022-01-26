<svelte:options tag="file-tree" />

<script lang="ts">
  export let name: string = 'world';
</script>

<div>
  <h4 class="FileTree">Hello {name}!</h4>
</div>

<style>
  .FileTree {
    color: aqua;
  }
</style>
