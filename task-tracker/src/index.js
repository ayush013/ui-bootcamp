import Drag from './app/drag';
import Layout from './app/layout';
import Store from './app/store';
import './style.scss'

export const loadApp = () => {

    const layoutService = new Layout();
    const storeService = new Store();
    const dragService = new Drag();

    let store = storeService.getAllTasks();

    store.forEach(item => {
        layoutService.createTaskLayout(item);
    });

    layoutService.createBtnListener((data) => {
        if (data) {
            storeService.saveToStore(data);
            layoutService.createTaskLayout(data);
        }
    });

    dragService.initDragListener((dropzone, id) => {
        storeService.patchStatus(id, dropzone);
    });

}

loadApp();