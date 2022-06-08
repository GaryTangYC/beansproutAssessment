<script>
import Card from "./Card.svelte";
import CommentText from "./CommentText.svelte";
import CommentContent from "./CommentContent.svelte";
import UserDetails from "./UserDetails.svelte";
import {allComments, currentUser} from './store'
import ReplyButton from '../common/ReplyButton.svelte'
import DeleteButton from "../common/DeleteButton.svelte";
import EditButton from "../common/EditButton.svelte";
import Voting from "../common/Voting.svelte";
export let comment

</script>


<div class="comment-box">
    <div class ="vote">
  <Voting votes={comment.score}/>
  </div>
  <div class = "user">
  <UserDetails user={comment.user} datePost={comment.createdAt} />
  <CommentText content={comment.content} />
  </div>


      <!-- Generate icons based on div class -->
      {#if comment.user.username != currentUser.username}
      <div class="button-icon">
      <ReplyButton/>
      </div>
      {:else}
      <div class="button-icon">
      <DeleteButton/> 
      <EditButton/>
      </div>
      {/if}
      
	</div>



<style>
	.comment-box {
		border-radius: 7px;
		padding: 2em;
		background-color: rgb(255,255,255);
		display: grid;
		grid-gap: 1em;
		/* justify-content: space-between;
		align-items: center;*/
      display: flex;
      position: relative
	}
  .vote {

  align-items: center;
  justify-content: space-between;
  }
	.button-icon {
		/* grid-area: icon; */
    /* margin-top: 8px;
    position: absolute;
    top: 20px;
    right: 0px; */
  display: flex;
  justify-content: space-between;
  align-items: center;

	}
	@media screen and (min-width: 768px) {
		.comment-box {
			grid-template-areas:
				"voting user-info icon"
				"voting text text"
				"voting text text";
		}
		.button-icon {
			/* grid-area: icon; */
			justify-self: flex-end;
      display: inline;

		}
	}
</style>
