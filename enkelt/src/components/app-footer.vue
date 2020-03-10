<template>
    <footer class="footer text-center">
        <div class="container">
            <!--/* This template is released under the Creative Commons Attribution 3.0 License. -->
            <!-- Template by: https://themes.3rdwavemedia.com/ -->
            <small class="copyright" v-html="'&copy; Edvard Busck-Nielsen '+ year"></small>
            <a href="/sekretess">Sekretess</a>
        </div><!--//container-->
    </footer><!--//footer-->
</template>

<script>
    export default {
        name: 'app-footer',
        computed: {
            year: function() {
                return new Date().getFullYear();
            }
        },
    }
</script>

<style scoped>

</style>