const BASE_INPUT = 'base-input';
const TASK_INPUT = 'task-input';

export default class Views {

    constructor() {
        this.baseTodo = document.getElementById('todo');
        this.wrapper = document.getElementById('wrapper');

        this.initView();
    }

    initView() {
        const notesInput = this.baseTodo.content.cloneNode(true);

        notesInput.querySelector('.todo input[type=text]').classList.add(BASE_INPUT);
        const checkNode = notesInput.querySelector('.todo .check');
        notesInput.querySelector('.todo').removeChild(checkNode)

        this.wrapper.appendChild(notesInput);
    }

    onEnterPress(callback) {
        document.addEventListener('keyup', e => {
            if (e.target.classList.contains(BASE_INPUT)) {
                if (e.code === 'Enter' && e.target.value.trim()) {
                    callback(e.target.value);
                    e.target.value = '';
                }
            } else if (e.target.classList.contains(TASK_INPUT)) {
                console.log(e.target.value)
            }
        })
    }

    renderNote(note, first = false) {
        const notesInput = this.baseTodo.content.cloneNode(true);

        notesInput.querySelector('.todo input[type=text]').classList.add(TASK_INPUT);
        notesInput.querySelector('.todo input[type=text]').value = note.title;
        notesInput.querySelector('.todo').classList.add('todo-task');
        const checkNode = notesInput.querySelector('.todo .check');

        if (note.done) {
            checkNode.querySelector('input[type=checkbox]').checked = true;
        }


        if (first) {
            this.wrapper.insertBefore(notesInput, this.wrapper.firstElementChild.nextElementSibling)
        } else {
            this.wrapper.appendChild(notesInput)
        }

    }

}