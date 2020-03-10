<template>
    <div id="notfound">
        <div class="notfound">
            <div class="notfound-404">
                <h1>:(</h1>
            </div>
            <h2>404 - Sidan kunde inte hittas</h2>
            <p>Sidan du letar efter kan ha blivit raderad/bytt namn eller så är den för tillfället inte tillgänglig.</p>
            <a href="https://enkelt.io" class="buttonLink">Hem</a>
            <a href="https://redigerare.enkelt.io" class="buttonLink">Webbredigeraren</a>
            <a href="https://bibliotek.enkelt.io" class="buttonLink">Bibliotek</a>
            <br>
            <br>
            <p>Om du tror att något gått fel kan du kontakta oss:</p>
            <a href="mailto:kontakt@enkelt.io" class="nonButtonLink">kontakt@enkelt.io</a>
        </div>
    </div>
</template>

<script>
    import '../assets/css404/style.css'
    
    export default {
        name: 'FourOhFour',
    }
</script>