<script>
  import { currentUser } from "./store.js";
  import Photo from '../common/Photo.svelte'

  export let datePost = "today";
  export let user;
</script>

<div class="user-details">
<Photo src={user.image.png} />
<p class="datePost">{datePost}</p>

</div>

<style>
  .user-details {
    display: flex;
    align-items: center;
    grid-area: user-info;
  }

  .username {
    margin-inline: 0.5em 1.2em;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
    color: hsl(212, 24%, 26%);
  }
  .tag {
    display: inline-block;
    background-color: hsl(238, 40%, 52%);
    color: hsl(0, 0%, 100%);
    font-weight: 500;
    font-size: 1.25rem;
    padding: 0.1em 0.3em;
    border-radius: 2px;
  }
  .datePost {
    color: hsl(211, 10%, 45%);
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
  }
</style>
