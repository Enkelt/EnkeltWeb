<template>
    <div>
        <h2 class="title">Att börja använda Enkelt är lätt!</h2>
        <div class="intro">
            <p>Här hittar du Enkelts dokumentation och guider, samt annan information. Börja med att ladda ner Enkelt eller gå till webbredigeraren.</p>
            <div class="cta-container">
                <a class="btn btn-primary btn-cta main_button" :href="download_link" target="_blank"><em class="fas fa-cloud-download-alt"></em>Ladda ner</a>
                <a class="btn btn-info btn-cta main_button" href="https://redigerare.enkelt.io" target="_blank"><em class="fas fa-link"></em>Gå till webbredigeraren</a>
            </div><!--//cta-container-->
        </div><!--//intro-->
    </div>
</template>

<script>
    export default {
        name: 'Intro',
        data() {
            return {
                download_link: 'https://ladda-ner.enkelt.io/#/home?url=https://github.com/Enkelt/Enkelt/tree/master/Enkelt',
            }
        }
    }
</script>