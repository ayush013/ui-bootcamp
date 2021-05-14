import View from './app/view';
import './style.scss'

export const loadApp = () => {

    const viewService = new View();

    viewService.initSearchListener((e) => {
        console.log(e)
    })
}

loadApp();