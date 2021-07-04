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
        const { title, body } = email;

        const template = this.bodyTemplate.content.cloneNode(true);

        template.querySelector('.title').textContent = title;
        template.querySelector('.content').textContent = body;

        this.wrapper.querySelector('.email-body').innerHTML = ''
        this.wrapper.querySelector('.email-body').appendChild(template);
    }

    renderListItem(email, fragment, isActive) {
        const { title, id } = email;

        const listItem = this.listItem.content.cloneNode(true);

        listItem.querySelector('.title').textContent = title;
        listItem.querySelector('.email-list-item').id = `list-item-${id}`;
        isActive && listItem.querySelector('.email-list-item').classList.add(`email-list-item-active`);

        fragment.appendChild(listItem);
    }

    renderView(state, activeIdx = 0) {
        const listFragment = document.createDocumentFragment();
        
        state.forEach((item, i) => {
            this.renderListItem(item, listFragment, activeIdx === i)
        }) 

        this.wrapper.querySelector('.email-list').innerHTML = ''
        this.wrapper.querySelector('.email-list').appendChild(listFragment);

        const activeEl = state[activeIdx];

        this.renderEmail(activeEl);

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