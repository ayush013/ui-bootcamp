export default class Layout {

    colors = ['#F87171', '#FBBF24', '#34D399', '#60A5FA', '#818CF8', '#A78BFA', '#F472B6']

    constructor() {
        this.baseNode = document.querySelector('#date-tile');
        this.monthWrapper = document.querySelector('#month-view');
    }

    initMonthLayout(days) {
        for (let i = days; i > 0; i--) {
            const node = this.baseNode.content.cloneNode(true);

            node.querySelector('.date-label').textContent = days - i + 1;
            node.querySelector('.date-event').style.backgroundColor =
                this.colors[parseInt(Math.random() * (this.colors.length - 1), 10)];
            this.monthWrapper.appendChild(node);
        }
    }
}