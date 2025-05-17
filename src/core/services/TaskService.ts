import { Task } from '../models/Task';

export class TaskService {
  private tasks: Task[] = [];

  constructor () {
    this.loadTasks();
  }
  addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
  }

  updateTask(updatedTask: Task): void {
    this.tasks = this.tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.saveTasks();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  private loadTasks(): void {
    const savedTasks = localStorage.getItem('tasks');
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}