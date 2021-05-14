export default class View {
    constructor() {
        this.resultWrapper = document.getElementById('result-wrapper');
        this.resultNode = document.getElementById('result');
        this.searchNode = document.getElementById('search');
    }

    renderResult(data) {
        const node = this.resultNode.content.cloneNode(true);
        node.querySelector('img').src = data.src;
        node.querySelector('img').alt = data.alt;

        this.resultWrapper.appendChild(node);
    }

    clearView() {
        this.resultWrapper.innerHTML = '';
    }

    initSearchListener(callback) {
        const deboncedSearchCb = this.debounceSearch(callback, 1000);
        this.searchNode.addEventListener('keypress', e => {
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