import Store from './app/store';
import Views from './app/views';
import './style.scss'

export const loadApp = () => {

    const store = new Store();
    const viewService = new Views();

    viewService.renderAllComments(store.comments);

    viewService.initCommentListener((comment, id) => {
        const newComment = store.saveComment(comment, id || 0);
        viewService.renderCommentNode(newComment, id);
    })
}

loadApp();