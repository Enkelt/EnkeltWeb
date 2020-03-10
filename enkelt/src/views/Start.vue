<template>
    <div class="body-green">
        <div id="app-start">
            <ScrollToTopBtn></ScrollToTopBtn>
            <div class="page-wrapper">
                <!-- ******Header****** -->
                <app-page-header title="Snabbstart"></app-page-header>
                <div class="doc-wrapper">
                    <div class="container">
                        <div id="doc-header" class="doc-header text-center">
                            <h1 class="doc-title">Snabbstart</h1>
                            <div class="meta">Senast uppdaterad: Aug 03, 2019</div>
                        </div>
                        <!--//doc-header-->
                        <div class="doc-body row">
                            <div class="doc-content col-md-9 col-12 order-1">
                                <div class="content-inner">
                                    <section id="download-section" class="doc-section">
                                        <h2 class="section-title">Ladda ner Enkelt</h2>
                                        <div class="section-block">
                                            <p>Du m&aring;ste b&ouml;rja med att ladda ner Enkelt. Klicka p&aring; den gr&ouml;na knappen under f&ouml;r att b&ouml;rja nerladdningen. Enkelt kan andv&auml;ndas p&aring;
                                                <em>Mac OSX, Windows och Linux</em>. Mac OSX och Linux versionen &auml;r den samma medan Windows har ett annat program. F&ouml;r att kunna andv&auml;nda Enkelt m&aring;ste du &auml;ven ha tillg&aring;ng till
                                                <strong>Terminal</strong> eller
                                                <strong>Kommandotolken</strong> (Windows) samt ha
                                                <strong>Python</strong> (v. 3 eller h&ouml;gre) installerat.
                                            </p>
                                            <a class="btn btn-green" :href="download_link" target="_blank" rel="noopener"> Ladda ner Enkelt</a>
                                            <br>
                                            <br>
                                            <app-callout title="Kan du inte ladda ner Enkelt?" type="success" body="Inga problem! Använd <a href='https://redigerare.enkelt.io' target='_blank'>webbredigeraren</a> istället." icon="fas fa-info"></app-callout>
                                        </div>
                                    </section>
                                    <!--//doc-section-->
                                    <section id="installation-section" class="doc-section">
                                        <h2 class="section-title">Att andv&auml;nda och starta Enkelt</h2>
                                        <div id="step1" class="section-block">
                                            <p>Du k&ouml;r Enkeltkod med f&ouml;ljande kommando. Skriv in kommandot i Terminal p&aring; Mac OSX och Linux eller Kommandotolken p&aring; Windows. Du m&aring;ste &auml;ven vara i samma mapp som Enkelt &auml;r nedladdat
                                                i.</p>
                                            <div class="code-block">
                                                <h6>&Ouml;ppna och k&ouml;r Enkelt</h6>
                                                <p>
                                                    <code>python3 enkelt.py min_kod.e</code>
                                                </p>
                                            </div>
                                            <!--//code-block-->
                                        </div>
                                        <!--//section-block-->
                                        <div id="step2" class="section-block">
                                            <h3 class="block-title">Enkelt filtypen</h3>
                                            <p>Du ser att den sista delen av kommandot &auml;r
                                                <strong>'min_kod.e'</strong> detta h&auml;nvisar till en
                                                <em>kodfil</em> d&auml;r det skrivits Enkeltkod.
                                                <strong>'min_kod'</strong> &auml;r
                                                <em>filnamnet</em> och
                                                <strong>'.e'</strong> &auml;r Enkelts filtyp. Andv&auml;nd alltid
                                                <strong>.e</strong> filtypen n&auml;r du g&ouml;r Enkeltkodfiler, Det &auml;r inte
                                                <em>n&ouml;dv&auml;ndigt</em> men det &auml;r rekommenderat.
                                            </p>
                                        </div>
                                        <!--//section-block-->
                                    </section>
                                    <!--//doc-section-->
                                    <section id="code-section" class="doc-section">
                                        <h2 class="section-title">Hej V&auml;rlden i Enkelt.</h2>
                                        <div class="section-block">
                                            <p>"Hej V&auml;rlden" &auml;r ofta det f&ouml;rsta programmet man visar i ett programmeringsspr&aring;k. H&auml;r &auml;r hur du g&ouml;r ett "Hej v&auml;rlden"-program i Enkelt.</p>
                                        </div>
                                        <!--//section-block-->
                                        <div id="html" class="section-block">
                                            <div class="callout-block callout-success">
                                                <div class="icon-holder">
                                                    <em class="fas fa-thumbs-up"></em>
                                                </div><!--//icon-holder-->
                                                <div class="content">
                                                    <h4 class="callout-title">Tips:</h4>
                                                    <p>Testa att experimentera med koden efter att du skrivit "Hej v&auml;rlden"-programmet!</p>
                                                </div><!--//content-->
                                            </div>
                                            <div class="section-block">
                                                <p>G&ouml;r en ny texfil och kalla den
                                                    <em>kod.e</em> eller n&aring;got liknande.
                                                    <br /> &Ouml;ppna filen i vilken textredigerare som helst.
                                                    <br /> Skriv sedan f&ouml;ljande:
                                                </p>
                                            </div>
                                            <!--//section-block-->
                                            <div>
                                                <br>
                                                <h4>kod.e</h4>
                                                <div class="code-block" style="line-height: 1px;">
                                                    <code>
                                                        <div class="code-block">
                                                            <code><em style="color: lightgray">1 </em><code>skriv ("Hej, världen!)</code></code>
                                                        </div>
                                                    </code>
                                                </div>
                                            </div>
                                            <!--//code-block-->
                                            <div class="section-block">
                                                <p>Spara sedan filen och &ouml;ppna Terminal/Kommandotolken och skriv: </p>
                                                <div class="code-block" style="line-height: 1px;">
                                                    <code>
                                                        <div class="code-block">
                                                            <code>python3 enkelt.py kod.e</code>
                                                        </div>
                                                    </code>
                                                </div>
                                                <br />
                                                <p>Ers&auml;tt
                                                    <em>"kod.e"</em> med det filnamn du valt. K&ouml;r sedan kommandot!
                                                    <br /> Om du ser texten "Hej, v&auml;rlden!" gjorde du r&auml;tt och koden fungerar! Om du inte fick r&auml;tt utput, g&aring; tillbaka och kolla om du gjorde ett stavfel.
                                                </p>
                                                <div class="callout-block callout-info">
                                                    <div class="icon-holder">
                                                        <em class="fas fa-bullhorn"></em>
                                                    </div>
                                                    <!--//icon-holder-->
                                                    <div class="content">
                                                        <h4 class="callout-title">Gratulerar</h4>
                                                        <p>Du har nu gjort ditt f&ouml;rsta Enkeltprogram! Du kan nu g&aring; till den kompletta dokumentationen f&ouml;r att l&auml;ra dig mera</p>
                                                    </div>
                                                    <!--//content-->
                                                </div>
                                                <!--//callout-block-->
                                            </div>
                                            <!--//section-block-->
                                        </div>
                                        <!--//section-block-->
                                    </section>
                                    <!--//doc-section-->
                                </div>
                                <!--//content-inner-->
                            </div>
                            <!--//doc-content-->
                            <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
                                <div id="doc-nav" class="doc-nav">
                                    <nav id="doc-menu" class="nav doc-menu flex-column sticky">
                                        <a class="scrollto" href="#download-section">Ladda ner Enkelt</a>
                                        <a class="nav-link scrollto" href="#installation-section">Att andv&auml;nda Enkelt</a>
                                        <nav class="doc-sub-menu nav flex-column">
                                            <a class="nav-link scrollto" href="#step1">K&ouml;r Enkelt</a>
                                            <a class="nav-link scrollto" href="#step2">Enkelt filtypen</a>
                                        </nav>
                                        <!--//nav-->
                                        <a class="nav-link scrollto" href="#code-section">Hej V&auml;rlden i Enkelt</a>
                                        <nav class="doc-sub-menu nav flex-column">
                                            <a class="nav-link scrollto" href="#html">Koden</a>
                                        </nav>
                                        <!--//doc-menu-->
                                        <a class="nav-link scrollto" href="#testa">Testa Enkelt</a>
                                    </nav>
                                </div>
                            </div>
                            <!--//doc-sidebar-->
                        </div>
                        <!--//doc-body-->
                        <Testa></Testa>
                        <app-footer-img></app-footer-img>
                    </div>
                    <!--//container-->
                </div>
                <!--//doc-wrapper-->
            </div>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import AppPageHeader from "../components/app-page-header";
    import AppCallout from "../components/app-callout";
    import AppFooterImg from "../components/app-footer-img";
    import AppFooter from "../components/app-footer";
    import ScrollToTopBtn from "../components/ScrollToTop";
    import Testa from "../components/Testa";
    export default {
        name: 'Start',
        components: {Testa, ScrollToTopBtn, AppFooter, AppFooterImg, AppCallout, AppPageHeader},
        data() {
            return {
                download_link: 'https://ladda-ner.enkelt.io/#/home?url=https://github.com/Enkelt/Enkelt/tree/master/Enkelt',
            }
        },
        mounted() {
            document.title = 'Enkelt - Snabbstart'
        }
    }
</script>

<style scoped>

</style>