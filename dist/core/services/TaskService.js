"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
class TaskService {
    constructor() {
        this.tasks = [];
        this.loadTasks();
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTasks() {
        return this.tasks;
    }
    loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
    }
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
exports.TaskService = TaskService;
