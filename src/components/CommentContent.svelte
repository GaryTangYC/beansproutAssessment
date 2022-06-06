<script>
   import CommentBox from './CommentBox.svelte';
   import Card from './Card.svelte'
    import { allComments, currentUser } from "./store.js";
    // export let comment

</script>


<div class='content'>
  {#each $allComments as comment (comment.id)}
    <CommentBox {comment} />

    <br>
    {/each}
  </div>

<style>
  .content {
    display: grid;
    grid-gap: 1em;
  }
</style>