<template>
    <header id="header" class="header">
        <div class="container">
            <a href="/" class="branding" style="text-decoration: none !important;">
                <div class="logo">
                    <div class="logo-inner">
                        <span aria-hidden="true" class="icon_documents_alt icon"></span>
                        <span class="text-highlight">Enkelt </span><span class="text-bold"><img src="../../public/favicon.png" height="60px" width="60px" alt="Enkelt"></span>
                    </div>
                </div>
            </a>
            <!--//branding-->
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="/">Hem</a>
                </li>
                <li class="breadcrumb-item active" v-text="title"></li>
            </ol>
        </div>
        <!--//container-->
    </header>
</template>

<script>
    export default {
        name: 'app-page-header',
        props: ['title'],
    }
</script>