import Store from './app/store';
import Views from './app/views';
import './style.scss'

export const render = () => {
    const viewService = new Views();
    const storeService = new Store();

    const store = storeService.allNotes;

    store.forEach((note) => {
        viewService.renderNote(note);
    })
    

    viewService.onEnterPress((value) => {
        console.log(value)
        const note = storeService.addNote(value);

        viewService.renderNote(note);
    });
    

}

render();