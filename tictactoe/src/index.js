import Controller from './app/controller';
import Store from './app/store';
import View from './app/views';
import './style.scss'

export const loadApp = () => {

    const viewService = new View();
    const storeService = new Store();
    const controller = new Controller();

    viewService.setTurn(`Player ${controller.getActiveControl() + 1} - ${controller.getOption(controller.getActiveControl())}`);

    let turns = 1;

    const alertAndReset = (message) => {
        viewService.alertWinner(message);
        setTimeout(() => {
            viewService.reset();
            storeService.initStore();
            turns = 1;
        }, 100);
    }

    viewService.initGridListener((cell) => {

        const existingValue = storeService.getItem(cell);

        if (existingValue === null) {
            const active = controller.getActiveControl();
            const value = controller.getOption(active);

            storeService.setItem(cell, active);
            viewService.addCellValue(cell, value);

            const winner = controller.checkWin(storeService.getStore(), active);

            if (winner) {
                alertAndReset(`Player ${active + 1} wins!`);
                return;
            }

            if (turns === 9) {
                alertAndReset(`It's a tie`);
                return;
            }

            turns++;

            controller.switchControl();
            viewService.setTurn(`Player ${controller.getActiveControl() + 1} - ${controller.getOption(controller.getActiveControl())}`);
        }

    });



}

loadApp();