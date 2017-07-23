<template>
    <div id="modals">
        <connect></connect>
    </div>
</template>

<script>
    import "./vodal/style/common.css";
    import "./vodal/style/zoom.css";

    import Connect from './Connect';

    export default {
        name: 'modals',
        components: {
            'connect': Connect,
        }
    }
</script>