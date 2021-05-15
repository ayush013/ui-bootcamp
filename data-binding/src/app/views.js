export default class View {
    constructor() {
        this.input = document.getElementById('input');
        this.result = document.getElementById('result');
    }

    initInputListener(callback) {
        this.input.addEventListener('keyup', callback);
    }

    outputResult(state) {
        this.result.textContent = state.result;
    }


}