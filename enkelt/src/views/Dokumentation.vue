<template>
    <div class="body-pink">
        <div id="app-dokumentation">
            <ScrollToTopBtn></ScrollToTopBtn>
            <div class="page-wrapper">
                <app-page-header title="Dokumentation"></app-page-header>
                <div class="doc-wrapper">
                    <div class="container">
                        <div id="doc-header" class="doc-header text-center">
                            <h1 class="doc-title"><span aria-hidden="true" class="icon icon_puzzle_alt"></span>Dokumentation</h1>
                            <div class="meta">Senast uppdaterad: Mars 9, 2020</div>
                            <br>
                            <div class="main-search-box pt-sm-0 pb-sm-0">
                                <form class="form-inline search-form justify-content-center">
                                    <input type="text" placeholder="Sök..." name="search" class="form-control search-input" v-model="documentation_search" @input="performSearch(documentation_search)"  @keydown.enter.prevent="performSearch()">
                                </form>
                            </div>
                            <br>
                        </div>
                        <!--//doc-header-->
                        <div class="doc-body row">
                            <div class="doc-content col-md-9 col-12 order-1">
                                <div class="content-inner" v-for="(element, index) in documentation_elements" :key="index">
                                    <section :id="element.id" class="doc-section" v-if="should_show_section(element.sections)">
                                        <h1 class="section-header" v-text="element.title"></h1>
                                        <br>
                                        <p>
                                            <a class="btn btn-primary text-center" data-toggle="collapse" @click="collapse('#'+element.id+'_nav')" role="button" aria-expanded="true">
                                                <em class="fas fa-caret-down"></em>
                                            </a>
                                        </p>
                                        <div :class="collapse_classes" :id="element.id+'_nav'">
                                            <div class="card card-body">
                                                <ul style="font-size: 14px;" v-for="(item, index) in element.nav_items" :key="index">
                                                    <li>
                                                        <a class="nav-link scrollto" :href="item[0].href" @click="resetSearch" v-text="item[0].title"></a>
                                                        <nav v-for="(thing, index) in item" :key="index" class="doc-sub-menu">
                                                            <a class="nav-link scrollto" :href="thing.href" @click="resetSearch" v-if="thing !== item[0]" v-text="thing.title"></a>
                                                        </nav>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                            
                                            <div v-for="(section, index) in element.sections" :key="index">
                                                <div :id="section.id" class="section-block" v-if="should_show(getAvailableParameters(section))">
                                                    <h1 class="section-title" v-text="section.title"></h1>
                                                    <h4 style="font-weight: normal !important;" v-html="section.description"></h4>
                                                    <h3 v-if="section.usage !== ''" v-text="'Hur '+section.title+' används:'"></h3>
                                                    <div class="code-block" v-if="section.usage !== ''">
                                                        <code v-html="section.usage"></code>
                                                    </div>
                                                    <div v-for="(sub_section, index) in section.sub_sections" :key="index">
                                                        <div :id="sub_section.id" class="sub-section">
                                                            <h2 class="sub-header" v-text="sub_section.title"></h2>
                                                            <h4 v-html="sub_section.description"></h4>
                                                            <div v-for="(example, index) in sub_section.examples" :key="index">
                                                                <app-code-example
                                                                        :title="example.title"
                                                                        :description="example.description"
                                                                        :lines="example.code_lines"
                                                                        :output="example.output_lines">
                                                                </app-code-example>
                                                                <p v-html="example.extra"></p>
                                                                <div v-if="example.callout">
                                                                    <app-callout :title="example.callout.title" :type="example.callout.type" :body="example.callout.body" :icon="example.callout.icon"></app-callout>
                                                                </div>
                                                                <br>
                                                                <br>
                                                            </div>
                                                        </div>
                                                        <hr>
                                                    </div>
                                                    <div v-for="(example, index) in section.examples" :key="index">
                                                        <app-code-example
                                                                :title="example.title"
                                                                :description="example.description"
                                                                :lines="example.code_lines"
                                                                :output="example.output_lines">
                                                        </app-code-example>
                                                        <p v-html="example.extra"></p>
                                                        <div v-if="example.callout">
                                                            <app-callout :title="example.callout.title" :type="example.callout.type" :body="example.callout.body" :icon="example.callout.icon"></app-callout>
                                                        </div>
                                                    </div>
                                                    <br>
                                                    <div v-html="section.content"></div>
                                                    <div v-for="(table, index) in section.tables" :key="index">
                                                        <div v-if="table.title === 'Nyckelord'">
                                                            <form class="form-inline search-form">
                                                                <input type="text" placeholder="Sök..." name="search" class="form-control search-input" v-model="keyword_search">
                                                            </form>
                                                        </div>
                                                        <app-table :ths="table.ths" :tbody="getParam(table.tbody)" :title="table.title"></app-table>
                                                    </div>
                                                    <hr>
                                                </div>
                                            </div>
                                    </section>
                                    <!--//doc-section-->
                                </div>
                                <!--//content-inner-->
                            </div>
                            <!--//doc-content-->
                            <div class="doc-sidebar col-md-3 col-12 order-0 d-none d-md-flex" style="height: auto">
                                <div id="doc-nav" class="doc-nav">
                                    <nav id="doc-menu" class="nav doc-menu flex-column sticky">
                                        <div class="main-search-box pt-sm-0 pb-sm-0" style="width: 15px;">
                                            <form class="form-inline search-form justify-content-right">
                                                <input type="text" placeholder="Sök..." name="search" class="form-control search-input" v-model="documentation_search" @input="performSearch(documentation_search)"  @keydown.enter.prevent="performSearch()">
                                            </form>
                                        </div>
                                        <div v-for="(link, index) in documentation_navs" :key="index">
                                            <a class="nav-link scrollto" :href="link.link" @click="resetSearch" v-text="link.title"></a>
                                        </div>
                                    </nav>
                                    <!--//doc-menu-->
                                </div>
                                <!--//doc-nav-->
                            </div>
                            <!--//doc-sidebar-->
                        </div>
                        <!--//doc-body-->
                        <div>
                            <Testa></Testa>
                            <app-footer-img></app-footer-img>
                        </div>
                    </div>
                    <!--//container-->
                </div>
                <!--//doc-wrapper-->
            </div>
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import AppFooter from "../components/app-footer";
    import AppFooterImg from "../components/app-footer-img";
    import AppTable from "../components/app-table";
    import AppCodeExample from "../components/app-code-example";
    import AppCallout from "../components/app-callout";
    import ScrollToTopBtn from "../components/ScrollToTop";
    import AppPageHeader from "../components/app-page-header";
    import Testa from "../components/Testa";
    export default {
        name: 'Dokumentation',
        components: {Testa, AppPageHeader, ScrollToTopBtn, AppCallout, AppCodeExample, AppTable, AppFooterImg, AppFooter},
        data() {
            return {
                collapse_classes: 'collapse show',
                documentation_navs: [
                    {
                        link: '#funktioner',
                        title: 'Funktioner',
                    },
                    {
                        link: '#variabler',
                        title: 'Variabler',
                    },
                    {
                        link: '#kontroll',
                        title: 'Kontroll',
                    },
                    {
                        link: '#nyckelord',
                        title: 'Nyckelord',
                    },
                    {
                        link: '#operatorer',
                        title: 'Operatorer',
                    },
                    {
                        link: '#avancerade_funktioner',
                        title: 'Avancerade funktioner',
                    },
                ],
                documentation_search: '',
                documentation_search_result_checker: false,
                keyword_search: '',
                keyword_table: [
                    {
                        title: 'Falskt',
                        description: 'Boolesk, sant',
                    },
                    {
                        title: 'Sant',
                        description: 'Boolesk, sant.',
                    },
                    {
                        title: 'annars',
                        description: 'Används efter <em>Om ()</em> och/eller <em>Anom ()</em>. Körs bara om <em>Om ()</em> -uttrycket och/eller<em>Anom ()</em> -uttrycket inte stämmer/är falskt.',
                    },
                    {
                        title: 'bryt',
                        description: 'Används i loopar. Bryter ut ur loopen och fortsätter programmet som vanligt. Används främst i <em>medan</em>-loopar.',
                    },
                    {
                        title: 'def',
                        description: 'Kort för: <em>definiera</em>. Används för att definiera/deklarera funktioner. Funktioner deklareras alltid högst upp i koden.',
                    },
                    {
                        title: 'fortsätt',
                        description: 'Används i loopar. Hoppar över resten av loopen och går vidare till början.',
                    },
                    {
                        title: 'inom',
                        description: 'Används i för-loopar: för $i, <strong>inom</strong> området(0,11) {}.',
                    },
                    {
                        title: 'matte_e',
                        description: 'Används för att få siffran <em>e</em>.',
                    },
                    {
                        title: 'matte_pi',
                        description: 'Används för att få <em>pi</em>.',
                    },
                    {
                        title: 'inte',
                        description: 'Används i <em>Om ()</em> och <em>Anom ()</em> "svänger om" en boolesk.',
                    },
                    {
                        title: 'returnera',
                        description: 'Används i funktioner när man ska returnera ett värde.',
                    },
                    {
                        title: 'töm (gammal)',
                        description: '<em>töm</em> är ett gammal nyckelord som inte längre rekommenderas. Använd istället töm-funktionen: <em>töm ()</em>.',
                    },
                    {
                        title: 'var (gammal)',
                        description: '<em>var</em> är ett gammal nyckelord som inte längre rekomenderas. Deklarera variabler så här: <em>$var = ""</em>.',
                    },
                    {
                        title: 'och',
                        description: '<em>och</em> kan användas i om/anom uttryck samt i medan-loopar. Och gör att man kan kolla om två uttryck stämmer.',
                    },
                    {
                        title: 'eller',
                        description: '<em>eller</em> kan användas i om/anom uttryck samt i medan-loopar. Och gör att man kan kolla om ett eller ett annat uttryck stämmer.',
                    },
                ],
                operators_table: [
                    {
                        title: '+',
                        description: 'Addition och sammanfogning, plus.',
                    },
                    {
                        title: '-',
                        description: 'Subtraktion, minus.',
                    },
                    {
                        title: '*',
                        description: 'Multiplikation, gånger.',
                    },
                    {
                        title: '/',
                        description: 'Division, snedstreck.',
                    },
                    {
                        title: '%',
                        description: 'Modulo, procent, procent tecken.',
                    },
                    {
                        title: '<',
                        description: 'Mindre än.',
                    },
                    {
                        title: '>',
                        description: 'Större än.',
                    },
                    {
                        title: '=',
                        description: 'Lika med.',
                    },
                    {
                        title: '==',
                        description: 'Kontroll -lika med.',
                    },
                    {
                        title: '!',
                        description: 'Inte, utropstecken',
                    },
                    {
                        title: '!=',
                        description: 'Inte lika med, utropstecken lika med',
                    },
                    {
                        title: '.',
                        description: 'Punkt',
                    },
                    {
                        title: ':',
                        description: 'Kolon',
                    },
                    {
                        title: ';',
                        description: 'Semikolon, slut',
                    },
                    {
                        title: ',',
                        description: 'Separator, kommatecken',
                    },
                    {
                        title: ')',
                        description: 'Funktionsslut, parentesslut',
                    },
                ],
                documentation_elements: [
                    {
                        title: 'Funktioner',
                        id: 'funktioner',
                        nav_items: [
                            [
                                {
                                    href: '#skriv',
                                    title: 'Skriv ()',
                                },
                            ],
                            [
                                {
                                    href: '#langd',
                                    title: 'Längd ()',
                                },
                            ],
                            [
                                {
                                    href: '#in',
                                    title: 'In ()',
                                },
                            ],
                            [
                                {
                                    href: '#tom',
                                    title: 'Töm ()',
                                },
                            ],
                            [
                                {
                                    href: '#typ',
                                    title: 'Typ ()',
                                },
                            ],
                            [
                                {
                                    href: '#text',
                                    title: 'Text ()',
                                },
                            ],
                            [
                                {
                                    href: '#nummer',
                                    title: 'Nummer ()',
                                },
                            ],
                            [
                                {
                                    href: '#bool',
                                    title: 'Bool ()',
                                },
                            ],
                            [
                                {
                                    href: '#decimal',
                                    title: 'Decimal ()',
                                },
                            ],
                            [
                                {
                                    href: '#lista',
                                    title: 'Lista ()',
                                },
                            ],
                            [
                                {
                                    href: '#versal',
                                    title: 'Versal ()',
                                },
                            ],
                            [
                                {
                                    href: '#gemen',
                                    title: 'Gemen ()',
                                },
                            ],
                            [
                                {
                                    href: '#runda',
                                    title: 'Runda ()',
                                },
                            ],
                            [
                                {
                                    href: '#till',
                                    title: 'Till ()',
                                },
                            ],
                            [
                                {
                                    href: '#bort',
                                    title: 'Bort ()',
                                },
                            ],
                            [
                                {
                                    href: '#infoga',
                                    title: 'Infoga ()',
                                },
                            ],
                            [
                                {
                                    href: '#index',
                                    title: 'Index ()',
                                },
                            ],
                            [
                                {
                                    href: '#sortera',
                                    title: 'Sortera ()',
                                },
                            ],
                            [
                                {
                                    href: '#dela',
                                    title: 'Dela ()',
                                },
                            ],
                            [
                                {
                                    href: '#foga',
                                    title: 'Foga ()',
                                },
                            ],
                            [
                                {
                                    href: '#blanda',
                                    title: 'Blanda ()',
                                },
                            ],
                            [
                                {
                                    href: '#ersätt',
                                    title: 'Ersätt ()',
                                },
                            ],
                            [
                                {
                                    href: '#slump',
                                    title: 'Slump ()',
                                },
                            ],
                            [
                                {
                                    href: '#slumpval',
                                    title: 'Slumpval ()',
                                },
                            ],
                            [
                                {
                                    href: '#arnum',
                                    title: 'Ärnum ()',
                                },
                            ],
                            [
                                {
                                    href: '#ardecimal',
                                    title: 'Ärdecimal ()',
                                },
                            ],
                            [
                                {
                                    href: '#abs',
                                    title: 'Abs ()',
                                },
                            ],
                            [
                                {
                                    href: '#tak_golv',
                                    title: 'Tak () & Golv ()',
                                },
                            ],
                            [
                                {
                                    href: '#fakultet',
                                    title: 'Fakultet ()',
                                },
                            ],
                            [
                                {
                                    href: '#sin_cos_tan',
                                    title: 'Sin (), Cos () & Tan()',
                                },
                            ],
                            [
                                {
                                    href: '#asin_acos_atan',
                                    title: 'Asin (), Acos() & Atan()',
                                },
                            ],
                            [
                                {
                                    href: '#potens',
                                    title: 'Potens ()',
                                },
                            ],
                            [
                                {
                                    href: '#kvadratrot',
                                    title: 'Kvadratrot ()',
                                },
                            ],
                            [
                                {
                                    href: '#log',
                                    title: 'Log ()',
                                },
                            ],
                            [
                                {
                                    href: '#grader_radianer',
                                    title: 'Grader () & Radianer ()',
                                },
                            ],
                            [
                                {
                                    href: '#oppna',
                                    title: 'Öppna ()',
                                },
                            ],
                            [
                                {
                                    href: '#las',
                                    title: 'Läs ()',
                                },
                            ],
                            [
                                {
                                    href: '#overfor',
                                    title: 'Överför ()',
                                },
                            ],
                        ],
                        sections: [
                            {
                                id: 'skriv',
                                title: 'Skriv ()',
                                description: `
			                            <em>Skriv ()</em> -funktionen skriver text och data till konsolen.
					             <em>Skriv ()</em> används för att ge utput.
			                     `,
                                usage: 'skriv (<em>[parametrar]</em>)',
                            },
                            {
                                id: 'langd',
                                title: 'Längd ()',
                                description: `
					             <em>Längd ()</em> -funktionen returnerar längden på data.
					             <em>Längd ()</em> kan användas för att få antalet tecken i en sträng, antalet siffror i en variabel eller antalet element i en lista.
					      `,
                                usage: 'längd (<em>[data]</em>)',
                            },
                            {
                                id: 'in',
                                title: 'In ()',
                                description: `
				                     <em>In ()</em> -funktionen tar in användarinput från konsolen.
				                     <em>In ()</em> används för att göra program interaktiva.
					      `,
                                usage: 'in (<em>[titel]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            '$namn = in ("Skriv ditt namn: ")',
                                            'skriv ($namn)',
                                        ],
                                        output_lines: [
                                            'Skriv ditt namn: Edvard',
                                            'Edvard'
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'tom',
                                title: 'Töm ()',
                                description: `
				                     <em>Töm ()</em> -funktionen tömmer konsolen.
					             Det kan vara praktiskt om ditt program behöver visa mycket information.
					      `,
                                usage: 'töm ()',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv ("Hej, Världen!")',
                                            'töm()',
                                            'skriv ("Hej")',
                                        ],
                                        output_lines: [
                                            'Hej',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'text',
                                title: 'Text ()',
                                description: `
					             <em>Text ()</em> -funktionen konverterar data till text/sträng -datatypen.
					             <em>Text ()</em> kan användas då du behöver sammanfoga en sträng och en siffra.
					      `,
                                usage: 'Text (<em>[data]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$num = 2',
                                            'skriv ("Nummer: "+$num)',
                                        ],
                                        output_lines: [
                                            'Typfel (rad 2)',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 2',
                                        code_lines: [
                                            '$num = 2',
                                            'skriv ("Nummer: "+Text($num))',
                                        ],
                                        output_lines: [
                                            'Nummer: 2',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'nummer',
                                title: 'Nummer ()',
                                description: `
					             <em>Nummer ()</em> -funktionen konverterar data till nummerdatatypen.
					             <em>Nummer ()</em> kan användas då du behöver räkna med siffror och med strängar med siffror.
					      `,
                                usage: 'Nummer (<em>[data]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$num = "2"',
                                            'skriv (1+$num)',
                                        ],
                                        output_lines: [
                                            'Typfel (rad 2)',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 2',
                                        code_lines: [
                                            '$num = "2"',
                                            'skriv (1+Nummer($num))',
                                        ],
                                        output_lines: [
                                            '3',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'bool',
                                title: 'Bool ()',
                                description: `
					             <em>Bool ()</em> -funktionen konverterar data till booleskdatatypen.
					      `,
                                usage: 'Bool (<em>[data]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (Bool(1))',
                                            'skriv (Bool(0))',
                                        ],
                                        output_lines: [
                                            'Sant',
                                            'Falskt',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'decimal',
                                title: 'Decimal ()',
                                description: `
					             <em>Decimal ()</em> -funktionen konverterar data till decimaldatatypen.
					      `,
                                usage: 'Decimal (<em>[data]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$var = "1.2"',
                                            'skriv ($var+1)',
                                        ],
                                        output_lines: [
                                            'Typfel (rad 2)',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 2',
                                        code_lines: [
                                            '$var = "1.2"',
                                            'skriv (Decimal($var)+1)',
                                        ],
                                        output_lines: [
                                            '2.2',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'lista',
                                title: 'Lista ()',
                                description: `
					             <em>Lista ()</em> -funktionen konverterar data till en lista.
					      `,
                                usage: 'Lista (<em>[data]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            '$var = "hej"',
                                            'skriv (Lista($var))',
                                        ],
                                        output_lines: [
                                            '["h", "e", "j"]',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'versal',
                                title: 'Versal ()',
                                description: `
					             <em>Versal ()</em> -funktionen konverterar text till versaler (stora bokstäver).
					      `,
                                usage: '<em>[sträng]</em>.versal()',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (Versal("hej"))',
                                        ],
                                        output_lines: [
                                            'HEJ',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'gemen',
                                title: 'Gemen ()',
                                description: `
					             <em>Gemen ()</em> -funktionen konverterar text till gemener (små bokstäver).
					      `,
                                usage: '<em>[sträng]</em>.gemen()',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (Gemen("HEJ"))',
                                        ],
                                        output_lines: [
                                            'hej',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'runda',
                                title: 'Runda ()',
                                description: `
					             <em>Runda ()</em> -funktionen avrundar decimaltal till närmaste heltal.
					             <em>Du kan också avrunda till ett decimaltal genom att specificera antalet decimaler.</em>
					      `,
                                usage: 'runda (<em>[decimaltal], [antalet decimaler]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            'skriv (runda(1.2))',
                                        ],
                                        output_lines: [
                                            '1',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 2',
                                        code_lines: [
                                            'skriv (runda(8.5673, 3))',
                                        ],
                                        output_lines: [
                                            '8.567',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'till',
                                title: 'Till ()',
                                description: `
					             <em>Till ()</em> -funktionen används för att lägga till element i listor.
					      `,
                                usage: '$lista.till(<em>[data]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            '$lista = ["a", "b"]',
                                            'skriv ($lista)',
                                            '$lista.till("c")',
                                            'skriv ($lista)',
                                        ],
                                        output_lines: [
                                            '["a", "b"]',
                                            '["a", "b", "c"]',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'bort',
                                title: 'Bort ()',
                                description: `
					             <em>Bort ()</em> -funktionen används för att ta bort element från listor.
					      `,
                                usage: '$lista.bort(<em>[indexnummer]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            '$lista = ["a", "b"]',
                                            'skriv ($lista)',
                                            '$lista.bort(1)',
                                            'skriv ($lista)',
                                        ],
                                        output_lines: [
                                            '["a", "b"]',
                                            '["a"]',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'infoga',
                                title: 'Infoga ()',
                                description: `
					             <em>Infoga ()</em> -funktionen används för att infoga ett element i en lista till en specificerad plats.
					      `,
                                usage: '$lista.infoga(<em>[index, element]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            '$lista = ["a", "b"]',
                                            'skriv ($lista)',
                                            '$lista.infoga(1, "c")',
                                            'skriv ($lista)',
                                        ],
                                        output_lines: [
                                            '["a", "b"]',
                                            '["a", "c", "b"]',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'index',
                                title: 'Index ()',
                                description: `
					             <em>Index ()</em> -funktionen används för att ta reda på vad indexnumret är för ett element i en lista.
					      `,
                                usage: '$lista.index(<em>[element]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            '$lista = ["a", "b", "c"]',
                                            'skriv ($lista.index("a"))',
                                            'skriv ($lista.index("c"))',
                                            'skriv ($lista.index("b"))',
                                        ],
                                        output_lines: [
                                            '0',
                                            '2',
                                            '1',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'sortera',
                                title: 'Sortera ()',
                                description: `
					             <em>Sortera ()</em> -funktionen används för att sortera data.
					      `,
                                usage: 'sortera(<em>[data]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$lista = ["a", "c", "b"]',
                                            'skriv (sortera($lista))',
                                        ],
                                        output_lines: [
                                            '["a", "b", "c"]',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 2',
                                        code_lines: [
                                            '$lista = [1, 10, 2, 0]',
                                            'skriv (sortera($lista))',
                                        ],
                                        output_lines: [
                                            '[0, 1, 2, 10]',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'dela',
                                title: 'Dela ()',
                                description: `
					             <em>Dela ()</em> -funktionen används för att konvertera en sträng till en lista. Du kan specificera separatorn, standard är blanksteg.
					             Du kan också specificera hur lång du vill att listan ska vara.
					      `,
                                usage: '$sträng.dela(<em>[separator], [längd]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$sträng = "Hej världen"',
                                            'skriv ($sträng.dela())',
                                        ],
                                        output_lines: [
                                            '["Hej", "världen"]',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 2',
                                        code_lines: [
                                            '$sträng = "1,2,3,4"',
                                            'skriv ($sträng.dela(","))',
                                        ],
                                        output_lines: [
                                            '["1", "2", "3", "4"]',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 3',
                                        code_lines: [
                                            '$sträng = "1,2,3,4"',
                                            'skriv ($sträng.dela(",", 2))',
                                        ],
                                        output_lines: [
                                            '["1", "2", "3,4"]',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'foga',
                                title: 'Foga ()',
                                description: `
					             <em>Foga ()</em> -funktionen är raka motsatsen till dela(). Foga <em>fogar</em> ihop listor till strängar.
					      `,
                                usage: '<em>[separator]</em>.foga([lista])',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$lista = ["a", "b", "c"]',
                                            'skriv ("".foga($lista))',
                                        ],
                                        output_lines: [
                                            'abc',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$lista = ["a", "b", "c"]',
                                            'skriv (",".foga($lista))',
                                        ],
                                        output_lines: [
                                            'a,b,c',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$lista = ["a", "b", "c"]',
                                            'skriv (" -*- ".foga($lista))',
                                        ],
                                        output_lines: [
                                            'a -*- b -*- c',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'blanda',
                                title: 'Blanda ()',
                                description: `
					             <em>Blanda ()</em> -funktionen används för att blanda en lista slumpmässigt.
					      `,
                                usage: '<em>[lista]</em>.blanda()',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            '$lista = ["a", "c", "b"]',
                                            'skriv ($lista.blanda())',
                                            'skriv ($lista.blanda())',
                                        ],
                                        output_lines: [
                                            '["a", "c", "b"]',
                                            '["c", "a", "b"]',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'ersatt',
                                title: 'Ersätt ()',
                                description: `
					             <em>Ersätt ()</em> -funktionen används för att ersätta tecken i strängar.
					      `,
                                usage: '<em>[sträng]</em>.ersätt(<em>[tecken]</em>, <em>[ersättning]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$var = "Haj!"',
                                            '$var = $var.ersätt("a", "e")',
                                            'skriv ($var)',
                                        ],
                                        output_lines: [
                                            'Hej!',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 2',
                                        code_lines: [
                                            '$var = "Hej!"',
                                            '$var = $var.ersätt("!", "")',
                                            'skriv ($var)',
                                        ],
                                        output_lines: [
                                            'Hej',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'slump',
                                title: 'Slump ()',
                                description: `
					             <em>Slump ()</em> -funktionen används för att generera slumpmässiga heltal.
					      `,
                                usage: 'slump(<em>[start]</em>, <em>[slut]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (slump(0, 2))',
                                            'skriv (slump(0, 2))',
                                            'skriv (slump(0, 2))',
                                        ],
                                        output_lines: [
                                            '2',
                                            '0',
                                            '1',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'slumpval',
                                title: 'Slumpval ()',
                                description: `
					             <em>Slumpval ()</em> -funktionen används för att generera slumpmässiga heltal.
					      `,
                                usage: 'slump(<em>[start]</em>, <em>[slut]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (slump(0, 2))',
                                            'skriv (slump(0, 2))',
                                            'skriv (slump(0, 2))',
                                        ],
                                        output_lines: [
                                            '2',
                                            '0',
                                            '1',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'arnum',
                                title: 'Ärnum ()',
                                description: `
					             <em>Ärnum ()</em> -funktionen används för att kolla om en sträng är en siffra.
					      `,
                                usage: '<em>[data]</em>.ärnum()',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$nummer = 2',
                                            'skriv ($nummer.ärnum())',
                                        ],
                                        output_lines: [
                                            'Attributfel (rad 2)',
                                        ],
                                    },
                                    {
                                        title: 'Exempel 2',
                                        code_lines: [
                                            '$nummer = "2"',
                                            'skriv ($nummer.ärnum())',
                                        ],
                                        output_lines: [
                                            'Sant',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'abs',
                                title: 'Abs ()',
                                description: `
					             <em>Abs ()</em> -funktionen används för att få det absoluta värdet av ett tal. Talet kan vara ett heltal eller decimaltal.
					      `,
                                usage: 'abs(<em>[tal]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            '$nummer = -2',
                                            'skriv (abs($nummer))',
                                        ],
                                        output_lines: [
                                            '2',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'tak_golv',
                                title: 'Tak () & Golv ()',
                                description: `
					             <em>Tak ()</em> -funktionen returnerar det minsta heltalet som inte är mindre än det tal som matats in.
					             <br>
					             <em>Golv ()</em> -funktionen returnerar det största heltalet som inte är större än det tal som matats in.
					      `,
                                usage: 'tak(<em>[tal]</em>)<br>golv(<em>[tal]</em>)',
                                examples: [
                                    {
                                        title: 'Tak () Exempel 1',
                                        code_lines: [
                                            'skriv (tak(300.72))',
                                        ],
                                        output_lines: [
                                            '3001.0',
                                        ],
                                    },
                                    {
                                        title: 'Tak () Exempel 2',
                                        code_lines: [
                                            'skriv (tak(-23.11))',
                                        ],
                                        output_lines: [
                                            '-23.0',
                                        ],
                                    },
                                    {
                                        title: 'Golv () Exempel 1',
                                        code_lines: [
                                            'skriv (golv(300.72))',
                                        ],
                                        output_lines: [
                                            '300.0',
                                        ],
                                    },
                                    {
                                        title: 'Golv () Exempel 2',
                                        code_lines: [
                                            'skriv (golv(-23.11))',
                                        ],
                                        output_lines: [
                                            '-24.0',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'fakultet',
                                title: 'Fakultet ()',
                                description: `
					             <em>Fakultet ()</em> -funktionen returnerar fakulteten för det tal som matas in.
					             <br>
					             För ett heltal större än noll är fakulteten lika med produkten av alla heltal från 1 upp till och med talet självt.
					      `,
                                usage: 'fakultet(<em>[tal]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        code_lines: [
                                            'skriv (fakultet(23))',
                                        ],
                                        output_lines: [
                                            '25852016738884976640000',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'sin_cos_tan',
                                title: 'Sin (), Cos () & Tan()',
                                description: `
					             <em>Sin ()</em> -funktionen returnerar sinus för det tal som matas in.
					             <br>
					             <em>Cos ()</em> -funktionen returnerar cosinus för det tal som matas in.
					             <br>
					             <em>Tan ()</em> -funktionen returnerar tangens för det tal som matas in.
					             <br>
					      `,
                                usage: 'sin/cos/tan(<em>[tal]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (sin(3))',
                                            'skriv (cos(3))',
                                            'skriv (tan(3))',
                                        ],
                                        output_lines: [
                                            '0.1411200080598672',
                                            '-0.9899924966004454',
                                            '-0.1425465430742778'
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'asin_acos_atan',
                                title: 'Asin (), Acos () & Atan()',
                                description: `
					             <em>Asin ()</em> -funktionen returnerar bågsinus för det tal som matas in.
					             <br>
					             <em>Acos ()</em> -funktionen returnerar bågcosinus för det tal som matas in.
					             <br>
					             <em>Atan ()</em> -funktionen returnerar bågtangens för det tal som matas in.
					             <br>
					      `,
                                usage: 'asin/acos/atan(<em>[tal]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (asin(0.64))',
                                            'skriv (acos(0.64))',
                                            'skriv (atan(0.64))',
                                        ],
                                        output_lines: [
                                            '0.694498265626556',
                                            '0.8762980611683406',
                                            '0.5693131911006619'
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'potens',
                                title: 'Potens ()',
                                description: `
					             <em>Potens ()</em> -funktionen returnerar resultatet av det första talet upphöjt till det andra talet.
					      `,
                                usage: 'potens(<em>[tal], [uphöjt till]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (potens(4, 3))',
                                        ],
                                        output_lines: [
                                            '64',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'kvadratrot',
                                title: 'Kvadratrot ()',
                                description: `
					             <em>Kvadratrot ()</em> -funktionen används för att få kvadratroten av ett tal.
					      `,
                                usage: 'kvadratrot(<em>[tal]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (kvadratrot(10))',
                                        ],
                                        output_lines: [
                                            '3.1622776601683795',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'log',
                                title: 'Log ()',
                                description: `
					             <em>Abs ()</em> -funktionen returnerar logaritmen för ett tal.
					             <br>
					             Logaritmen för ett tal <em>a</em> är den exponent <em>x</em> till vilket ett givet tal, med basen <em>b</em>, måste upphöjas för att anta värdet <em>a</em>.
					      `,
                                usage: 'log(<em>[tal]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (log(10))',
                                        ],
                                        output_lines: [
                                            '2.302585092994046',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'grader',
                                title: 'Grader ()',
                                description: `
					             <em>Grader ()</em> -funktionen används för att konvertera radianer till grader.
					      `,
                                usage: 'grader(<em>[tal]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (grader(180))',
                                        ],
                                        output_lines: [
                                            '10313.240312354817',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'radianer',
                                title: 'Radianer ()',
                                description: `
					             <em>Radianer ()</em> -funktionen används för att konvertera grader till radianer.
					      `,
                                usage: 'radianer(<em>[tal]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (radianer(10313.240312354817))',
                                        ],
                                        output_lines: [
                                            '180.0',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'datum',
                                title: 'Datum ()',
                                description: `
					             <em>Datum ()</em> -funktionen används för att .
					      `,
                                usage: 'datum(<em>[x]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (datum(x))',
                                        ],
                                        output_lines: [
                                            'x',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'veckodag',
                                title: 'Veckodag ()',
                                description: `
					             <em>Veckodag ()</em> -funktionen används för att .
					      `,
                                usage: 'veckodag(<em>[x]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (veckodag(x))',
                                        ],
                                        output_lines: [
                                            'x',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'epok',
                                title: 'Epok ()',
                                description: `
					             <em>Epok ()</em> -funktionen används för att .
					      `,
                                usage: 'epok(<em>[x]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (epok(x))',
                                        ],
                                        output_lines: [
                                            'x',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'tid',
                                title: 'Tid ()',
                                description: `
					             <em>Tid ()</em> -funktionen används för att .
					      `,
                                usage: 'tid(<em>[x]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (tid(x))',
                                        ],
                                        output_lines: [
                                            'x',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'nu',
                                title: 'Nu ()',
                                description: `
					             <em>Nu ()</em> -funktionen används för att .
					      `,
                                usage: 'nu(<em>[x]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (nu(x))',
                                        ],
                                        output_lines: [
                                            'x',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'idag',
                                title: 'Idag ()',
                                description: `
					             <em>Idag ()</em> -funktionen används för att .
					      `,
                                usage: 'idag(<em>[x]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'skriv (idag(x))',
                                        ],
                                        output_lines: [
                                            'x',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'oppna',
                                title: 'Öppna ()',
                                description: `
					             <em>Öppna ()</em> -funktionen används för att öppna textfiler. Funktionen tar in två argument: ett filnamn/sökväg och ett läge som antingen kan vara 'l' för <em>läs</em> eller 'ö' för <em>överför</em>. Man kan också lägga till ett + för att skapa filen om den inte hittas, t.ex. <em>l+</em>.
					      `,
                                usage: 'öppna(<em>[fil]</em>, [läge]<em>)som $fil {}',
                            },
                            {
                                id: 'las',
                                title: 'Läs ()',
                                description: `
					             <em>Läs ()</em> -funktionen används för att läsa från öppna texfiler.
					      `,
                                usage: '<em>[fil]</em>.läs()',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        description: 'Här är ett exemel på hur man läser från en fil. I detta exempel har vi en fil som heter: fil.txt och den innehåller texten: Hej, Världen!.',
                                        code_lines: [
                                            'öppna ("fil.txt", "l")som $fil {',
                                            '     skriv ($fil.läs())',
                                            '}'
                                        ],
                                        output_lines: [
                                            'Hej, Världen!',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'overfor',
                                title: 'Överför ()',
                                description: `
					             <em>Överför ()</em> -funktionen används för att överföra/skriva text till en öppen textfil.
					      `,
                                usage: '<em>[fil]</em>.överför(<em>[data]</em>)',
                                examples: [
                                    {
                                        title: 'Exempel',
                                        code_lines: [
                                            'öppna ("fil.txt", "l")som $fil {',
                                            '     skriv ($fil.läs())',
                                            '     skriv ($fil.skriv("ny text"))',
                                            '     skriv ($fil.läs())',
                                            '}'
                                        ],
                                        output_lines: [
                                            'Hej, Världen!',
                                            'ny text!',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: 'Variabler',
                        id: 'variabler',
                        nav_items: [
                            [
                                {
                                    href: '#strang',
                                    title: 'Sträng',
                                },
                            ],
                            [
                                {
                                    href: '#nummervariabel',
                                    title: 'Nummer',
                                },
                            ],
                            [
                                {
                                    href: '#lista',
                                    title: 'Lista',
                                },
                            ],
                            [
                                {
                                    href: '#lexikon',
                                    title: 'Lexikon',
                                },
                            ],
                            [
                                {
                                    href: '#boolesk',
                                    title: 'Boolesk',
                                },
                            ],
                            [
                                {
                                    href: '#funktionvariabel',
                                    title: 'Funktion',
                                },
                            ],
                        ],
                        sections: [
                            {
                                id: 'strang',
                                title: 'Strängvariabler',
                                description: `
			                            <em>Text/Sträng</em> -variabler deklareras med enkla eller dubbla citattecken.
			                            En sträng kan innehålla bokstäver, tecken och siffror.
			                     `,
                                usage: '$variabel = <em>"[text]"</em>',
                            },
                            {
                                id: 'nummervariabel',
                                title: 'Nummervariabler',
                                description: `
			                            Nummervariabler kan innehålla heltal eller decimaltal.
			                     `,
                                usage: '$variabel = <em>[heltal]</em>',
                            },
                            {
                                id: 'lista',
                                title: 'Listor',
                                description: `
			                            <em>Listor</em> är en variabeldatatyp där du kan spara flera texter, mummer etc. i samma variabel och under samma variabelnamn.
			                            Listor deklareras med fyrkantiga parenteser, alltså [ och ]. Saker i listor kallas för <em>element</em> och de separeras med kommatecken.
			                     `,
                                usage: '$variabel = <em>["a", 1]</em>',
                            },
                            {
                                id: 'lexikon',
                                title: 'Lexikon',
                                description: `
			                            <em>Lexikon</em> är en variabeldatatyp som fungera lite som listor men med den skillnaden att istället för att ge alla element en index har de en nyckel.
			                            Lexikon deklareras med krulliga parenteser, alltså { och }, varje element beskrivs först med en <em>nyckel</em> följt av ett kolon och sedan ett <em>värde</em> för elementet.
			                     `,
                                usage: '$variabel = <em>{"a": "alpha", "b": "beta", "namn": "Edvard"}</em>',
                                sub_sections: [
                                    {
                                        id: 'lexikon-ex-1',
                                        title: 'Exempel',
                                        examples: [
                                            {
                                                title: 'Hur lexikon fungerar',
                                                code_lines: [
                                                    '$var = {"a": "alpha", "b": "beta", "namn": "Edvard"}',
                                                    'skriv ($var["a"])',
                                                    'skriv ($var["namn"])',
                                                ],
                                                output_lines: [
                                                    'alpha',
                                                    'Edvard'
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'boolesk',
                                title: 'Booleskvariabler',
                                description: `
			                            <em>Boolesk</em> -variabler är något som antingen är <em>Sant</em> eller <em>Falskt</em>.
			                     `,
                                usage: '$variabel = <em>Sant</em><br>$variabel = <em>Falskt</em>',
                            },
                            {
                                id: 'funktionvariabel',
                                title: 'Funktionsvariabler',
                                description: `
			                            Man kan deklarera variabler vars data är det som <em>returneras</em> av olika funktioner.
			                            Här används <em>in()</em> som exempel men det finns många andra funktioner som kan användas på samma sätt.
			                     `,
                                usage: '$variabel = <em>in()</em>',
                            },
                        ],
                    },
                    {
                        title: 'Kontroll',
                        id: 'kontroll',
                        nav_items: [
                            [
                                {
                                    href: '#om_annars_anom',
                                    title: 'Om, Annars & Anom',
                                },
                                {
                                    href: '#om',
                                    title: 'Om ()',
                                },
                                {
                                    href: '#annars',
                                    title: 'Annars',
                                },
                                {
                                    href: '#anom',
                                    title: 'Anom ()',
                                },
                            ],
                            [
                                {
                                    href: '#ternara_operatorer',
                                    title: 'Ternära operatorer',
                                },
                            ],
                            [
                                {
                                    href: '#loopar',
                                    title: 'Loopar',
                                },
                                {
                                    href: '#for',
                                    title: 'För-loop',
                                },
                                {
                                    href: '#medan',
                                    title: 'Medan-loop',
                                },
                                {
                                    href: '#loop_nyckelord',
                                    title: 'Nyckelord',
                                },
                            ],
                            [
                                {
                                    href: '#anvandar_funktioner',
                                    title: 'Funktioner',
                                },
                            ],
                            [
                                {
                                    href: '#klasser',
                                    title: 'Klasser',
                                },
                            ],
                        ],
                        sections: [
                            {
                                id: 'om_annars_anom',
                                title: 'Om, Annars & Anom',
                                description: `
			                            <em>Om ()</em>, <em>Annars</em> och <em>Anom ()</em> går hand i hand och fungerar tillsammans. <em>Om ()</em> låter dig testa olika saker. Du kan t.ex. kolla om en variabel är lika med en annan variabel, om ett nummer är större än ett annat nummer osv. Om uttrycket i <em>Om ()</em> stämmer körs koden inuti <em>Om ()</em> -parenteserna <em>{}</em> medan koden inuti <em>Annars ()</em> -parenteser <em>{}</em> bara körs om uttrycket i <em>Om ()</em> är falsk/inte stämmer. Du kan också använda dig av <em>Anom ()</em> som är en kombination av om och annars, <em>Anom ()</em> fungerar på samma sätt som <em>Om ()</em> men körs bara (fastän uttrycket stämmer) om <em>Om ()</em> inte stämmer/är falskt. Du kan bara använda <em>Annars</em> och <em>Anom ()</em> om du också använder <em>Om ()</em>, men du kan använda <em>Om ()</em> ensamt.
			                     `,
                                usage: 'om ([uttryck]), annars, anom ([uttryck])',
                                sub_sections: [
                                    {
                                        id: 'om',
                                        title: 'Om ()',
                                        examples: [
                                            {
                                                title: 'Exempel 1',
                                                code_lines: [
                                                    '$var = Sant',
                                                    'om ($var == Sant) {',
                                                    '  skriv ("Sant!")',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    'Sant!',
                                                ],
                                            },
                                            {
                                                title: 'Exempel 2',
                                                code_lines: [
                                                    '$var = Falskt',
                                                    'om ($var == Sant) {',
                                                    '  skriv ("Sant!")',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    '',
                                                ],
                                            },
                                            {
                                                title: 'Exempel 3',
                                                description: 'Du kan använda dig av nyckelorden: <em>och</em> & <e>eller</e> i om och anom -uttryck.',
                                                code_lines: [
                                                    '$var = Sant',
                                                    'om ($var == Sant och längd($var) == 3) {',
                                                    '  skriv ("Sant!")',
                                                    '} annars {',
                                                    '  skriv ("Falskt!")',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    'Falskt!',
                                                ],
                                            },
                                            {
                                                title: 'Exempel 4',
                                                code_lines: [
                                                    '$var = Sant',
                                                    'om (längd($var) == Sant eller längd($var) == 3) {',
                                                    '  skriv ("Sant!")',
                                                    '} annars {',
                                                    '  skriv ("Falskt!")',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    'Sant!',
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        id: 'annars',
                                        title: 'Annars',
                                        examples: [
                                            {
                                                title: 'Exempel 1',
                                                code_lines: [
                                                    'annars {',
                                                    '  skriv ("Falskt")',
                                                    '}',
                                                ],
                                            },
                                            {
                                                title: 'Exempel 2',
                                                code_lines: [
                                                    '$var = Falskt',
                                                    'om ($var == Sant) {',
                                                    '  skriv ("Sant!")',
                                                    '} annars {',
                                                    '     skriv ("Falskt!")',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    'Falskt!',
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        id: 'anom',
                                        title: 'Anom ()',
                                        examples: [
                                            {
                                                title: 'Exempel 1',
                                                code_lines: [
                                                    'anom ($var == Falskt {',
                                                    '  skriv ("Falskt")',
                                                    '}',
                                                ],
                                            },
                                            {
                                                title: 'Exempel 2',
                                                code_lines: [
                                                    '$var = Falskt',
                                                    'om ($var == Sant) {',
                                                    '  skriv ("Sant!")',
                                                    '} anom ($var == Falskt) {',
                                                    '     skriv ("Falskt!")',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    'Falskt!',
                                                ],
                                            },
                                            {
                                                title: 'Exempel 3',
                                                code_lines: [
                                                    '$var = "hej"',
                                                    'om ($var == "Hej") {',
                                                    '  skriv ("Hej")',
                                                    '} anom ($var == "hej!") {',
                                                    '  skriv ("hej!")',
                                                    '} annars {',
                                                    '  skriv ("Inte Hej eller hej!")',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    'Inte Hej eller hej!',
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'ternara_operatorer',
                                title: 'Ternära opertorer',
                                description: `
			                            <em>Ternära operatorer</em> är ett sätt att använda om- och annars-uttryck på en rad.
			                     `,
                                usage: '[värde för sant] om [uttryck] annars [värde för falskt]',
                                sub_sections: [
                                    {
                                        id: 'ternara_operatorer_exempel',
                                        title: 'Exempel',
                                        examples: [
                                            {
                                                title: 'Skriv en hälsning om ett namn givits.',
                                                code_lines: [
                                                    '$namn = in("Skriv ditt namn: ")',
                                                    'skriv ("Hej" + $namn om $namn != "" annars "")',
                                                ],
                                                output_lines: [
                                                    'Skriv ditt namn: Jonas',
                                                    'Hej Jonas',
                                                    'Skriv ditt namn: ',
                                                    '',
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'loopar',
                                title: 'Loopar',
                                description: `
			                            <em>Loopar</em> är funktioner som gör samma sak om och om igen. Enkelt har två typer av loopar: <em>för</em> och <em>medan</em>.
			                            Man kan delvis använda looparna för samma sak men vissa saker är bättre med den ena eller den andra.
			                            //tips En bra sak att göra om man har svårt att förstå hur loopar fungerar är att läsa vad det står som en mening eller en instruktion (se exemplen nedan)//
			                     `,
                                usage: '',
                                sub_sections: [
                                    {
                                        id: 'for',
                                        title: 'För-loop',
                                        description: 'För-loopen styrs av <em>ett</em> villkor och upprepar sig tills villkoret inte längre är uppfyllt. För-loopen kan också användas för att loopa igenom en lista.',
                                        examples: [
                                            {
                                                title: 'Exempel 1',
                                                description: 'Här är en för loop som skriver ut siffrorna 0 -> 10. I för-loopen har man en variabel som ändras, man brukar ofta kalla den variabeln för <em>i</em>',
                                                code_lines: [
                                                    'för ($i; inom området(0,11)) {',
                                                    '  skriv ($i)',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    '0',
                                                    '1',
                                                    '2',
                                                    '3',
                                                    '4',
                                                    '5',
                                                    '6',
                                                    '7',
                                                    '8',
                                                    '9',
                                                    '10',
                                                ],
                                                extra: 'Lägg märke till att om man vill skriva till 10 måste man skriva <em>området(0,11)</em> om man istället skulle skriva <em>området(0,10)</em> skulle loopen bara skriva till 9!',
                                                callout: {
                                                    type: 'success',
                                                    title: 'Tips!',
                                                    body: 'Märker du att man kan läsa vad loopen gör så här: <em>för i inom området 0 till 11, skriv i</em>.',
                                                    icon: 'fas fa-info',
                                                },
                                            },
                                            {
                                                title: 'Exempel 2',
                                                description: 'Här är en för-loop som loopar genom alla element i en lista',
                                                code_lines: [
                                                    '$lista = ["a", "b", "c"]',
                                                    'för ($ak; inom $lista) {',
                                                    '  skriv ($sak)',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    'a',
                                                    'b',
                                                    'c',
                                                ],
                                            },
                                            {
                                                title: 'Exempel 3',
                                                description: 'Här är en för-loop som loopar genom alla element i en lista samt numrerar elementen',
                                                code_lines: [
                                                    '$lista = ["a", "b", "c"]',
                                                    'för ($index, $sak; inom numrera($lista)) {',
                                                    '  skriv ($sak)',
                                                    '  skriv ($index)',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    'a',
                                                    '0',
                                                    'b',
                                                    '1',
                                                    'c',
                                                    '2',
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        id: 'medan',
                                        title: 'Medan-loop',
                                        description: 'Medan-loopen är väldigt lik för-loopen men med en liten skillnad. För-loopar gör någonting <em>för</em> t.ex. varje nummer inom ett områden, medan medan-loppen gör något <em>medan</em> något är sant/stämmer.',
                                        examples: [
                                            {
                                                title: 'Exempel 1',
                                                description: 'Här är en medan-loop som räknar upp siffrorna 0 -> 10',
                                                code_lines: [
                                                    '$i = 0',
                                                    'medan ($i < 10) {',
                                                    '     skriv ($i)',
                                                    '}',
                                                ],
                                                output_lines: [
                                                    '0',
                                                    '1',
                                                    '2',
                                                    '3',
                                                    '4',
                                                    '5',
                                                    '6',
                                                    '7',
                                                    '8',
                                                    '9',
                                                    '10',
                                                ],
                                                extra: 'Lägg märke till att man här också kan läsa loopen rakt: <em>medan i är mindre än 10, skriv i</em>',
                                            },
                                        ],
                                    },
                                    {
                                        id: 'loop_nyckelord',
                                        title: 'Nyckelord (loopar)',
                                        description: `
							             Det finns några nyckelord du kan använda dig av i loopar. Dessa är:
							             <ul>
										<li><em>Bryt</em></li>
										<li><em>Fortsätt</em></li>
									</ul>
									<br>
									<h5 style="text-decoration: underline">Bryt</h5>
									<p><em>Bryt</em> används då du vill bryta dig ut från en loop. Då du skriver <em>bryt</em> inuti en loop so avslutas loopen och programmet fortsätter som vanligt utanför/efter loopen.</p>
									<br>
									<h5 style="text-decoration: underline">Fortsätt</h5>
									<p><em>Fortsätt</em> är nästan motsatsen till bryt, loopen fortsätter men hoppar över resten av loopen. Fortsätt är något man inte behöver använda hemskt mycket och för det mesta kan man skriva om loopen så att fortsät inte behöver använda.</p>
							      `,
                                    },
                                ],
                                content: ``,
                            },
                            {
                                id: 'anvandar_funktioner',
                                title: 'Funktioner',
                                description: `
					             En funktion är som en maskin som tar in <em>parametrar</em> som kallas för argument. Argument kan vara vilken datatyp som helst (sträng, heltal, lista, osv.).
					             Funktionen använder sedan dessa argument och antingen <em>returnerar</em> funktionen något eller så utför den sin uppgift utan att returnera något. Man förstår bättre hur funktioner fungerar med att se på exempel.
					             <br>
					             <br>
					             När man vill returnera något så använder man nyckelordet returnera + det man vill returnera:  <em>returnera [något att returnera]</em>
					      `,
                                usage: 'def funktionsnamn([parametrar]) {}',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        description: 'Här är en funktion som adderar ihop två nummer',
                                        code_lines: [
                                            'def addition($num_a, $num_b) {',
                                            '     returnera $num_a+$num_b',
                                            '}',
                                            'skriv (addition(1, 2))',
                                        ],
                                        output_lines: [
                                            '3',
                                        ],
                                        callout: {
                                            type: 'warning',
                                            title: 'OBS!',
                                            body: 'Märkt att funktioner deklareras högst upp i koden!',
                                            icon: 'fas fa-exclamation',
                                        },
                                    },
                                    {
                                        title: 'Exempel 2',
                                        description: 'Här är en funktion som skriver ut text',
                                        code_lines: [
                                            'def skrivare($text) {',
                                            '     skriv ($text)',
                                            '}',
                                            'skrivare("Hej, Världen!")',
                                        ],
                                        output_lines: [
                                            'Hej, Världen!',
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'klasser',
                                title: 'Klasser',
                                description: `
					             <em>Klasser</em> är ett lite mer kolpicerat koncept inom programmering men de är väldigt användbara och öppnar upp en helt ny värld av möjlighetet med så kallad <i>Objektorienterad</i> programmering.
					             En klass är egentligen ett block med funktioner som är relaterade. När man talar om klasser talar man ofta om <em>objekt</em> och de är också i den kontexten som den här dokumentationen kommer att följa.
					             
					             Ett objekt är en samling funktioner och värden som kan användas som en sorts ritning (exempel följer:)
					      `,
                                usage: 'klass klassensNamn {}',
                                examples: [
                                    {
                                        title: 'Exempel 1',
                                        description: 'Här är ett objekt som representerar en person',
                                        code_lines: [
                                            'klass person {',
                                            '     def __init__($själv, $namn, $ålder) {',
                                            '          $själv.$namn = $namn',
                                            '          $själv.$ålder = $ålder',
                                            '     }',
                                            '',
                                            '     def åldra($själv) {',
                                            '          $själv.ålder = $själv.ålder + 1',
                                            '     }',
                                            '}',
                                            '',
                                            '$person1 = person("Karl", 25)',
                                            'skriv ($person1.$namn)',
                                            'skriv ($person1.$ålder)',
                                            '$person1.åldra()',
                                            'skriv($person.$ålder)',
                                            '',
                                            '$person2 = person("Jonas", 2)',
                                            'skriv ($person2.$namn)',
                                            'skriv ($person2.$ålder)',
                                        ],
                                        output_lines: [
                                            'Karl',
                                            '25',
                                            '26',
                                            'Jonas',
                                            '2'
                                        ],
                                        callout: {
                                            type: 'warning',
                                            title: 'OBS!',
                                            body: 'Märkt att funktioner i klasser altid tar <em>$själv</em> som första argument!',
                                            icon: 'fas fa-exclamation',
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: 'Nyckelord',
                        id: 'nyckelord',
                        nav_items: [
                            [
                                {
                                    href: '#nyckelord_tabell',
                                    title: 'Nyckelord',
                                },
                            ],
                        ],
                        sections: [
                            {
                                id: 'nyckelord_tabell',
                                title: 'Nyckelord',
                                description: `
			                            Här är en lista och en kort beskrivining för alla nyckelord i språket.
			                     `,
                                usage: '[nykelord]',
                                tables: [
                                    {
                                        title: 'Nyckelord',
                                        ths: [
                                            'Nyckelord',
                                            'Beskrivning',
                                        ],
                                        tbody: 'filtered_keyword_table',
                                    },
                                ]
                            },
                        ],
                    },
                    {
                        title: 'Operatorer',
                        id: 'operatorer',
                        nav_items: [
                            [
                                {
                                    href: '#operatorer_tabell',
                                    title: 'Operatorer',
                                },
                            ],
                        ],
                        sections: [
                            {
                                id: 'operatorer_tabell',
                                title: 'Operatorer',
                                description: `
			                            Här är en lista och en kort beskrivining för alla operatorer i språket.
			                     `,
                                usage: '[operator]',
                                tables: [
                                    {
                                        title: 'Operator',
                                        ths: [
                                            'Operator',
                                            'Beskrivning',
                                        ],
                                        tbody: 'operators_table',
                                    },
                                ]
                            },
                        ],
                    },
                    {
                        title: 'Avancerade funktioner',
                        id: 'avancerade_funktioner',
                        nav_items: [
                            [
                                {
                                    href: '#importering',
                                    title: 'Importering',
                                },
                            ],
                            [
                                {
                                    href: '#bibliotek',
                                    title: 'Bibliotek',
                                },
                            ],
                            [
                                {
                                    href: '#pilfunktioner',
                                    title: 'Pilfunktioner',
                                },
                            ],
                        ],
                        sections: [
                            {
                                id: 'importering',
                                title: 'Importering',
                                description: `
			                            <em>Importering</em> går ut på att importera externa bibliotek som man kan använda i sin kod. Vad betyder det?.
			                            Jo, I Enkelt så finns det mycket inbyggda funktioner, men om du har gjort en funktion som du tycker är praktisk så kan du göra den till ett <em>bibliotek</em>.
			                            Ett bibliotek är en enkeltfil som innehåller en eller flera funktioner (exempel snart). Du kan sedan importera filen in i ett annat enkeltprojekt och använda funktionerna från filen där utan att behöva kopiera in dem.
			                     `,
                                usage: 'importera = <em>[bibliotek]</em>',
                                content: `
			                            <div>
								<br>
								<h2>Exempel</h2>
								<p>Här är ett exempel på hur importering kan användas. Vi har två enkeltfiler: <em>matematik.e</em> och <em>kod.e</em></p>
								<h5>matematik.e</h5>
								<div class="code-block" style="line-height: 1px;">
									<code>
								             <div class="code-block">
								                     <code><em style="color: lightgray">1</em><code>def addera($num1, $num2) {</code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">2</em><code>      returnera $num1+$num2</code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">3</em><code>}</code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">4</em><code></code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">5</em><code>def subtrahera($num1, $num2) {</code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">6</em><code>      returnera $num1-$num2</code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">7</em><code>}</code></code>
								             </div>
							             </code>
						             </div>
						             <h5>kod.e</h5>
								<div class="code-block" style="line-height: 1px;">
									<code>
								             <div class="code-block">
								                     <code><em style="color: lightgray">1</em><code>importera matematik</code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">2</em><code></code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">3</em><code>skriv (matematik.addera(1, 2))</code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">4</em><code></code></code>
								             </div>
								             <div class="code-block">
								                     <code><em style="color: lightgray">5</em><code>skriv (matematik.subtrahera(10, 5))</code></code>
								             </div>
							             </code>
						             </div>
						             <h5>Utdata</h5>
						             <div class="code-block" style="line-height: 1px;">
						                     <code>
								             <div class="code-block">
								                     <code>3</code>
								             </div>
								             <div class="code-block">
								                     <code>5</code>
								             </div>
							             </code>
						             </div>
						             <p>Här så importerade alltså filen kod.e matematik.e och då kunde man använde funktionerna från matetik.e i kod.e</p>
					             </div>
			                     `
                            },
                            {
                                id: 'bibliotek',
                                title: 'Bibliotek',
                                description: `
			                            <em>Bibliotek</em> är alltså filer med samlade funktioner som kan importeras och användas i andra filer.
			                     `,
                                usage: 'importera = <em>[bibliotek]</em>',
                                content: `
			                            <p>Om du har gjort ett bibliotek och du vill dela det med dig så kan du ladda upp det till <a href="https://bibliotek.enkelt.io" target="_blank">bibliotek.enkelt.io</a> så att andra kan använda ditt bibliotek i sina program. Klicka bara på länken för att läsa mer.</p>
			                     `
                            },
                        ],
                    },
                ]
            }
        },
        methods: {
            getParam(name) {
                return this[name];
            },
            performSearch(search) {
                this.documentation_search = search;
                this.documentation_search_result_checker = true;
                this.collapse_classes = 'collapse';
            },
            getAvailableParameters(section) {
                let available = section.title+section.id+section.usage+section.content;
                if ('examples' in section) {
                    available += section.examples
                }
                
                return available;
            },
            should_show(item) {
                if (this.documentation_search === "") {
                    this.resetSearch();
                }
        
                if (this.documentation_search_result_checker) {
                    let searches_to_check = this.documentation_search.split(' ');
                    let results = [];
                    for (let i = 0; i < searches_to_check.length; i++) {
                        if (item.toUpperCase().includes(searches_to_check[i].toUpperCase())) {
                            results.push(true);
                        } else {
                            results.push(false);
                        }
                    }
                    return !results.includes(false);
                } else {
                    return true;
                }
            },
            should_show_section(sections) {
                // If the user has emptied the search box.
                if (this.documentation_search === "") {
                    this.resetSearch();
                }
    
                // If we should check for results
                let results = [];
                let section;
                if (this.documentation_search_result_checker) {
                    for (let i = 0; i < sections.length; i++) {
                        section = sections[i];
                        results.push(this.should_show(section.title+section.description+section.usage+section.content))
                    }
                    
                    return results.includes(true);
                } else {
                    
                    return true;
                }
            },
            resetSearch() {
                this.documentation_search_result_checker = false;
                this.documentation_search = '';
                this.collapse_classes = 'collapse show';
            },
            collapse(element) {
                document.querySelector(element).classList.toggle('show');
            }
        },
        computed: {
            filtered_keyword_table() {
                return this.keyword_table.filter((keyword) => {
                    return keyword.title.match(this.keyword_search);
                });
            },
        },
        mounted() {
            document.title = 'Enkelt - Dokumentation';
            window.location = 'https://dokumentation.enkelt.io';
        }
    }
</script>

<style scoped>

</style>
