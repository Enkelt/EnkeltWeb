<template>
    <div :class="'callout-block callout-'+type">
        <div class="icon-holder">
            <em :class="icon"></em>
        </div><!--//icon-holder-->
        <div class="content">
            <h4 class="callout-title" v-text="title"></h4>
            <h5 v-html="body"></h5>
        </div><!--//content-->
    </div>
</template>

<script>
    export default {
        name: 'app-callout',
        props: ['title', 'type', 'body', 'icon'],
    }
</script>

<style scoped></style>