<template>
    <div id="app">
        <b-container fluid="fluid">
            <Editor></Editor>
        </b-container>
    </div>
</template>

<script>
    import Editor from "./components/Editor";
    
    export default {
        name: 'App',
        components: {Editor},
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
    }
    
    #app {
        width: 100%;
        height: 100vh;
    }
</style>
