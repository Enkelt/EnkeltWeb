<template>
    <main>
        <div id="app">
            <a href="#head" id="to_top_btn" class="scrollto"> <em class="fa fa-chevron-up"></em> </a>
            
            <div class="page-wrapper">
                
                <Header></Header>
                
                <section class="cards-section text-center">
                    <div class="container">
                        
                        <IntroAndCards></IntroAndCards>
                        
                        <app-app></app-app>
                        
                        <app-footer-img></app-footer-img>
                    </div><!--//container-->
                </section><!--//cards-section-->
                
                <BibliotekPromo></BibliotekPromo>
            
            </div><!--//page-wrapper-->
            
            <app-footer></app-footer>
        </div>
    </main>
</template>

<script>
    import AppFooter from "../components/app-footer";
    import AppApp from "../components/app-app";
    import AppFooterImg from "../components/app-footer-img";
    import Header from "../components/Header";
    import IntroAndCards from "../components/IntroAndCards";
    import BibliotekPromo from "../components/BibliotekPromo";
    
    export default {
        name: 'Home',
        components: {BibliotekPromo, IntroAndCards, Header, AppFooterImg, AppApp, AppFooter},
    }
</script>
