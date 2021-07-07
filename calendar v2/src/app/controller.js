import { DAYS, getCurrentDate, getDay, getDaysInMonth, MONTHS } from "./date-utils";

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

        const offset = getDay(1, month, year);

        let i = offset % 7;

        while(i--) {
            const cell = this.baseCell.content.cloneNode(true);
            cell.querySelector('.cell').classList.add('cell-offset')
            fragment.appendChild(cell);
        }

        i = days;

        const [currentDate, currentMonth, currentYear] = getCurrentDate();

        while(i--) {
            const cell = this.baseCell.content.cloneNode(true);
            cell.querySelector('.cell').classList.add('cell-main')
            cell.querySelector('.cell').id = days - i;
            cell.querySelector('.date').textContent = days - i;

            if(currentMonth === month && currentYear === year) {
                (currentDate === days - i) && cell.querySelector('.date').classList.add('today')
            }
            fragment.appendChild(cell);
        }

        this.wrapper.appendChild(fragment);

    }

    destroyLayout() {
        while(this.wrapper.childElementCount) {
            this.wrapper.removeChild(this.wrapper.firstElementChild);
        }
    }

    initSelect(month, year) {
        const monthDropdown = this.selectWrapper.querySelector('select[name=month]');

        const monthOptions = new DocumentFragment();

        MONTHS.forEach((month, i) => {
            const option = document.createElement('option');
            option.value = i + 1;
            option.textContent = month;
            monthOptions.appendChild(option);
        })

        monthDropdown.appendChild(monthOptions);

        monthDropdown.value = month + 1;

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

        this.onSelectChange()
    }

    onDateClick() {
        this.wrapper.addEventListener('click', e => {
            if(e.target.classList.contains('cell-main')) {
                
            }
        })
    }

    onSelectChange() {
        const yearDropdown = this.selectWrapper.querySelector('select[name=year]');
        const monthDropdown = this.selectWrapper.querySelector('select[name=month]');

        let currentYear = yearDropdown.value;
        let currentMonth = monthDropdown.value;

        monthDropdown.addEventListener('change', e => {
            currentMonth = e.target.value;
            this.destroyLayout();
            this.createLabels();
            this.createCells(0, currentMonth - 1, parseInt(currentYear));
        });

        yearDropdown.addEventListener('change', e => {
            currentYear = e.target.value;
            this.destroyLayout();
            this.createLabels();
            this.createCells(0, currentMonth - 1, parseInt(currentYear));
        });
    }

}