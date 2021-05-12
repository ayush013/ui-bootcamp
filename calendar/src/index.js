import Layout from './app/layout';
import './style.scss'

export const loadApp = () => {

    const layoutService = new Layout();

    layoutService.initMonthLayout(28);
}

loadApp();