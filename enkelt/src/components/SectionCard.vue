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
        props: ['color', 'icon', 'title', 'description', 'link']
    }
</script>

<style scoped>

</style>