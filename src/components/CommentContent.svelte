<script>
    import CommentBox from "./CommentBox.svelte";
    import { allComments, currentUser } from "./store.js";
    import Replies from "./Replies.svelte";
    import NewComment from "./NewComment.svelte";
    // export let comment

    function addComment(event) {
        $allComments = [...$allComments, event.detail];
    }

    var listCommentByLikes = () => {};

    let commentArray = [`${allComments}`];

    commentArray.sort((a, b) => {
        a.comments.score - b.comments.score;
        console.log(commentArray);
    });
</script>

<style>
    .content {
    }
</style>

<!-- Generate each comment with CommentBox -->
<div class="content">
    {#each $allComments as comment (comment.id)}
        <CommentBox comment={comment} />
        <br />
        {#if comment.replies != null}
            <Replies replies={comment.replies} />
        {/if}
    {/each}
</div>
<!-- Comment box for new comments -->
<div class="new-comment">
    <NewComment on:addCommentToStore={addComment} />
</div>
