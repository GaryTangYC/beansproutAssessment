<script>
    import CommentText from "./CommentText.svelte";
    import UserDetails from "./UserDetails.svelte";
    import { allComments, currentUser } from "./store";
    import ReplyButton from "../common/ReplyButton.svelte";
    import DeleteButton from "../common/DeleteButton.svelte";
    import EditButton from "../common/EditButton.svelte";
    import Voting from "../common/Voting.svelte";
    export let comment;
</script>

<style>
    .comment-box {
        border-radius: 7px;
        padding: 2em;
        background-color: rgb(255, 255, 255);
        display: flex;
        position: relative;
    }
    .vote {
        align-items: center;
        justify-content: space-between;
    }
    .button-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (min-width: 768px) {
        .button-container {
            justify-self: flex-end;
            display: flex;
        }
    }
    .content-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .content {
        flex-basis: 100%;
    }
</style>

<div class="comment-box">
    <div class="vote">
        <Voting votes={comment.score} />
    </div>
    <div class="content">
        <div class="content-top">
            <UserDetails user={comment.user} datePost={comment.createdAt} />
            <!-- Generate icons based on div class -->
            {#if comment.user.username != currentUser.username}
                <div class="button-container">
                    <ReplyButton />
                </div>
            {:else}
                <div class="button-container">
                    <DeleteButton />
                    <EditButton />
                </div>
            {/if}
        </div>
        <div class="content-btm">
            <CommentText content={comment.content} />
        </div>
    </div>
</div>
