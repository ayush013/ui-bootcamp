export default class Views {

    constructor() {
        this.commentNode = document.getElementById('comment');
        this.baseWrapper = document.getElementById('comment-wrapper');
        this.input = document.getElementById('input');

        this.renderCommentInput();
        this.initReplyListener();
    }

    renderCommentNode(comment) {
        const node = this.createCommentNode(comment);

        if (comment.level === 0) {
            this.baseWrapper.appendChild(node);
        } else {

        }
    }

    createCommentNode(comment) {
        const node = this.commentNode.content.cloneNode(true);
        node.querySelector('.comment').id = comment.id;
        node.querySelector('.comment').classList.add(`level-${comment.level}`);
        node.querySelector('.content').textContent = comment.title;

        this.renderCommentInput(node.querySelector('.comment-box'), comment.level);

        return node;
    }

    renderAllComments(comments, baseWrapper = this.baseWrapper) {
        for (let comment of comments) {
            const node = this.createCommentNode(comment);

            if (comment.replies) {
                this.renderAllComments(comment.replies, node.querySelector('.nesting'));
            }

            baseWrapper.appendChild(node);
        }
    }

    renderCommentInput(baseWrapper = this.baseWrapper, level = 0) {
        const node = this.input.content.cloneNode(true);
        node.querySelector('textarea').classList.add(`input-level-${level}`);
        baseWrapper.appendChild(node);
    }

    initCommentListener(callback) {
        document.addEventListener('keyup', e => {
            if (e.target.classList.contains('comment-input') && e.code === 'Enter') {
                console.log(e)
                const level = parseInt(e.target.classList.value.split('input-level-').pop());
                const id = e.target.parentNode.parentNode.id;
                callback(e.target.value, level, id);
                e.target.value = '';
            }
        })
    }

    initReplyListener() {
        document.addEventListener('click', e => {
            if (e.target.classList.contains('reply')) {
                const commentBox = e.target.parentNode.parentNode.querySelector('.comment-box');
                commentBox.classList.contains('hidden') ? commentBox.classList.remove('hidden') : commentBox.classList.add('hidden');
            }
        });
    }

}