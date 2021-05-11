export default class TodoInput {
    constructor(stateService) {
        this.input = document.querySelector('#todo-input');
        this.bindListener(this.input);
        this.stateService = stateService;
    }

    bindListener(input) {
        input.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
                this.addTodo(e.target.value);
            }
        });
    }

    clearInput() {
        this.input.value = '';
    }

    addTodo(value) {
        if (value.trim()) {
            this.stateService.addTodo(value);
            this.clearInput();
        } else {
            alert('Please enter a valid Task');
        }
    }
}