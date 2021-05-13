export default class Drag {
    constructor() {
        this.dragged = null;
    }

    dropZoneClasses = ['bg-blue-50', 'border-gray-200']

    initDragListener(onDrag) {
        document.addEventListener('dragstart', (e) => {
            this.dragged = e.target;
            this.dragged.style.opacity = 0;
        });

        document.addEventListener('dragover', (e) => {
            e.preventDefault();
        })

        document.addEventListener('dragenter', e => {
            if (e.target.classList.contains('dropzone')) {
                e.target.classList.add(...this.dropZoneClasses)
            }
        })

        document.addEventListener('dragleave', e => {
            if (e.target.classList.contains('dropzone')) {
                e.target.classList.remove(...this.dropZoneClasses)
            }
        })

        document.addEventListener('drop', (e) => {
            this.dragged.style.opacity = 1;
            if (e.target.classList.contains('dropzone')) {
                this.dragged.parentNode.removeChild(this.dragged);
                e.target.appendChild(this.dragged);
                e.target.classList.remove(...this.dropZoneClasses)
                const zone = parseInt(e.target.id?.split('-').pop(), 10);
                const taskId = parseInt(this.dragged.id,10)
                onDrag(zone, taskId);
            }
        });
    }



}