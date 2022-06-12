<script>
    import CommentBox from "./components/CommentBox.svelte";
    import CommentContent from "./components/CommentContent.svelte";
</script>

<style>
    main {
        padding: 2em 1em;
    }

    /* // Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
    }

    /* // Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        main {
            margin-inline: auto;
            max-width: 80%;
        }
    }

    /* // Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
        main {
            max-width: 75%;
        }
    }
</style>

<main>
    <!-- <CommentBox /> -->
    <CommentContent />
</main>
