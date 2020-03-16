<template>
    <main>
        <b-row id="row">
            <b-col md="6" sm="12">
                <div class="editor-section">
                    <b-row class="editor-header">
                        <b-col cols="9">
                            <h2>Redigerare</h2>
                        </b-col>
                        <b-col cols="3">
                            <b-button @click="startRunCode" variant="info">Kör</b-button>
                        </b-col>
                    </b-row>
                    <div class="editor-main">
                        <textarea-autosize v-model="inputCode" id="inputCode" placeholder="Kod..."></textarea-autosize>
                    </div>
                </div>
            </b-col>
            <b-col md="6" sm="12">
                <div class="editor-section">
                    <b-row class="editor-header">
                        <b-col cols="12">
                            <h2>Utdata</h2>
                        </b-col>
                    </b-row>
                    <div class="editor-main">
                        <p id="output"></p>
                    </div>
                </div>
            </b-col>
        </b-row>
    </main>
</template>

<script>
    export default {
        name: 'Editor',
        data() {
            return {
                inputCode: '',
            }
        },
        methods: {
            startRunCode() {
                this.runCode();
            },
            runCode() {
                const url = 'http://api.enkelt.io/v1/transpile';
                this.axios.post(
                    url,
                    {
                        data: {
                            code: this.inputCode
                        }
                    },
                    {
                        headers: {
                            'Content-Type': 'text/plain;charset=utf-8'
                        }
                    },
                ).then(function (response) {
                    document.querySelector('#output').innerHTML = response.data.replace('\n', '<br/>');
                }).catch(function (error) {
                    console.log(error);
                    document.querySelector('#output').innerHTML = error;
                });
            },
        }
    }
</script>

<style scoped>
    main {
        padding: 10px;
        width: 100%;
        height: 100vh;
        margin-left: auto;
        margin-right: auto;
    }
    
    .editor-section {
        border: 1px solid #eee;
        height: 100%;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
    }
    
    #row {
        height: 100%;
        max-height: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        overflow-y: scroll;
    }
    
    .editor-header {
        border-bottom: 1px solid #eee;
        padding: 10px;
    }
    
    .editor-main {
        padding: 10px;
    }
    
    #inputCode {
        width: 100%;
        padding: 5px;
        border: none;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-radius: 2px;
        outline: none;
        font-family: monospace;
        font-size: 1.5rem;
    }
</style>