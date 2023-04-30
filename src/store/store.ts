import { create } from 'zustand';
import { StoreState, Tasks } from '../types/type';

export const useTasksStore = create<StoreState>((set) => ({
  allTasks: localStorage.getItem('tasks')
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      JSON.parse(localStorage.getItem('tasks')!)
    : [],
  activeTasks: false,
  completedTasks: false,

  addTask: (task: Tasks) =>
    set((state) => ({ allTasks: [...state.allTasks, task] })),
  removeTask: (id: Tasks) =>
    set((state) => ({
      allTasks: state.allTasks.filter((task) => task.id !== id.id),
    })),
  toggle: (id: Tasks) =>
    set((state) => ({
      allTasks: state.allTasks.map((task) =>
        task.id === id.id
          ? {
              ...task,
              completed: !task.completed,
              active: !task.active,
              clicked: !task.clicked,
            }
          : task
      ),
    })),

  showActive: () => {
    set((state) => ({
      activeTasks: true,
      completedTasks: state.allTasks.length > 0 ? !state.activeTasks : false,
    }));
  },
  showCompleted: () => {
    set((state) => ({
      completedTasks: state.allTasks.length > 0 ? true : false,
      activeTasks: state.allTasks.length > 0 ? !state.completedTasks : false,
    }));
  },
  showAll: () =>
    set((state) => ({
      allTasks: [...state.allTasks],
      completedTasks: false,
      activeTasks: false,
    })),

  clearAll: () => set(() => ({ allTasks: [] })),

  clearCompleted: () =>
    set((state) => ({
      allTasks: state.allTasks.filter((task) => task.completed === false),
    })),
}));
