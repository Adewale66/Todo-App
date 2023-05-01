import { useTasksStore } from './store/store';
import Header from './components/Header';
import Section from './components/Section';
import { useEffect } from 'react';

function App() {
  const tasksStore = useTasksStore();
  const { setTasks } = useTasksStore();

  useEffect(() => {
    const localStorageData = localStorage.getItem('tasks');
    if (localStorageData) {
      setTasks(JSON.parse(localStorageData));
    }
  }, [setTasks]);

  return (
    <div className="bg-Very-Light-Grayish-Blue min-w-[375px] dark:bg-Very-Dark-Blue min-h-screen">
      <Header />
      <Section items={tasksStore} />

      <div className="text-center">
        <span className="font-[400] text-[0.875rem] tracking-[-0.19px] dark:text-Very-Dark-Grayish-Blue2 text-Dark-Grayish-Blue">
          Drag and drop to reorder list
        </span>
      </div>
    </div>
  );
}

export default App;
