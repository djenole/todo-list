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
        this.saveTasks();
    }
    updateTask(updatedTask) {
        this.tasks = this.tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
        this.saveTasks();
    }
    getTasks(filter = 'all', searchTerm = '') {
        let filteredTasks = this.tasks;
        switch (filter) {
            case 'active':
                filteredTasks = filteredTasks.filter(task => !task.completed);
                break;
            case 'completed':
                filteredTasks = filteredTasks.filter(task => task.completed);
                break;
        }
        if (searchTerm) {
            filteredTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        return filteredTasks;
    }
    clearCompletedTask() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.saveTasks();
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
