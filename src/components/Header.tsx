import { useState } from 'react';
import { BsCircle } from 'react-icons/bs';
import { MantineProvider, Input } from '@mantine/core';
import { v4 } from 'uuid';
import { useTasksStore, themeStore } from '../store/store';
import { toggleTheme } from '../lib/util';

const Header = () => {
  const localTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [task, setTask] = useState('');
  const tasksStore = useTasksStore();
  const themeStoreValue = themeStore();

  if (localTheme === 'dark' || (!localTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!task) {
      alert('Please enter a task');
      return;
    }
    const newTask = {
      id: v4(),
      task: task,
      completed: false,
      active: true,
      clicked: false,
    };
    setTask('');
    tasksStore.addTask(newTask);
    const newTaskAdded = [...tasksStore.allTasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(newTaskAdded));
  };

  return (
    <div className="bg-[url('assets/images/bg-desktop-light.jpg')] dark:bg-[url('assets/images/bg-desktop-dark.jpg')] bg-no-repeat bg-cover max-h-[300px]  min-h-[200px] min-w-[375px] pt-[4.375rem] px-[26px]">
      <header className="max-w-[541px] max-h-[48px] min-h-[20px] min-w-[325px] flex justify-between items-center mx-auto mb-[2.5rem]">
        <span className="uppercase tracking-[15px] max-w-[167px] text-[2.5rem] text-white font-[700] dark:text-black">
          todo
        </span>
        <button
          className="hover:cursor-pointer"
          onClick={() => toggleTheme(themeStoreValue)}>
          {themeStoreValue.theme === 'light' ? (
            <img src="src/assets/images/icon-moon.svg" alt="moon logo" />
          ) : (
            <img src="src/assets/images/icon-sun.svg" alt="sun logo" />
          )}
        </button>
      </header>
      <section className="mb-[1.75rem] max-w-[540px] min-h-[48px] mx-auto ">
        <form onSubmit={handleSubmit}>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Input
              style={{ backgroundColor: 'red' }}
              icon={<BsCircle />}
              placeholder="Create a new todo . . . "
              value={task}
              size="lg"
              onChange={(e) => setTask(e.target.value)}
            />
          </MantineProvider>
        </form>
      </section>
    </div>
  );
};

export default Header;
