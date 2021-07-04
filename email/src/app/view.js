export default class View {
    constructor() {
        this.bodyTemplate = document.getElementById('email-body');
        this.wrapper = document.getElementById('wrapper');
        this.listItem = document.getElementById('email-list-item');
    }

    onListItemClick(callback) {
        document.addEventListener('click', (e) => {
            if(e.target.classList.contains('email-list-item')) {
                callback(e.target.id)
            }
        });
    }

    renderEmail(email) {
        const { title, content } = email;

        const body = this.bodyTemplate.content.cloneNode(true);

        body.querySelector('.title').textContent = title;
        body.querySelector('.content').textContent = content;

        this.wrapper.querySelector('.email-body').innerHTML = body;
    }

    renderListItem(email, fragment) {
        const { title } = email;

        const listItem = this.listItem.content.cloneNode(true);

        listItem.querySelector('.title').textContent = title;

        fragment.appendChild(listItem);
    }

    renderView(state) {
        const listFragment = document.createDocumentFragment();
        
        for(let item of state) {
            this.renderListItem(item, listFragment)
        }

        this.wrapper.querySelector('.email-list').appendChild(listFragment);
    }

    debounceRenderView(wait) {
        let timer;
        return (...args) => {
            clearTimeout(timer);

            timer = setTimeout(() => {
                this.renderView(...args);
                console.log('rendered')
            }, wait);
        }
    }



}