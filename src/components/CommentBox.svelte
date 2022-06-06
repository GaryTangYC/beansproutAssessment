<script>
import Card from "./Card.svelte";
import CommentText from "./CommentText.svelte";
import CommentContent from "./CommentContent.svelte";
import UserDetails from "./UserDetails.svelte";
import {allComments, currentUser} from './store'
export let comment

</script>


 <div class="comment-card">
  <UserDetails user={comment.user} datePost={comment.createdAt} />
  <CommentText content={comment.content} />
  <!-- {#each $allComments as comment (comment)}
   <div in:scale out:fade='{{ duration: 1000 }}' >
    console.log(comment)
     <comment/>
   </div>
   {/each} -->
 </div>



<style>
	.comment-card {
		border-radius: 7px;
		padding: 2em;
		background-color: hsl(0, 0%, 100%);
		display: grid;
		grid-gap: 1em;
		justify-content: space-between;
		align-items: center;
		grid-template-areas:
			"user-info user-info user-info"
			"text text text"
			"vote . update-reply";
	}
	.update-or-reply {
		grid-area: update-reply;
	}
	@media screen and (min-width: 768px) {
		.comment-card {
			grid-template-areas:
				"vote user-info update-reply"
				"vote text text"
				"vote text text";
		}
		.update-or-reply {
			grid-area: update-reply;
			justify-self: flex-end;
		}
	}
</style>
