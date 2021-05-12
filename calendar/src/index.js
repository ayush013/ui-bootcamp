import DateService, { monthNames } from './app/dates';
import Layout from './app/layout';
import Store from './app/store';
import './style.scss'

export const loadApp = () => {

    const layoutService = new Layout();
    const dateService = new DateService();
    const store = new Store();

    let date = dateService.getCurrentDate();

    const saveEvent = (date, title, desc) => {
        store.saveEvent(date, title, desc);
    }

    layoutService.initMonthLayout(dateService.getDaysinMonth(date.getFullYear(), date.getMonth() + 1), date.getMonth(), date.getFullYear(), saveEvent, store.events);

    const changeMonth = (e) => {
        layoutService.disposeMonthLayout();
        layoutService.initMonthLayout(dateService.getDaysinMonth(date.getFullYear(), parseInt(e.target.value, 10)), parseInt(e.target.value, 10) - 1, date.getFullYear(), saveEvent, store.events);
    };

    layoutService.initMonthDropdown(monthNames, date.getFullYear(), changeMonth);

    layoutService.setMonth(date.getMonth() + 1);

}

loadApp();