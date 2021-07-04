const BASE_INPUT = 'base-input';

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
            if(e.target.classList.contains(BASE_INPUT)) {
                if(e.code === 'Enter') {
                    callback(e.target.value);
                    e.target.value = '';
                }
            }
        })
    }

} 