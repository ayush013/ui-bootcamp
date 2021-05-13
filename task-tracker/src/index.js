import Layout from './app/layout';
import Store from './app/store';
import './style.scss'

export const loadApp = () => {

    const layoutService = new Layout();
    const storeService = new Store();

    let store = storeService.getStore();

    store.forEach(item => {
        layoutService.createTaskLayout(item);
    })

    layoutService.createBtnListener((data) => {
        if(data) {
            storeService.saveToStore(data);
            layoutService.createTaskLayout(data);
        }
    });
    
}

loadApp();