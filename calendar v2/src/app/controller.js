import { DAYS, getCurrentDate, getCurrentDay, getDaysInMonth } from "./date-utils";

export default class Controller {

    constructor() {
        this.baseCell = document.getElementById('cell');
        this.baseLabel = document.getElementById('label');
        this.wrapper = document.getElementById('calendar-grid');

        this.initialize();
    }

    initialize() {
        this.createLabels();
        this.createCells();
    }

    createLabels() {
        const fragment = document.createDocumentFragment();
        DAYS.forEach(day => {
            const label = this.baseLabel.content.cloneNode(true);
            label.querySelector('.label').textContent = day;
            fragment.appendChild(label);
        })

        this.wrapper.appendChild(fragment);

    }

    createCells() {
        const fragment = document.createDocumentFragment();

        const [date, month, year] = getCurrentDate();

        const days = getDaysInMonth(year, month + 1);

        const offset = getCurrentDay();

        let i = offset + 1;

        while(i--) {
            const cell = this.baseCell.content.cloneNode(true);
            cell.querySelector('.cell').classList.add('cell-offset')
            fragment.appendChild(cell);
        }

        i = days;

        while(i--) {
            const cell = this.baseCell.content.cloneNode(true);
            cell.querySelector('.cell').classList.add('cell-main')
            cell.querySelector('.date').textContent = days - i;
            fragment.appendChild(cell);
        }

        this.wrapper.appendChild(fragment);

    }


}