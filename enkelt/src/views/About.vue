<template>
    <div class="body-primary">
        <div id="app-about">
            <ScrollToTopBtn></ScrollToTopBtn>
            <div class="page-wrapper">
                <app-page-header title="Om Enkelt"></app-page-header>
                <div class="doc-wrapper">
                    <div class="container">
                        <div id="doc-header" class="doc-header text-center">
                            <h1 class="doc-title"><span aria-hidden="true" class="icon icon_question_alt"></span> Om Enkelt</h1>
                        </div><!--//doc-header-->
                        <div class="doc-body row">
                            <div class="doc-content col-md-9 col-12 order-1">
                                <div class="content-inner">
                                    <section id="om-enkelt" class="doc-section">
                                        <h2 class="section-title">Om Enkelt</h2>
                                        <div class="section-block">
                                            <div class="jumbotron text-left">
                                                <h3 id="vad-ar-enkelt">Vad är Enkelt?</h3>
                                                <p>Enkelt är ett programmeringsspråk som till 100% fungerar på svenenska, det betyder att alla nyckelord, funktionsnamn, etc... är på svenska. Enkelt är det enda programmeringsspråket i världen som är <strong>skrivet</strong> och på svenska, det finns språk som fungerar <em>visuellt</em> (som scratch) med det är inte samma sak.
                                                Enkelt är det perfekta valet då man vill undervisa programmering på svenska. Tanken bakom programmeringssundervisning är att lära ut <em>koncepten</em> inom programmering och inte specifikt ett programmeringsspråk, då fungerar Enkelt absolut bäst. Enkelt ger en realistisk bild av hur programmering fungerar och eftersom språket fungerar på samma sätt som andra programmeringsspråk som t.ex. Python och JavaScript. Det är också därför lätt för elever att fortsätta med andra språk om de blir intresserade.
                                                </p>
                                                <br>
                                                <h3 id="hur-anvands-enkelt">Hur används Enkelt?</h3>
                                                <p>Enkelt går att använda på två olika sätt:</p>
                                                <p><strong>1.</strong> Nedladdat: Man kan ladda ner Enkelt som ett Python-skript (enkelt.py) och då körs koden via Terminalen eller Kommandotolken. Läs mer i <a href="/start">snabbstarten</a></p>
                                                <p><strong>2.</strong> Webbredigeraren: Enkelt har en redigerare som är helt och hållet webb-baserad, det betyder att man inte behöver ladda ner något för att använda den. Gå bara till <a href="https://redigerare.enkelt.io" target="_blank">redigerare.enkelt.io</a> och börja koda direkt!</p>
                                                <div class="author-profile text-center">
                                                    <a class="center-block" href="/"><img src="../assets/logo.png" alt="Enkelt"></a>
                                                </div><!--//author-profile-->
                                                <div class="speech-bubble text-center">
                                                    <h3 class="speech-title">Kom igång med Enkelt</h3>
                                                    <p>Att börja använda Enkelt är lätt! Börja med att gå till <a href="https://redigerare.enkelt.io" target="_blank">webbredigeraren</a> eller läs <a href="/start">snabbstarten</a> för att komma igång!</p>
                                                </div>
                                            </div><!--//jumbotron-->
                                        </div><!--//section-block-->
                                    
                                    </section><!--//doc-section-->
    
                                    <section id="bakgrund" class="doc-section">
                                        <h2 class="section-title">Bakgrund</h2>
                                        <div class="section-block">
                                            <div class="jumbotron text-left">
                                                <p>
                                                    Enkelt-projektet skapades i december 2018 av Edvard Busck-Nielsen. Projektet var urprungligen hans bidrag i tävlingen <em>TekNatur</em>. Tävlingen hölls i Februari 2019 och projektet vann <strong>första pris</strong> i tävlingen.
                                                    <br>
                                                    <br>
                                                    Efter tävlingen fortsatte Edvard att arbeta på projektet. Sommaren 2019 skrevs i praktiken hela projektet om från början och språket övergick från att vara <em>tolkat</em> (interpreterat) till att vara ett <em>transpilerat</em> programmeringsspråk.
                                                    Under sommaren/hösten 2019 fick Edvard också hjälp av Morgan Williams som b.la. implementerade <em>importeringsfunktionen</em>. Version <em>3.0</em> publicerades i slutet av Augusti 2019.
                                                </p>
                                            </div><!--//jumbotron-->
                                        </div><!--//section-block-->
    
                                    </section><!--//doc-section-->
    
                                    <section id="hur-fungerar-enkelt" class="doc-section">
                                        <h2 class="section-title">Hur fungerar Enkelt?</h2>
                                        <div class="section-block">
                                            <div class="jumbotron text-left">
                                                <p>
                                                    Enkelt är skrivet i Python (3) och använder egentligen <strong>inga externa bibliotek</strong> (vissa inbyggda som <em>"os"</em>, <em>"re"</em>, och <em>"sys"</em> används). Enkelt är <em>transpilerat</em> vilket betyder att Enkelt-koden översätts till Python och sedan körs Python-koden.
                                                    Enkelts webbversion fungerar likadant men med den skillnaden att den transpilerade koden körs av <em>Brython</em>.
                                                </p>
                                                <h3>Kort teknisk summering:</h3>
                                                    <blockquote>
                                                        <em>"Enkelt är ett, dynamiskt, interaktivt och transpilerat programmeringsspråk."</em>
                                                    </blockquote>
                                                <p>
                                                    Om du är intresserad av hur Enkelt fungerar bakom kulisserna kan du besöka <a href="https://github.com/Enkelt/Enkelt" target="_blank">GitHub-projektet</a>.
                                                </p>
                                            </div><!--//jumbotron-->
                                        </div><!--//section-block-->
    
                                    </section><!--//doc-section-->
                                
                                
                                </div><!--//content-inner-->
                            </div><!--//doc-content-->
                            <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
                                <div id="doc-nav" class="doc-nav">
                                    <nav id="doc-menu" class="nav doc-menu flex-column sticky">
                                        <a class="nav-link scrollto" href="#om-enkelt">Om Enkelt</a>
                                        <nav class="doc-sub-menu nav flex-column">
                                            <a class="nav-link scrollto" href="#vad-ar-enkelt">Vad är Enkelt?</a>
                                            <a class="nav-link scrollto" href="#hur-anvands-enkelt">Hur används Enkelt?</a>
                                        </nav>
                                        <a class="nav-link scrollto" href="#bakgrund">Bakgrund</a>
                                        <a class="nav-link scrollto" href="#hur-fungerar-enkelt">Hur fungerar Enkelt?</a>
                                    </nav><!--//doc-menu-->
                                </div>
                            </div><!--//doc-sidebar-->
                        </div><!--//doc-body-->
                        <Testa></Testa>
                        <app-footer-img></app-footer-img>
                    </div><!--//container-->
                </div><!--//doc-wrapper-->
            
            </div><!--//page-wrapper-->
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import AppFooter from "../components/app-footer";
    import AppFooterImg from "../components/app-footer-img";
    import Testa from "../components/Testa";
    import ScrollToTopBtn from "../components/ScrollToTop";
    import AppPageHeader from "../components/app-page-header";
    export default {
        name: 'About',
        components: {AppPageHeader, ScrollToTopBtn, Testa, AppFooterImg, AppFooter},
        mounted() {
            document.title = 'Enkelt - Om Enkelt';
        }
    }
</script>

<style scoped>

</style>