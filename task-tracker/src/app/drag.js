export default class Drag {
    constructor() {
        this.dragged = null;
    }

    initDragListener(onDrag) {
        document.addEventListener('dragstart', (e) => {
            this.dragged = e.target;
        });

        document.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        document.addEventListener('drop', (e) => {
            if (e.target.classList.contains('dropzone')) {
                this.dragged.parentNode.removeChild(this.dragged);
                e.target.appendChild(this.dragged);
                const zone = parseInt(e.target.id?.split('-').pop(), 10);
                const taskId = parseInt(this.dragged.id,10)
                onDrag(zone, taskId);
            }
        });
    }



}