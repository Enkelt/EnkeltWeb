<template>
    <div class="body-orange">
        <div id="app-licens">
            <ScrollToTopBtn></ScrollToTopBtn>
            <div class="page-wrapper">
                <app-page-header title="Licens"></app-page-header>
                <div class="doc-wrapper">
                    <div class="container">
                        <div id="doc-header" class="doc-header text-center">
                            <h1 class="doc-title"><span aria-hidden="true" class="icon icon_gift"></span> Licens &amp; Kontakt</h1>
                            <div class="meta"><em class="far fa-clock"></em> Senast uppdaterad: Aug 16, 2019</div>
                        </div><!--//doc-header-->
                        <div class="doc-body row">
                            <div class="doc-content col-md-9 col-12 order-1">
                                <div class="content-inner">
                                    <section id="license" class="doc-section">
                                        <h2 class="section-title">Enkelt Licens</h2>
                                        <div class="section-block">
                                            <div class="jumbotron text-left">
                                                <h1 class="text-center">GNU GPL v.3</h1>
                                                <p>GNU GPL Licensen innebär bland annat att vem som helst får ändra i programkoden för eget bruk. Om du ger ut programmet i källkodsform eller i binär form måste du ge ut det under samma licens och även lämna ut ursprungskoden om någon frågar efter den.
                                                    
                                                    Det betyder att ingen kan bygga annan programvara runt den ursprungliga koden för att sedan sälja den som en del av ett paket utan att tillhandahålla källkoden. All kod som är licensierad under GPL kommer alltså att förbli fri så länge det finns något intresse för koden.</p>
                                                <p>GNU GPL Licensen är en så kallad copyleftlicens. Det betyder att alla bearbetningar av ett verk måste publiceras under samma licens. Om du använder kod från två olika verk som är försedda med olika licenser, men med villkoret copyleft, kan du alltså inte kombinera dem i ditt nya program. Detta eftersom du då inte kan följa kravet på att distribuera den bearbetade versionen under samma licens.</p>
                                                <p>GNU GPL Licensen är en så kallad copyleftlicens. Det betyder att alla bearbetningar av ett verk måste publiceras under samma licens. Om du använder kod från två olika verk som är försedda med olika licenser, men med villkoret copyleft, kan du alltså inte kombinera dem i ditt nya program. Detta eftersom du då inte kan följa kravet på att distribuera den bearbetade versionen under samma licens.</p>
                                                <div class="author-profile text-center">
                                                    <a class="center-block" href="/"><img src="../assets/logo.png" alt="Enkelt"></a>
                                                </div><!--//author-profile-->
                                                <div class="speech-bubble text-center">
                                                    <h3 class="speech-title">Läs mer om GNU GPL -licensen</h3>
                                                    
                                                    <p>Du kan läsa mer om vad GNU GPL (v.3) -licensen innebär och vad den betyder för Enkelt-projektet på <a href="http://gnu.org">www.gnu.org</a></p>
                                                </div>
                                            </div><!--//jumbotron-->
                                        </div><!--//section-block-->
                                    
                                    </section><!--//doc-section-->
                                    <section id="credits" class="doc-section">
                                        <h2 class="section-title">Enkelt Kontaktinformation</h2>
                                        <div class="section-block">
                                            <ul class="list list-unstyled">
                                                <li><a href="https://github.com/Enkelt/Enkelt" target="_blank"><em class="fas fa-external-link-square-alt"></em> Enkelt På GitHub</a></li>
                                                <li><a href="https://github.com/buscedv" target="_blank"><em class="fas fa-external-link-square-alt"></em> Edvard På GitHub</a></li>
                                                <li><a href="mailto:kontakt@enkelt.io" target="_blank"><em class="fas fa-external-link-square-alt"></em> Email</a></li>
                                            
                                            </ul>
                                        </div><!--//section-block-->
                                        
                                        <h3>Kontakt</h3>
                                        
                                        <div class="container_form">
                                            <form action="https://formspree.io/kontakt@enkelt.io" method="POST">
                                                <label for="fname">Namn</label>
                                                <input type="text" id="fname" name="Namn" placeholder="Ditt namn..." required="required">
                                                
                                                <label for="lname">Email</label>
                                                <input type="email" id="lname" name="Email" placeholder="exempel@email.com" required="required">
                                                
                                                <label for="subject">Meddelande</label>
                                                <textarea id="subject" name="Meddelande" placeholder="Skriv något..." style="height:200px" required="required"></textarea>
                                                
                                                <input type="submit" value="Skicka">
                                            </form>
                                        </div>
                                    
                                    </section><!--//doc-section-->
                                
                                
                                </div><!--//content-inner-->
                            </div><!--//doc-content-->
                            <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
                                <div id="doc-nav" class="doc-nav">
                                    <nav id="doc-menu" class="nav doc-menu flex-column sticky">
                                        <a class="nav-link scrollto" href="#license">Licens</a>
                                        <a class="nav-link scrollto" href="#credits">Kontaktinformation</a>
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
    import ScrollToTopBtn from "../components/ScrollToTop";
    import AppPageHeader from "../components/app-page-header";
    import Testa from "../components/Testa";
    export default {
        name: 'Licens',
        components: {Testa, AppPageHeader, ScrollToTopBtn, AppFooterImg, AppFooter},
        mounted() {
            document.title = 'Enkelt - Licens & Kontakt'
        }
    }
</script>

<style scoped>

</style>