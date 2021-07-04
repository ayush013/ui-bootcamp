export default class Views {
    constructor() {
        this.baseTodo = document.getElementById('todo');
        this.wrapper = document.getElementById('wrapper');

        this.initView();
    }

    initView() {
        const notesInput = this.baseTodo.content.cloneNode(true);

        notesInput.querySelector('.todo').classList.add('todo-base');
        const checkNode = notesInput.querySelector('.todo .check');
        notesInput.querySelector('.todo').removeChild(checkNode)

        this.wrapper.appendChild(notesInput);
    }

} 