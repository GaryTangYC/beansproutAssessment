<script>
</script>

<style>
    button {
        border: none;
        color: rgb(220, 108, 108);
        background-color: rgb(255, 255, 255);
        text-align: center;
        display: flex;
        align-items: center;
        margin-right: 10px;
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
        margin-right: 10px;
    }

    @media screen and (min-width: 768px) {
    }
</style>

<button class="action-button" on:click>
    <img src="../../images/icon-delete.svg" />
    <span class="icon-name"><strong>Delete</strong></span>
</button>
