import { DAYS, getCurrentDate, getCurrentDay, getDaysInMonth, MONTHS } from "./date-utils";

export default class Controller {

    constructor() {
        this.baseCell = document.getElementById('cell');
        this.baseLabel = document.getElementById('label');
        this.wrapper = document.getElementById('calendar-grid');
        this.selectWrapper = document.getElementById('date-select');

        this.initialize();
    }

    initialize() {
        this.createLabels();

        const [date, month, year] = getCurrentDate();

        this.createCells(date, month, year);

        this.initSelect(month, year);
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

    createCells(date, month, year) {
        const fragment = document.createDocumentFragment();

        const days = getDaysInMonth(year, month + 1);

        const offset = getCurrentDay(date, month, year);

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

    initSelect(month, year) {
        const monthDropdown = this.selectWrapper.querySelector('select[name=month]');

        const monthOptions = new DocumentFragment();

        MONTHS.forEach((month, i) => {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = month;
            monthOptions.appendChild(option);
        })

        monthDropdown.appendChild(monthOptions);

        monthDropdown.value = month;

        const yearDropdown = this.selectWrapper.querySelector('select[name=year]');

        const yearOptions = new DocumentFragment();

        for(let i = 2000; i <= 2050; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearOptions.appendChild(option);
        }

        yearDropdown.appendChild(yearOptions);

        yearDropdown.value = year;
    }

}