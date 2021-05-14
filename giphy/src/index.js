import HttpClient from './app/http-client';
import Store from './app/store';
import View from './app/view';
import ViewportObserver from './app/viewport-observer';
import './style.scss'

export const loadApp = () => {

    const viewService = new View();
    const httpService = new HttpClient();
    const storeService = new Store();
    const viewportObserver = new ViewportObserver();

    let searchTerm = '';
    let resultCount = 0;

    const resetView = () => {
        viewService.clearView();
        viewService.clearSearch();
        storeService.clearStore();
        viewService.hideLoadBtn();
        resultCount = 0;
    };

    const fetchResults = async (offset = 0) => {
        try {
            let results = await httpService.getSearchResults(searchTerm, offset);

            resultCount = results.pagination.total_count;
            results = storeService.transformData(results.data);

            if (resultCount > storeService.storeCount) {
                viewService.showLoadBtn();
            } else {
                viewService.hideLoadBtn();
            }

            storeService.setStore(results);

            results.forEach(result => {
                viewService.renderResult(result);
            });

        } catch (e) {
            console.error(e);
            alert('Failed to fetch results');
            resetView();
        }
    }

    viewportObserver.initObserver(viewService.loadMore, (e) => {
        if(e.some(el => el.isIntersecting)) {
            storeService.storeCount && fetchResults(storeService.storeCount);
        }
    })


    viewService.initSearchListener(async e => {
        if (searchTerm) {
            viewService.clearView();
            storeService.clearStore();
        }

        searchTerm = e.target.value?.trim();

        if (searchTerm) {
           await fetchResults();
        } else {
            resetView();
        }
    });

}

loadApp();