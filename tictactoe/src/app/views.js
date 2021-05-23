export default class View {

    constructor() {
        this.gridWrapper = document.getElementById('grid');
        this.cellTemplate = document.getElementById('cell');
        this.turnHeading = document.getElementById('turn');

        this.constructGrid();
    }

    constructGrid() {
        for(let i = 0; i < 9; i++) {
            const node = this.cellTemplate.content.cloneNode(true);
            node.querySelector('.content').id = `content-${i+1}`;
            this.gridWrapper.appendChild(node);
        }
    }

    initGridListener(callback) {
        this.gridWrapper.addEventListener('click' ,e => {
            callback(parseInt(e.target.id.split('-').pop(), 10));
        });
    }

    addCellValue(cell, value) {
        const node = this.gridWrapper.querySelector(`#content-${cell}`);
        node.textContent = value;
        node.classList.remove('cursor-pointer');
    }

    setTurn(content) {
        this.turnHeading.textContent = content;
    }

    alertWinner(message) {
        setTimeout(() => {
            alert(message)
        }, 0);
    }

    reset() {
        Array.from(this.gridWrapper.children).forEach(node => this.gridWrapper.removeChild(node));
        this.constructGrid();
    }

} 