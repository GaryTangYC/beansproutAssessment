<script>
    import CommentBox from "./CommentBox.svelte";
    export let replies;
</script>

<style>
    .reply {
        border-left: 2px solid hsl(223, 19%, 93%);
        padding-left: 5vw;
        margin-left: 2.5vw;
    }

    /* // Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        .reply {
            padding-left: 4vw;
            margin-left: 2.5vw;
        }
    }

    /* // Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
        .reply {
            padding-left: 3vw;
            margin-left: 1.5vw;
        }
    }
</style>

<div class="reply">
    {#each replies as reply (reply.id)}
        <CommentBox comment={reply} />
        <br />
    {/each}
</div>
