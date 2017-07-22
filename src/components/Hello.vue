<template>
    <div class="hello">
        <div class="row">
            <card class="eight columns">
                <h2>{{ msg }}</h2>
            </card>
            <card class="four columns">
                Communism works
            </card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Hello there',
            };
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
    margin: 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
