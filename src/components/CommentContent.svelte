<script>
   import CommentBox from './CommentBox.svelte';
   import Card from './Card.svelte'
   import { allComments, currentUser } from "./store.js";
   import Replies from './Replies.svelte';
    // export let comment

</script>

<!-- Generate each comment with CommentBox -->
<div class='content'>
  {#each $allComments as comment (comment.id)}
    <CommentBox {comment} />
    <br>
    {#if comment.replies != null}
      <Replies replies={comment.replies} />
    {/if}
    {/each}
  </div>

<style>
  .content {
    display: grid;
    grid-gap: 1em;
  }
</style>