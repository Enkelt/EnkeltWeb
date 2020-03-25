<template>
    <!-- ******Header****** -->
    <header id="head" class="header text-center">
        <div class="container">
            <div class="branding">
                <div class="logo">
                    <div class="logo-inner">
                        <span aria-hidden="true" class="icon_documents_alt icon"></span>
                        <span class="text-highlight">Enkelt </span><span class="text-bold"><img src="../../public/favicon.png" height="60px" width="60px" alt="Enkelt"></span>
                    </div>
                </div>
            </div><!--//branding-->
            <div class="tagline">
                <p>Enkelt är världens första svenskspråkiga programmeringsspråk, och det perfekta valet för programmeringsundervisning på svenska.</p>
                <p v-text="'v.' + version"></p>
                <p></p>
            
            </div><!--//tagline-->
            <div class="social-container">
                <!-- Replace with your Github Button -->
                <div class="github-btn mb-2">
                    <a class="github-button" :href="project_github_link" data-size="large" aria-label="Enkelt-projektet på GitHub.">Enkelt</a>
                    <a class="github-button" :href="personal_github_link" data-size="large" aria-label="Följ Edvard Busck-Nielsen på GitHub">@Buscedv</a>
                </div>
            </div><!--//social-container-->
        </div><!--//container-->
    </header><!--//header-->
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                version: '3.1',
                project_github_link: 'https://github.com/Enkelt/Enkelt',
                personal_github_link: 'https://github.com/Buscedv',
            }
        },
    }
</script>

<style scoped>

</style>