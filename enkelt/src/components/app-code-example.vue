<template>
    <div>
        <br>
        <h4 v-text="title"></h4>
        <p v-html="description"></p>
        <div class="code-block" style="line-height: 1px;">
            <code>
                <div class="code-block" v-for="(line, index) in lines" :key="index">
                    <code><em style="color: lightgray" v-text="String(index+1)+' '" id="outer-code"></em><code v-text="line" :style="'padding-left: ' + get_amount_of_indent(line)"></code></code>
                </div>
            </code>
        </div>
        <h5>Utdata</h5>
        <div class="code-block" style="line-height: 1px;">
            <code>
                <div class="code-block" v-for="(line, index) in output" :key="index">
                    <code v-text="line"></code>
                </div>
            </code>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-code-example',
        props: ['lines', 'output', 'title', 'description'],
        methods: {
            get_amount_of_indent: function(line) {
                let x = 0;
                for (let i = 0; i < line.length; i++) {
                    if (line[i] === ' ') {
                        x += 1;
                    }
                    else {
                        break;
                    }
                }
                return String(x * 5) + 'px';
            
            }
        }
    }
</script>

<style scoped>
    #outer-code {
        padding-right: 10px;
    }

    code {
        font-size: 0.9em;

        font-family: monospace;
    }
</style>