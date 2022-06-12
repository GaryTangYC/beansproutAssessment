<script>
    export let src;
    export let alt = "photo";
    export let isDefault = true;
</script>

<style>
    img {
        max-width: 100%;
    }
    .size-default {
        width: 75px;
        height: 75px;
    }
</style>

<img src={src} alt={alt} class:size-default={isDefault} />
