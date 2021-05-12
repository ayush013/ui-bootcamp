import { monthNames } from './dates';

export default class EventOverlay {

    current;

    constructor() {
        this.base = document.querySelector('#event-dialog');
    }

    async initOverlay(date, saveEventCb, event) {

        return new Promise((res) => {
            const node = this.base.content.cloneNode(true);
            node.querySelector('.event-details').textContent = `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;

            node.querySelector('.close').addEventListener('click', e => {
                this.disposeOverlay();
                res(false);
            });


            if (event) {
                const title = node.querySelector('.event-title');
                const desc = node.querySelector('.event-desc');

                title.disabled = true;
                desc.disabled = true;

                title.value = event.title;
                desc.value = event.description;

                node.querySelector('.save-event').classList.add('hidden');
                res(false);

            } else {
                node.querySelector('.save-event').addEventListener('click', e => {
                    const title = e.target.parentNode.querySelector('.event-title');
                    const desc = e.target.parentNode.querySelector('.event-desc');

                    if (!desc.value.trim() || !title.value.trim()) {
                        alert('Please enter a valid value');
                    } else {
                        saveEventCb(date.toISOString(), title.value.trim(), desc.value.trim());
                        this.disposeOverlay();
                        res(true);
                    }
                });
            }

            this.current = node.querySelector('.event-dialog');
            document.body.appendChild(node);

        });
    }

    disposeOverlay() {
        document.body.removeChild(this.current);
        this.current = null;
    }


}