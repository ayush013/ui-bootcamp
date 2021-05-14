export default class View {
    constructor() {
        this.resultWrapper = document.getElementById('results-wrapper');
        this.resultNode = document.getElementById('result');
        this.searchIp = document.getElementById('search');
    }

    renderResult(data) {
        const node = this.resultNode.content.cloneNode(true);
        node.querySelector('img').src = data.url;
        node.querySelector('img').alt = data.title;
        node.querySelector('.result').id = data.id;
        node.querySelector('.result').href = data.link;

        this.resultWrapper.appendChild(node);
    }

    clearView() {
        this.resultWrapper.innerHTML = '';
    }

    clearSearch() {
        this.searchIp.value = '';
    }

    initSearchListener(callback) {
        const deboncedSearchCb = this.debounceSearch(callback, 1000);
        this.searchIp.addEventListener('keyup', e => {
            deboncedSearchCb(e);
        })
    }

    debounceSearch(fn, delay) {
        let timer;

        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        }

    }


}