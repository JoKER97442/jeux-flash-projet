import FooterTemplate from './FooterTemplate.js';
import HeaderTemplate from './HeaderTemplate.js';
import MainTemplate from './MainTemplate.js';
import HeaderTemplateJeux from './HeaderTemplateJeux.js';
/*
import MorpionTemplate from './MorpionTemplate.js';
import CasseBriqueTemplate from './CasseBriqueTemplate.js';
import ChiFouMiTemplate from './ChiFouMiTemplate.js';
import FlappyBirdTemplate from './FlappyBirdTemplate.js';
import MemoryTemplate from './MemoryTemplate.js';
import VirusTemplate from './VirusTemplate.js';
*/
new Vue({
    el: '#app',
    //Ajouter le nom du composant.
    components: { FooterTemplate, HeaderTemplate, MainTemplate, HeaderTemplateJeux },
    data: {},
});
