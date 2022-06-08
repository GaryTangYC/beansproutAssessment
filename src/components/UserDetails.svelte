<script>
  import { currentUser } from "./store.js";
  import Photo from '../common/Photo.svelte'

  export let datePost = "today";
  export let user;
</script>

<div class="user-details">
<!-- Component 1: Photo -->
  <Photo src={user.image.png} />
<!-- Component 2: Comment Poster Name -->
 {#if user.username === currentUser.username}
    <!-- Add a 'you' tag if its the current user -->
    <p class="userName">
      <strong>{user.username}</strong> <span class="tag">you</span>
    </p>
  {:else}
    <p class="userName"><strong>{user.username}</strong></p>
  {/if}

<!-- Component 3: datePost -->
<p class="datePost">{datePost}</p>

</div>

<style>
  .user-details {
    display: flex;
    align-items: center;
    grid-area: user-info;
  }

  .userName {
    margin-inline: 1em 1em;
    font-size: 1.5rem;
    color: rgb(54, 66, 81);
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
  .tag {
    display: inline-block;
    background-color: rgb(84, 87, 182);
    color: rgb(255, 255, 255);
    font-weight: 500;
    font-size: 1.25rem;
    padding: 0.1em 0.3em;
    border-radius: 2px;
  }
  .datePost {
    color: rgb(54,66,81);
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
  }
</style>
