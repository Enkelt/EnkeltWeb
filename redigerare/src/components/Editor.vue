<template>
    <main>
        <b-row id="row">
            <b-col md="6" sm="12">
                <div class="editor-section">
                    <b-row class="editor-header">
                        <b-col cols="10">
                            <h2>Redigerare</h2>
                        </b-col>
                        <b-col cols="2">
                            <b-button @click="runCode" variant="info">Kör</b-button>
                        </b-col>
                    </b-row>
                    <div class="editor-main">
                        <textarea-autosize autocapitalize="off" autofocus v-model="inputCode" id="inputCode" placeholder="Kod..."></textarea-autosize>
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
            runCode() {
                const url = 'https://api.enkelt.io/v1/transpile';
                this.axios.post(
                    url,
                    {
                        data: {
                            code: this.inputCode,
                            dev: true
                        }
                    },
                    {
                        headers: {
                            'Content-Type': 'text/plain;charset=utf-8'
                        }
                    },
                ).then(function (response) {
                    const output = response.data;
                    let tmp_output = String(output).split('');
                    for (let i = 0; i < tmp_output.length; i++) {
                        if (tmp_output[i] === '\n') {
                            tmp_output[i] = '<br/>';
                        }
                    }
                    document.querySelector('#output').innerHTML = tmp_output.join('');
                }).catch(function () {
                    document.querySelector('#output').innerHTML = 'Det inträffade ett fel! Om problemet kvarstår kontakta oss på: https://enkelt.io';
                });
            },
        }
    }
</script>

<style scoped>
    main {
        padding: 10px;
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        overflow-y: scroll;
    }
    
    .editor-section {
        border: 1px solid #ccc;
        min-height: 100%;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 2px;
    }
    
    #row {
        height: 100%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    
    .editor-header {
        border-bottom: 1px solid #ccc;
        padding: 5px;
        margin: 2px;
        max-width: 90%;
    }
    
    .editor-main {
        padding: 10px;
    }
    
    #inputCode {
        width: 100%;
        padding: 5px;
        border: none;
        border-radius: 2px;
        outline: none;
        font-family: monospace;
        font-size: 1.5rem;
    }
</style>
