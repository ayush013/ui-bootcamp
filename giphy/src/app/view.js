export default class View {
    constructor() {
        this.resultWrapper = document.getElementById('results-wrapper');
        this.resultNode = document.getElementById('result');
        this.searchIp = document.getElementById('search');
        this.loadMore = document.getElementById('load-more');
        this.loader = document.getElementById('loader');
    }

    renderResult(data) {
        const node = this.resultNode.content.cloneNode(true);
        node.querySelector('img').src = data.url;
        node.querySelector('img').alt = data.title;
        node.querySelector('img').title = data.title;
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
            this.showLoader();
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

    hideLoadBtn() {
        this.loadMore.classList.add('hidden');
    }

    showLoadBtn() {
        this.loadMore.classList.remove('hidden');
    }

    hideLoader() {
        this.loader.classList.add('hidden');
    }

    showLoader() {
        this.loader.classList.remove('hidden');
    }

    initLoadMoreListener(callback) {
        this.loadMore.addEventListener('click', callback);
    }


}