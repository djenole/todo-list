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

  getTasks(filter: string = 'all', searchTerm: string = ''): Task[] {
    let filteredTasks = this.tasks;

    switch(filter) {
      case 'active':
        filteredTasks = filteredTasks.filter(task => !task.completed);
        break;
      case 'completed':
        filteredTasks = filteredTasks.filter(task => task.completed);
        break;
    }
      if(searchTerm) {
        filteredTasks = filteredTasks.filter(task =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filteredTasks;
  }

  clearCompletedTask(): void {
    this.tasks = this.tasks.filter(task => !task.completed);
    this.saveTasks();
  }

   getCategoryStats(category: 'Trabalho' | 'Estudo' | 'Pessoal') {
        const categoryTasks = this.tasks.filter(t => t.category === category);
        const pending = categoryTasks.filter(t => !t.completed).length;
        
        return {
            total: categoryTasks.length,
            pending,
            progress: categoryTasks.length > 0 
                ? Math.round((pending / categoryTasks.length) * 100) 
                : 0
        };
    }

 

  private loadTasks(): void {
    const savedTasks = localStorage.getItem('tasks');
    this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}