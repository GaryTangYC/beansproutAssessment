<script>
  export let src;
  export let alt = "photo";
  export let isDefault = true;
</script>

<img {src} {alt} class:size-default={isDefault} />

<style>
  img {
    max-width: 100%;
    grid-area: image;
  }
  .size-default {
    width: 75px;
    height: 75px;
  }
</style>
