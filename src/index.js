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
taskService.addTask(newTask);
console.log(taskService.getTasks());
