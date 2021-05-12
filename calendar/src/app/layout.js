export default class Layout {

    colors = ['#F87171', '#FBBF24', '#34D399', '#60A5FA', '#818CF8', '#A78BFA', '#F472B6'];

    constructor() {
        this.baseNode = document.querySelector('#date-tile');
        this.monthWrapper = document.querySelector('#month-view');
        this.monthSelect = document.querySelector('#month-picker');
    }

    initMonthLayout(days) {
        for (let i = days; i > 0; i--) {
            const node = this.baseNode.content.cloneNode(true);

            node.querySelector('.date-label').textContent = days - i + 1;
            node.querySelector('.date-event').style.backgroundColor =
                this.colors[parseInt(Math.random() * this.colors.length, 10)];
            this.monthWrapper.appendChild(node);
        }
    }

    disposeMonthLayout() {
        this.monthWrapper.innerHTML = '';
    }

    initMonthDropdown(months, year, listenerCb) {
        let fragment = new DocumentFragment();

        months.forEach((month, i) => {
            const node = document.createElement('option');
            node.value = i + 1;
            node.textContent = `${month} ${year}`;
            fragment.appendChild(node);
        });

        this.monthSelect.appendChild(fragment);

        this.setMonthListener(listenerCb);
    }


    setMonth(month) {
        this.monthSelect.value = month;
    }


    setMonthListener(callback) {
        this.monthSelect.addEventListener('change', e => callback(e))
    }


}