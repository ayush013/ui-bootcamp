import Store from './app/store';
import Views from './app/views';
import './style.scss'

export const render = () => {
    const viewService = new Views();
    const storeService = new Store();
    

    viewService.onEnterPress((value) => {
        console.log(value)
        storeService.addNote(value);

        console.log(storeService.allNotes)
    });

}

render();