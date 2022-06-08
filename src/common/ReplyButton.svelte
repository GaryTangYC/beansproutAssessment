<script>

</script>

<button on:click>
  <img src='../../images/icon-reply.svg'>
  <span class="icon-name"><strong>Reply</strong></span>
</button>

<style>
  button {
    border: none;
    grid-area: icon;
    color: rgb(84,87,176);
    background-color: rgb(255, 255, 255);
    text-align: center;
    display: flex;
    align-items: center
  }
  .icon-name {
    font-size: 1.5rem;
    font-weight: 500;
  }

  img {
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    text-align: center;
    margin-right:10px;
  }
  .icon-name {
    display: inline-block;
    position: relative;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    button:hover,
    .icon-name:hover {
      cursor: pointer;
    }
    .icon-name:hover {
      color: rgb(84, 87, 182);
      transition: color 0.1s;
    }
  }
</style>
