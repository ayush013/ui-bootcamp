import Controller from './app/controller';
import Model from './app/model';
import './style.scss'

export const render = () => {

    const controller = new Controller();

    const model = new Model();



    controller.onDateClick(id => {

        // model.setEvent({ id, name: 'Lorem ipsum', desc: 'test test test test'});

        const events =  model.getEventsById(id);

        console.log(events)

        controller.destroyEvents();

        if(events) {
            controller.renderEvents(events.map(ev => ({...ev, id})));
        }
        console.log(id)
    })
}

render();