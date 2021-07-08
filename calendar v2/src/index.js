import Controller from './app/controller';
import './style.scss'

export const render = () => {

    const controller = new Controller()


    controller.onDateClick(id => {
        console.log(id)
    })
}

render();