export default class Sidebar {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
    }

    async initSidebar(data = null) {
        return new Promise(res => {
            const node = this.sidebar.content.cloneNode(true);

            this.initCloseListener(node, res);

            if (data) {
                node.getElementById('save').classList.add('hidden');
                node.getElementById('title').value = data.title;
                node.getElementById('title').disabled = true;
                node.getElementById('description').value = data.description;
                node.getElementById('description').disabled = true;
                node.getElementById('category').value = data.category;
                node.getElementById('category').disabled = true;
            } else {
                node.getElementById('save').addEventListener('click', e => {
                    res({ title, description, category });
                });
            }

            document.body.appendChild(node);
        });
    }

    disposeSidebar(cb) {
        document.body.removeChild(document.getElementById('task-sidebar'));
        cb(false);
    }

    initCloseListener(node, cb) {
        node.getElementById('close').addEventListener('click', e => {
            this.disposeSidebar(cb);
        });
    }

}