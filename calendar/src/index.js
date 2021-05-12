import DateService from './app/dates';
import Layout from './app/layout';
import './style.scss'

export const loadApp = () => {

    const layoutService = new Layout();
    const dateService = new DateService();

    let date = dateService.getCurrentDate();


    layoutService.initMonthLayout(dateService.getDaysinMonth(date.getFullYear(), date.getMonth() + 1), dateService.monthNames[date.getMonth()], date.getFullYear());

    const changeMonth = (e) => {
        layoutService.disposeMonthLayout();
        layoutService.initMonthLayout(dateService.getDaysinMonth(date.getFullYear(), parseInt(e.target.value, 10)), dateService.monthNames[date.getMonth()], date.getFullYear());
    };

    layoutService.initMonthDropdown(dateService.monthNames, date.getFullYear(), changeMonth);

    layoutService.setMonth(date.getMonth() + 1);

}

loadApp();