<script>
    export let content = "";
    export let isReplying = "";
</script>

<style>
    .comment {
        color: rgb(103, 114, 126);
        font-size: 1.5rem;
        line-height: 1.5;
    }
    .comment strong {
        font-weight: 500;
        color: rgb(84, 87, 182);
    }

    @media screen and (min-width: 768px) {
        .comment {
            font-size: 1.6rem;
            line-height: 1.6;
        }
    }
</style>

{#if isReplying}
    <p class="comment"><strong>@{isReplying}</strong> {content}</p>
{:else}
    <p class="comment">{content}</p>
{/if}
