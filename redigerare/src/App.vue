<template>
    <div id="app">
        <b-container fluid="fluid">
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
    }
    
    #app {
        width: 100%;
        height: 100vh;
    }
</style>
