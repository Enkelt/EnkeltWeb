<template>
    <div class="content-holder col-lg-7 col-md-6 col-12" style="margin-left: auto; margin-right: auto; text-align: center; width: 100%;">
        <div class="content-holder-inner">
            <div class="desc">
                <br>
                <br>
                <br>
                <h5 class="content-title"><strong> Enkelt har en Android-app på Google Play!</strong></h5>
                <p>Appen inehåller allt som finns på den här webbsidan i ett praktiskt format så du snabbt kan kolla up saker på din telefon eller tablet.</p>
                <p><strong class="highlight">(Klicka på länken eller skanna QR-koden för att ladda ner den)</strong></p>
                <br>
                <img src="../assets/images/enkeltqr.png" alt="Enkelt app QR" id="qr_res">
                <br>
                <br>
                <a class="btn btn-cta" :href="link" target="_blank"><em class="fas fa-external-link-alt"></em> Öppna i Google Play</a>
                <a href='https://play.google.com/store/apps/details?id=io.buscedv.enkelt&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Ladda ned på Google Play' id="google_res" src='https://play.google.com/intl/en_us/badges/images/generic/sv_badge_web_generic.png'/></a>
                <br>
                <br>
                <br>
            </div><!--//desc-->
        </div><!--//content-holder-inner-->
    </div><!--//content-holder-->
</template>

<script>
    export default {
        name: 'app-app',
        data: function () {
            return {
                link: 'https://play.google.com/store/apps/details?id=io.buscedv.enkelt',
            }
        },
    }
</script>

<style scoped>
    .btn-cta {
        color: var(--info) !important;
    }
</style>