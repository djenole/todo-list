"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskService_1 = require("./core/services/TaskService");
const taskService = new TaskService_1.TaskService();
const newTask = {
    id: '1',
    title: 'Learn TypeScript',
    completed: false,
    createdAt: new Date()
};
const task2 = {
    id: '31',
    title: 'Learn React',
    completed: false,
    createdAt: new Date()
};
taskService.addTask(newTask);
taskService.addTask(task2);
console.log(taskService.getTasks());
