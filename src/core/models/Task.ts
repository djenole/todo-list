export interface Task {
  id: string;
  title: string;
  description: string;
  category: 'Trabalho' | 'Estudo' | 'Pessoal';
  priority: 'Baixa' | 'Média' | 'Alta';
  completed: boolean;
  isEditing?: boolean;
}