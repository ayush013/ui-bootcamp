import { days } from './dates';
import EventOverlay from './overlay';
export default class Layout {

    colors = ['#F87171', '#FBBF24', '#34D399', '#60A5FA', '#818CF8', '#A78BFA', '#F472B6'];

    constructor() {
        this.baseNode = document.querySelector('#date-tile');
        this.dayNode = document.querySelector('#day-tile');
        this.monthWrapper = document.querySelector('#month-view');
        this.monthSelect = document.querySelector('#month-picker');
        this.overlayService = new EventOverlay();
    }

    initMonthLayout(days, month, year, saveEventCb, events) {
        for (let i = 1; i <= days; i++) {
            const node = this.baseNode.content.cloneNode(true);
            const date = new Date(year, month, i, 5, 30);

            if(i === 1) {
                this.setDayHeader(date.getDay())
            }

            node.querySelector('.date-tile').addEventListener('click', e => {
                this.overlayService.initOverlay(date, saveEventCb);
            })

            node.querySelector('.date-label span').textContent = i;

            node.querySelector('.date-event').style.backgroundColor =
                this.colors[parseInt(Math.random() * this.colors.length, 10)];


            if (new Date().toISOString().slice(0, 10) === date.toISOString().slice(0, 10)) {
                node.querySelector('.date-label span').classList.add('bg-blue-500', 'text-white');
            }

            const hasEvent = events.find(ev => ev.timestamp.slice(0, 10) === date.toISOString().slice(0, 10));

            if (hasEvent) {
                node.querySelector('.date-event').classList.remove('hidden');
            }

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

    setDayHeader(startDay) {
        for(let i = 0; i < days.length; i++) {
            const node = this.dayNode.content.cloneNode(true);
            node.querySelector('.day-label').textContent = days[(startDay + i) % 7]
            this.monthWrapper.appendChild(node);
        }
    }


}