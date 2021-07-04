import Store from './app/store';
import Views from './app/views';
import './style.scss'

export const render = () => {
    const viewService = new Views();
    const storeService = new Store();

    const state = storeService.allNotes;

    state.forEach((note) => {
        viewService.renderNote(note);
    })
    

    viewService.onEnterPress((value) => {
        const note = storeService.addNote(value);

        viewService.renderNote(note, true);
    });


    viewService.onTaskChange((id, value) => {
        storeService.patchNote(id, value);
    });

}

render();