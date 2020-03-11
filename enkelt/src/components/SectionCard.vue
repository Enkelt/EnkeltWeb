<template>
    <div :class="'item col-lg-4 col-6 item-' + color">
        <div class="item-inner">
            <div class="icon-holder">
                <em :class="'icon icon_' + icon"></em>
            </div><!--//icon-holder-->
            <h3 class="title" v-text="title"></h3>
            <p class="intro" v-text="description"></p>
            <a class="link" :href="link"><span></span></a>
        </div><!--//item-inner-->
    </div><!--//item-->
</template>

<script>
    export default {
        name: 'SectionCard',
        props: {
            color: {
                type: String,
                default: 'primary'
            },
            icon: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: 'Enkelt'
            },
            description: {
                type: String,
                default: ''
            },
            link: {
                type: String,
                default: '/'
            },
            disabled: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style scoped>

</style>