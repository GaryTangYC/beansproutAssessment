<script>
  export let votes = 0;
</script>

<div class="votes">
  <!-- Increase the votes -->
  <button on:click={() => votes++}>
    <img src='../../images/icon-plus.svg'>
  </button>
    <!-- display the votes -->
  <span>{votes}</span>
  <!-- Decrease the votes -->
    <button on:click={() => votes--} >
    <img src='../../images/icon-minus.svg'>  
  </button>

</div>

<style>
  .votes {
    padding: 1.2em 1.5em;
    display: flex;
    gap: 1.5em;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: hsl(228, 33%, 97%);
    grid-area: vote;
  }
  .votes span {
    font-size: 1.45rem;
  }
  img {
    width: 10px;
    height: 10px;
    
    
  }
  .votes button {
    border: none; border-width : 0; border : 0
  }

  @media screen and (min-width: 768px) {
    .votes {
      flex-direction: column;
      height: fit-content;
      align-self: start;
    }
  }
</style>
