export default Vue.component('HeaderTemplateJeux', {
    template: `
    <header class="header">
        <a href="../index.html">Index</a>
        <a v-for="item of arr" v-bind:href="'./' + item + '.html'">{{item}}</a>
    </header>`,
    data() {
        return {
            arr: [ 'FlappyBird', 'Morpion', 'ChiFouMi', 'CasseBrique', 'Virus', 'Memory' ],
        };
    },
});
