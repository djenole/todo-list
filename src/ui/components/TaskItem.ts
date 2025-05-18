import { Task } from '../../core/models/Task';

export class TaskItem {
    constructor(private task: Task, 
                private onToggle: (id: number) => void,
                private onEdit: (task: Task) => void,
                private onDelete: (id: number) => void,
                private onDetail: (task: Task) => void) {}

    render(): HTMLLIElement {
        const li = document.createElement('li');
        li.className = `${this.task.completed ? 'completed ' : ''}${this.task.category.toLowerCase()}`;
        
        li.innerHTML = `
            <button class="complete-btn">
                <i class="fas ${this.task.completed ? 'fa-check' : 'fa-circle'}"></i>
            </button>
            <span class="task-title">${this.task.title}</span>
            <div class="task-actions">
                <button class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        li.querySelector('.complete-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.onToggle(Number(this.task.id));
        });

        li.querySelector('.edit-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.onEdit(this.task);
        });

        li.querySelector('.delete-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.onDelete(Number(this.task.id));
        });

        li.addEventListener('click', (e) => {
            if ((e.target as HTMLElement).closest('.edit-btn') || 
                (e.target as HTMLElement).closest('.delete-btn') || 
                (e.target as HTMLElement).closest('.complete-btn')) return;
            this.onDetail(this.task);
        });

        return li;
    }
}