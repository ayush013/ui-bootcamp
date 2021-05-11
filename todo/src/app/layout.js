export default class Layout {

    constructor(stateService) {
        this.baseNode = document.querySelector('#task');
        this.wrapperRef = document.querySelector('#tasks-wrapper');
        this.stateService = stateService;

        this.initLayout();
    }

    initLayout() {
        const data = this.stateService.getAllTodo();
        if (data.length) {
            data.forEach(element => {
                this.addLayout(element);
            });
        }
    }

    addLayout(data) {
        const node = this.baseNode.content.cloneNode(true);

        const taskContainer = node.querySelector('.task-container');
        const input = node.querySelector('.task-content');
        const deleteBtn = node.querySelector('.task-delete');
        const checkboxWrapper = node.querySelector('.task-check');
        const checkboxInput = checkboxWrapper.querySelector('input');
        const checkImg = checkboxWrapper.querySelector('img');

        checkboxInput.checked = data.done;

        if (checkboxInput.checked) {
            this.markAsDone(input, checkImg);
        }

        taskContainer.id = `task-${data.id}`;

        const patchTodo = this.debounceInput(this.stateService.patchTodo.bind(this.stateService), 500);

        input.addEventListener('keyup', e => patchTodo(data.id, e.target.value));
        input.value = data.value;

        checkboxInput.addEventListener('change', (e) => {
            e.preventDefault();
            checkboxInput.checked = !data.done;
            if (checkboxInput.checked) {
                this.markAsDone(input, checkImg);
            } else {
                this.unmarkAsDone(input, checkImg);
            }
            this.stateService.changeStatus(data.id, checkboxInput.checked);
        });

        deleteBtn.addEventListener('click', () => {
            this.stateService.deleteTodo(data.id);
            this.removeLayout(data.id)
        });

        this.wrapperRef.appendChild(node);
    }

    removeLayout(id) {
        const node = this.wrapperRef.querySelector(`#task-${id}`);
        this.wrapperRef.removeChild(node);
    }

    markAsDone(input, img) {
        input.classList.add('line-through', 'opacity-50');
        img.classList.remove('hidden');
    }

    unmarkAsDone(input, img) {
        input.classList.remove('line-through', 'opacity-50');
        img.classList.add('hidden');
    }

    debounceInput(fn, delay) {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        }
    }


}