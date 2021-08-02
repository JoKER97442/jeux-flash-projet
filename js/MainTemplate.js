export default Vue.component('MainTemplate', {
    template: `
        <main class="container">
            <article class ='jeux1' v-for="item of arr">
                <img v-bind:src="'../img/' + item + '.png'" alt="">
                <a v-bind:href="'../jeux.html/' + item + '.html'">{{item}}</a>
            </article>
        </main>`,
    data() {
        return {
            arr: [ 'FlappyBird', 'Morpion', 'ChiFouMi', 'CasseBrique', 'Virus', 'Memory' ],
        };
    },
});