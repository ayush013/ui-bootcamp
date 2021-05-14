import HttpClient from './app/http-client';
import Store from './app/store';
import View from './app/view';
import './style.scss'

export const loadApp = () => {

    const viewService = new View();
    const httpService = new HttpClient();
    const storeService = new Store();

    let searchTerm = '';

    viewService.initSearchListener(async e => {
        if (searchTerm) {
            viewService.clearView();
            storeService.clearStore();
        }

        searchTerm = e.target.value?.trim();

        if (searchTerm) {
            try {
                let results = await httpService.getSearchResults(searchTerm);

                results = storeService.transformData(results.data);

                storeService.setStore(results);

                results.forEach(result => {
                    viewService.renderResult(result);
                });

            } catch (e) {
                console.error(e);
                alert('Failed to fetch results');
                viewService.clearView();
                viewService.clearSearch();
                storeService.clearStore();
            }
        } else {
            viewService.clearView();
            storeService.clearStore();
        }

    });

}

loadApp();