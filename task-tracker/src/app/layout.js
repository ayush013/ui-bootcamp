import Sidebar from "./sidebar";

export default class Layout {

    constructor() {
        this.taskNode = document.getElementById('task');
        this.baseWrappers = document.querySelectorAll('.dropzone');
        this.createBtn = document.getElementById('create-task');
    }


    createTaskLayout({ title, description, id, category, status }) {
        const node = this.taskNode.content.cloneNode(true);
        node.querySelector('.task').id = id;
        node.querySelector('.title').textContent = title;
        node.querySelector('.description').textContent = description;
        node.querySelector('.category').textContent = category;
        node.querySelector('.category').style.color = colorClasses[parseInt(Math.random() * colorClasses.length, 10)];

        node.querySelector('.task').addEventListener('click', (e) => {
            const sidebar = new Sidebar();
            sidebar.initSidebar({ title, description, id, category, status });
        },);

        this.baseWrappers[status || 0].appendChild(node);

        return true;
    }

    createBtnListener(saveCallback) {
        this.createBtn.addEventListener('click', async (e) => {
            const sidebar = new Sidebar();
            const result = await sidebar.initSidebar();
            saveCallback(result);
        });
    }

}

export const colorClasses = ['#F59E0B', '#F472B6', '#FBBF24', '#F87171'];