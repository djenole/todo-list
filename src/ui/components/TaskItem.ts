import { Task } from '../../core/models/Task';

export class TaskItem {
  constructor(private task: Task) {}

  render(): string {
    return `
      <div class="task-item">
        <h3>${this.task.title}</h3>
        <p>Status: ${this.task.completed ? 'Completed' : 'Pending'}</p>
      </div>
    `;
  }
}