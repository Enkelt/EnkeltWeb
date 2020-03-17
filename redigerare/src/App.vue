<template>
    <div id="app">
        <b-container fluid style="padding: 0 !important; height: 92%;">
            <Navbar></Navbar>
            <Editor></Editor>
        </b-container>
    </div>
</template>

<script>
    import Editor from "./components/Editor";
    import Navbar from "./components/Navbar";
    
    export default {
        name: 'App',
        components: {Navbar, Editor},
    }
</script>

<style>
    html {
        scroll-behavior: smooth;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: 'Open Sans', sans-serif !important;
        max-height: 100vh;
        height: 100vh;
    }
    
    #app {
        width: 100%;
        height: 100%;
    }
</style>
