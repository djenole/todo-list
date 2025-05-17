import { TaskService } from './core/services/TaskService';
import { Task } from './core/models/Task';

const taskService = new TaskService();

const newTask: Task = {
  id: '1',
  title: 'Learn TypeScript',
  completed: false,
  createdAt: new Date()
};

const task2: Task = {
  id: '31',
  title: 'Learn React',
  completed: false,
  createdAt: new Date()
};

taskService.addTask(newTask);
taskService.addTask(task2);
console.log(taskService.getTasks());