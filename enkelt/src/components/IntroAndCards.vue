<template>
    <main>
        <div id="cards-wrapper" class="cards-wrapper row">
            <Intro></Intro>
            <SectionCard
                color="green"
                icon="lightbulb"
                title="Snabbstart"
                description="Lär dig grunderna i Enkelt och skriv ditt första program."
                link="/start">
            </SectionCard>
            
            <section-card
                color="pink"
                icon="puzzle_alt"
                title="Dokumentation"
                description="Hela språkets kompletta dokumentation."
                link="/dokumentation">
            </section-card>
    
            <section-card
                    color="primary"
                    icon="question_alt"
                    title="Om Enkelt"
                    description="Läs mer om Enkelt-projektet"
                    link="/om">
            </section-card>
    
            <section-card
                    color="teal"
                    icon="pencil"
                    title="Webbredigeraren"
                    description="Kör Enkelt-kod i webbläsaren utan att ladda ner något."
                    link="https://redigerare.enkelt.io">
            </section-card>
    
            <section-card
                    color="red"
                    icon="archive"
                    title="Bibliotek"
                    description="Utforska och dela bibliotek för Enkelt."
                    link="https://bibliotek.enkelt.io">
            </section-card>
    
            <section-card
                color="blue"
                icon="genius"
                title="Dokument"
                description="Läs och ladda ner dokumentformen av dokumentationen, snabbstarten, etc..."
                link="/dokument">
            </section-card>
    
            <section-card
                    color="purple"
                    icon="datareport_alt"
                    title="Tidslinje"
                    description="Följ med utvecklingen av Enkelt och se hur projektet evolverat."
                    link="/tidslinje">
            </section-card>
    
            <section-card
                    color="orange"
                    icon="gift"
                    title="Licens & Kontakt"
                    description="Läs mera om licensen Enkelt använder."
                    link="/licens">
            </section-card>
        </div><!--//cards-->
    </main>
</template>

<script>
    import Intro from "./Intro";
    import SectionCard from "./SectionCard";
    export default {
        name: 'IntroAndCards',
        components: {SectionCard, Intro}
    }
</script>