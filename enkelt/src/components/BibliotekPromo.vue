<template>
    <div id="promo-block" class="promo-block">
        <div class="container">
            <div class="promo-block-inner">
                <h3 class="promo-title text-center"><em class="fas fa fa-thumbs-up"></em> <a href="https://bibliotek.enkelt.io" target="_blank">Vill du dela med dig av dina bibliotek?</a></h3>
                <div class="row">
                    <div class="figure-holder col-lg-5 col-md-6 col-12">
                        <div class="figure-holder-inner">
                            <a href="https://bibliotek.enkelt.io" target="_blank">
                                <img class="img-fluid" src="../assets/card.png" alt="Enkelt Bibliotek" />
                            </a>
                            <a class="mask" href="https://bibliotek.enkelt.io" target="_blank"><em class="fas fa fa-link"></em></a>
                        
                        </div>
                    </div><!--//figure-holder-->
                    <div class="content-holder col-lg-7 col-md-6 col-12">
                        <div class="content-holder-inner">
                            <div class="desc">
                                <h2 class="section-title"><strong>Enkelt-bibiliotek</strong></h2>
                                <h5>Enkelt-bibliotek är en webbsida där man kan dela med sig av sina bibliotek och hitta nya att experimentera med.</h5>
                                <br>
                                <h4 class="content-title">Så här enkelt är det:</h4>
                                <br>
                                <p><strong class="highlight">1.</strong> Gå till <strong><a href="https://bibliotek.enkelt.io" target="_blank">bibliotek.enkelt.io</a></strong>.</p>
                                <p><strong class="highlight">2.</strong> Hitta ett bibliotek du tycker om.</p>
                                <p><strong class="highlight">3.</strong> Importera det till ditt projekt.</p>
                                <p><strong class="fas fa-check highlight"></strong> Klart, i tre enkla steg har du en massa nya saker att göra med Enkelt!</p>
                                <a class="btn btn-cta" href="https://bibliotek.enkelt.io" target="_blank"><em class="fas fa-external-link-alt"></em> Gå till sidan</a>
                                <a class="btn btn-cta" href="https://enkelt.io/dokumentation#avancerade_funktioner" target="_blank"><em class="fas fa-external-link-alt"></em> Dokumentation</a>
                            </div><!--//desc-->
                        </div><!--//content-holder-inner-->
                    </div><!--//content-holder-->
                </div><!--//row-->
            </div><!--//promo-block-inner-->
        </div><!--//container-->
    </div><!--//promo-block-->
</template>

<script>
    export default {
        name: 'BibliotekPromo',
    }
</script>

<style scoped>
    .btn-cta {
        color: var(--light) !important;
    }
</style>