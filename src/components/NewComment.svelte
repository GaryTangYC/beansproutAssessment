<script>
    import { createEventDispatcher } from "svelte";
    import { allComments, currentUser } from "./store";
    import SendButton from "../common/SendButton.svelte";
    import Photo from "../common/Photo.svelte";
    import NewText from "../common/NewText.svelte";

    const dispatch = createEventDispatcher();
    export let replyingTo = "";

    let userComment;

    function addCommentToStore() {
        // const randomId =
        const userData = {
            id: Date.now(),
            content: userComment,
            createdAt: "1 minute ago",
            score: 0,
            user: currentUser,
            replies: [],
        };

        if (replyingTo) {
            userData.replyingTo = replyingTo;
        }

        dispatch("addCommentToStore", userData);
        userComment = ""; // Clear the textarea
    }
</script>

<style>
    .new-comment {
        margin-top: 1.5em;
        border-radius: 5px;
        padding: 1.5em;
        background-color: hsl(0, 0%, 100%);
        font-family: "Rubik", sans-serif;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .form {
        flex-basis: 90%;
    }

    .photo {
        align-items: center;
        justify-content: space-between;
    }

    .text {
        margin-left: 20px;
    }

    .button {
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (min-width: 768px) {
        form {
            display: flex;
            align-items: flex-start;
        }
    }
</style>

<div class="new-comment">
    <!-- <div class="container"> -->
    <!-- Image component comes first because of the flexbox used at desktop screens -->

    <Photo class="photo" src={currentUser.image.png} />

    <form class="form" action="" on:submit|preventDefault={addCommentToStore}>
        <NewText class="text" placeholder="Add a comment..." bind:text={userComment} />

        <SendButton class="button" />
    </form>
    <!-- </div> -->
</div>
