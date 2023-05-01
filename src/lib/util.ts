import { StoreState, ThemeState } from '../types/type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleDragEnd(result: any, tasksStore: StoreState) {
  if (!result.destination) return;

  const items = Array.from(tasksStore.allTasks);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);
  tasksStore.allTasks = items;
  localStorage.setItem('tasks', JSON.stringify(items));
}

export const toggleTheme = (tasksStore: ThemeState) => {
  if (tasksStore.theme === 'dark') {
    document.documentElement.classList.remove('dark');
    tasksStore.toggleTheme();
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    tasksStore.toggleTheme();
    localStorage.setItem('theme', 'dark');
  }
};
