<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
            <tr>
                <th v-for="(th, index) in ths" :key="index" v-text="th"></th>
            </tr>
            </thead>
            <tbody v-for="(tr, index) in tbody" :key="index">
            <tr>
                <th v-text="tr.title"></th>
                <td v-html="tr.description"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'app-table',
        props: ['ths', 'tbody', 'search_model', 'title'],
    }
</script>

<style scoped></style>