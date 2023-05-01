export interface Tasks {
  id: string;
  task: string;
  active: boolean;
  completed: boolean;
  clicked: boolean;
}

export interface StoreState {
  allTasks: Tasks[];
  activeTasks: boolean;
  completedTasks: boolean;
  addTask: (task: Tasks) => void;
  removeTask: (task: Tasks) => void;
  clearAll: () => void;
  showAll: () => void;
  showActive: () => void;
  showCompleted: () => void;
  toggle: (id: Tasks) => void;
  clearCompleted: () => void;
  setTasks: (tasks: Tasks[]) => void;
}

export interface ThemeState {
  theme: string;
  toggleTheme: () => void;
}
