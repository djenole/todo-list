"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskItem = void 0;
class TaskItem {
    constructor(task) {
        this.task = task;
    }
    render() {
        return `
      <div class="task-item">
        <h3>${this.task.title}</h3>
        <p>Status: ${this.task.completed ? 'Completed' : 'Pending'}</p>
      </div>
    `;
    }
}
exports.TaskItem = TaskItem;
