<style lang="sass">
    $color-link: yellow;

    .container {
        border: 1px solid #00f;
    }
    .red {
        color: $color-link;
    }
</style>

<template>
    <div class="container">
        <h2 class="red">{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'ds from Component Aasdasfasd!!!!!!'
            }
        }
    }
</script>