<template>
    <div class="body-purple">
        <div id="app-tidslinje">
            <ScrollToTopBtn></ScrollToTopBtn>
            <div class="page-wrapper">
                <app-page-header title="Tidslinje"></app-page-header>
                <div class="doc-wrapper">
                    <div class="container">
                        <div id="doc-header" class="doc-header text-center">
                            <h1 class="doc-title"><span aria-hidden="true" class="icon icon_datareport_alt"></span> Tidslinje</h1>
                            <div class="meta"><em class="far fa-clock"></em> Senast uppdaterad: Aug 10, 2019</div>
                        </div><!--//doc-header-->
                        <div class="doc-body row">
                            <div class="doc-content col-md-9 col-12 order-1">
                                <div class="content-inner">
                                    
                                    
                                    <header class="timeline_header">
                                        <h1 class="timeline_h1">Enkelts Tidslinje</h1>
                                    </header>
                                    
                                    <ul class="timeline">
                                        <!-- Item 1 -->
                                        <li id="2018">
                                            <div class="direction-r" id="dec2018">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Projektet började.</span>
                                                    <span class="time-wrapper"><span class="time">Dec 11 2018</span></span>
                                                </div>
                                                <div class="desc">Projektet började och <em>enkelt.py</em> filen skapades.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 2 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">All grundfunktioner klara</span>
                                                    <span class="time-wrapper"><span class="time">Dec 12 2018</span></span>
                                                </div>
                                                <div class="desc">Skriv (), var, Matte (), ... klara.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 3 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Om & Annars</span>
                                                    <span class="time-wrapper"><span class="time">Dec 13 2018</span></span>
                                                </div>
                                                <div class="desc">Om & Annars fungerar.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 4 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">GitHub</span>
                                                    <span class="time-wrapper"><span class="time">Dec 16 2018</span></span>
                                                </div>
                                                <div class="desc">Gjorde projektet till ett git-projekt och laddade upp det till GitHub.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 5 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Listor</span>
                                                    <span class="time-wrapper"><span class="time">Dec 18 2018</span></span>
                                                </div>
                                                <div class="desc">Lade till listor.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 6 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">GNU GPL v.3 -Licens</span>
                                                    <span class="time-wrapper"><span class="time">Dec 20 2018</span></span>
                                                </div>
                                                <div class="desc">Projektet använder nu GNU GPL v.3 -licensen.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 8 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Webbsidan</span>
                                                    <span class="time-wrapper"><span class="time">Dec 22 2018</span></span>
                                                </div>
                                                <div class="desc">Laddade upp webbsidan till GitHub.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 10 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Testa Enkelt i webbläsaren</span>
                                                    <span class="time-wrapper"><span class="time">Dec 24 2018</span></span>
                                                </div>
                                                <div class="desc">Lade till Trinket så man kan testa Enkelt utan att ladda ner språket.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 10B -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Enkelt-appen</span>
                                                    <span class="time-wrapper"><span class="time">Dec 24 2018</span></span>
                                                </div>
                                                <div class="desc">Skapade Enkelt-appen.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 11 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Variabelerrormeddelanden</span>
                                                    <span class="time-wrapper"><span class="time">Dec 30 2018</span></span>
                                                </div>
                                                <div class="desc">Det visas ett errormeddelande om man försöker använda en variabel som inte deklarerats.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 12 -->
                                        <li id="2019">
                                            <div class="direction-l" id="jan2019">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">2019!</span>
                                                    <span class="time-wrapper"><span class="time">Jan 1 2019</span></span>
                                                </div>
                                                <div class="desc">Ändrade copyright från 2018 till 2019.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 13 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Bugg med Skriv ()</span>
                                                    <span class="time-wrapper"><span class="time">Jan 13 2019</span></span>
                                                </div>
                                                <div class="desc">Man kan använda Skriv () utan ett mellanslag framför parenteserna.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 14 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Ladda ner Enkelt</span>
                                                    <span class="time-wrapper"><span class="time">Jan 19 2019</span></span>
                                                </div>
                                                <div class="desc">Enkelt går nu lättare att ladda ner.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 15 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Boolesk</span>
                                                    <span class="time-wrapper"><span class="time">Jan 19 2019</span></span>
                                                </div>
                                                <div class="desc">Booleskvariabler och användning av booleskvariabler i Om () och Annars.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 15B -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Google Play</span>
                                                    <span class="time-wrapper"><span class="time">Jan 19 2019</span></span>
                                                </div>
                                                <div class="desc">Publicerade Enkelt-appen till Google Play.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 16 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Dokument</span>
                                                    <span class="time-wrapper"><span class="time">Jan 21 2019</span></span>
                                                </div>
                                                <div class="desc">Skapade en dokumentsida till webbsidan där man kan öppna och spara/skriva-ut bl.a. dokumentationen, snabbstarten och licensinformationen.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 16B -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Sökfunktion i Enkelt-appen</span>
                                                    <span class="time-wrapper"><span class="time">Jan 21 2019</span></span>
                                                </div>
                                                <div class="desc">Sök i Enkelt-appen efter dokumentation, sidor mm.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 18 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Enkelts tidslinje</span>
                                                    <span class="time-wrapper"><span class="time">Jan 24 2019</span></span>
                                                </div>
                                                <div class="desc">Skapade tidslinjewebbsidan.</div>
                                            </div>
                                        </li>
                                        <!-- Item 19 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Guider & exempel</span>
                                                    <span class="time-wrapper"><span class="time">Jan 26 2019</span></span>
                                                </div>
                                                <div class="desc">Skapade en guide- och exempelwebbsida.</div>
                                            </div>
                                        </li>
                                        <!-- Item 20 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Ny design på testa Enkelt</span>
                                                    <span class="time-wrapper"><span class="time">Jan 27 2019</span></span>
                                                </div>
                                                <div class="desc">Uppdaterade designen på testa Enkelt -webbsidan.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 21 -->
                                        <li>
                                            <div class="direction-r" id="jul2019">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Nya Enkelt</span>
                                                    <span class="time-wrapper"><span class="time">Jul 07 2019</span></span>
                                                </div>
                                                <div class="desc">Började skriva om Enkelt från början.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 22 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Variabelsammanfogning</span>
                                                    <span class="time-wrapper"><span class="time">Jul 24 2019</span></span>
                                                </div>
                                                <div class="desc">Sammanfoga variabler med +.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 23 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">In() & Längd()</span>
                                                    <span class="time-wrapper"><span class="time">Jul 25 2019</span></span>
                                                </div>
                                                <div class="desc">In() & Längd() finns nu i Enkelt 3.0.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 24 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Specifika element ur listor</span>
                                                    <span class="time-wrapper"><span class="time">Jul 26 2019</span></span>
                                                </div>
                                                <div class="desc">Få ut specifika element ur listor med indexnummer.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 25 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Till () & Bort()</span>
                                                    <span class="time-wrapper"><span class="time">Jul 26 2019</span></span>
                                                </div>
                                                <div class="desc">Till () och Bort() -funktioner.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 26 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Längd() för listor</span>
                                                    <span class="time-wrapper"><span class="time">Jul 27 2019</span></span>
                                                </div>
                                                <div class="desc">Längd() -funktionen returnerar antalet element i en lista.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 27 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Två nivåer av listor</span>
                                                    <span class="time-wrapper"><span class="time">Jul 28 2019</span></span>
                                                </div>
                                                <div class="desc">Man kan nu ha en lista i en lista (bara en nivå).</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 28 -->
                                        <li>
                                            <div class="direction-r" id="aug2019">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Enkelt transpilerar!</span>
                                                    <span class="time-wrapper"><span class="time">Aug 04 2019</span></span>
                                                </div>
                                                <div class="desc">Enkelt är inte längre tolkat utan transpilerat!</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 29 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Morgan Williams!</span>
                                                    <span class="time-wrapper"><span class="time">Aug 09 2019</span></span>
                                                </div>
                                                <div class="desc">Morgan Williams började hjälpa med projektet.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 30 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Mycket nya funktioner</span>
                                                    <span class="time-wrapper"><span class="time">Aug 09 2019</span></span>
                                                </div>
                                                <div class="desc">Nya funktioner: sortera(), slump(), slumpval(), abs() och Flyt()</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 31 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">True/False översatt</span>
                                                    <span class="time-wrapper"><span class="time">Aug 09 2019</span></span>
                                                </div>
                                                <div class="desc">Om Enkelt skriver True/False översätts det till Sant/Falskt.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 32 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Buggfixar och nya funktioner</span>
                                                    <span class="time-wrapper"><span class="time">Aug 10 2019</span></span>
                                                </div>
                                                <div class="desc">Bool() och runda() lades till, buggfixar med konsolen.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 33 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Enkelt.io</span>
                                                    <span class="time-wrapper"><span class="time">Aug 11 2019</span></span>
                                                </div>
                                                <div class="desc">Domänen enkelt.io registrerades.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 34 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Lexikon!</span>
                                                    <span class="time-wrapper"><span class="time">Aug 12 2019</span></span>
                                                </div>
                                                <div class="desc">Lade till lexikon.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 35 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Importering</span>
                                                    <span class="time-wrapper"><span class="time">Aug 13 2019</span></span>
                                                </div>
                                                <div class="desc">Man kan nu importera funktioner från andra skript.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 36 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Importering från webben</span>
                                                    <span class="time-wrapper"><span class="time">Aug 14 2019</span></span>
                                                </div>
                                                <div class="desc">Importering från <a href="https://bibliotek.enkelt.io" target="_blank">bibliotek.enkelt.io</a> fungerar.</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 37 -->
                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Enkelt 3.0</span>
                                                    <span class="time-wrapper"><span class="time">Aug 30 2019</span></span>
                                                </div>
                                                <div class="desc">Enkelt 3.0 publicerades!</div>
                                            </div>
                                        </li>
                                        
                                        <!-- Item 38 -->
                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Klasser</span>
                                                    <span class="time-wrapper"><span class="time">Mar 5 2020</span></span>
                                                </div>
                                                <div class="desc">Klasser lades till.</div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Utökning</span>
                                                    <span class="time-wrapper"><span class="time">Mar 7 2020</span></span>
                                                </div>
                                                <div class="desc">Utökningsbibliotek lades till.</div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="direction-r">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Enkelt 3.1!</span>
                                                    <span class="time-wrapper"><span class="time">Mar 17 2020</span></span>
                                                </div>
                                                <div class="desc">Version 3.1 av Enkelt publicerades!</div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="direction-l">
                                                <div class="flag-wrapper">
                                                    <span class="hexa"></span>
                                                    <span class="flag">Försök, Fånga, och kasta()</span>
                                                    <span class="time-wrapper"><span class="time">Mar 18 2020</span></span>
                                                </div>
                                                <div class="desc">Man kan fånga och kasta felmeddelanden.</div>
                                            </div>
                                        </li>
                                    
                                    </ul>
                                
                                
                                </div><!--//content-inner-->
                            </div><!--//doc-content-->
                            <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex">
                                <div id="doc-nav" class="doc-nav">
                                    <nav id="doc-menu" class="nav doc-menu flex-column sticky">
                                        <a class="nav-link scrollto" href="#2018">2018</a>
                                        <a class="nav-link scrollto" href="#dec2018">December</a>
                                        <a class="nav-link scrollto" href="#2019">2019</a>
                                        <a class="nav-link scrollto" href="#jan2019">Januari</a>
                                        <a class="nav-link scrollto" href="#jul2019">Juli</a>
                                        <a class="nav-link scrollto" href="#aug2019">Augusti</a>
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
    
    import '../assets/css/tidslinje.css'
    import ScrollToTopBtn from "../components/ScrollToTop";
    import AppPageHeader from "../components/app-page-header";
    import Testa from "../components/Testa";
    export default {
        name: 'Tidslinje',
        components: {Testa, AppPageHeader, ScrollToTopBtn, AppFooterImg, AppFooter},
        mounted() {
            document.title = 'Enkelt - Tidslinje'
        }
    }
</script>

<style scoped>

</style>