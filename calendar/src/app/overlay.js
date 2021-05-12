export default class EventOverlay {

    current;

    constructor() {
        this.base = document.querySelector('#event-dialog');
    }

    initOverlay(date, month, year) {
        const node = this.base.content.cloneNode(true);
        node.querySelector('.event-details').textContent = `${date} ${month}, ${year}`;

        node.querySelector('.close').addEventListener('click', e => {
            this.disposeOverlay();
        });

        node.querySelector('.save-event').addEventListener('click', e => {
            const title = e.target.parentNode.querySelector('.event-title');
            const desc = e.target.parentNode.querySelector('.event-desc');

            if(!desc.value.trim() || !title.value.trim()) {
                alert('Please enter a valid value');
            } else {
                console.log(title.value.trim(), desc.value.trim());
                this.disposeOverlay();
            }
        });
        this.current = node.querySelector('.event-dialog');
        document.body.appendChild(node);
    }

    disposeOverlay() {
        document.body.removeChild(this.current);
        this.current = null;
    }

    saveEvent() {

    }

}