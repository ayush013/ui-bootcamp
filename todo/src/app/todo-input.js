export default class TodoInput {
    constructor(stateService, layoutService) {
        this.input = document.querySelector('#todo-input');
        this.bindListener(this.input);
        this.stateService = stateService;
        this.layoutService = layoutService;
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
            const data = this.stateService.addTodo(value);
            this.layoutService.addLayout(data);
            this.clearInput();
        } else {
            alert('Please enter a valid Task');
        }
    }
}