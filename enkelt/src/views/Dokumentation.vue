<template>
    <div class="body-pink">
        <div id="app-dokumentation">
            <ScrollToTopBtn></ScrollToTopBtn>
            <div class="page-wrapper">
                <app-page-header title="Dokumentation"></app-page-header>
                <div class="doc-wrapper">
                    <div class="container">
                        <div id="doc-header" class="doc-header text-center">
                            <h1 class="doc-title"><span aria-hidden="true" class="icon icon_puzzle_alt"></span>Dokumentation</h1>
                            <div class="meta">Senast uppdaterad: May 9, 2020</div>
                            <br>
                        </div>
                        <!--//doc-header-->
                        <div class="doc-body row">
                            <div class="doc-content col-md-9 col-12 order-1">
                                <div class="content-inner">
                                    <section>
                                        <p class="doc-section">Dokumentationen har flyttat till: <a href="https://dokumentation.enkelt.io">dokumentation.enkelt.io</a></p>
                                    </section>
                                    <!--//doc-section-->
                                </div>
                                <!--//content-inner-->
                            </div>
                            <!--//doc-content-->
                        </div>
                        <!--//doc-body-->
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
    import AppFooter from "../components/app-footer";
    import ScrollToTopBtn from "../components/ScrollToTop";
    import AppPageHeader from "../components/app-page-header";
    export default {
        name: 'Dokumentation',
        components: {
            AppPageHeader,
            ScrollToTopBtn,
            AppFooter
        },
        mounted() {
            document.title = 'Enkelt - Dokumentation';
            window.location = 'https://dokumentation.enkelt.io';
        }
    }
</script>

<style scoped>

</style>
