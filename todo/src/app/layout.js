export default class Layout {

    constructor(stateService) {
        this._layouts = [];
        this.baseNode = document.querySelector('#task');
        this.wrapperRef = document.querySelector('#tasks-wrapper');
        this.stateService = stateService;

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

        taskContainer.id = `task-${data.id}`;

        input.addEventListener('keyup', e => this.stateService.patchTodo(data.id, e.target.value));
        input.value = data.value;

        this.wrapperRef.appendChild(node);
    }

    removeLayout(id) {
        const node = this.wrapperRef.querySelector(`#task-${id}`);
        this.wrapperRef.removeChild(node);
    }


}