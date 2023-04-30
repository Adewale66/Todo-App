import { MantineProvider, Input } from '@mantine/core';
import { useState } from 'react';
import { BsCircle } from 'react-icons/bs';
import Items from './components/Items';
import { useTasksStore } from './store/store';
import Control from './components/Control';
import { v4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App() {
  const localTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(localTheme ? localTheme : 'light');
  const [task, setTask] = useState('');
  const tasksStore = useTasksStore();

  const items = tasksStore.completedTasks
    ? tasksStore.allTasks.filter((task) => task.completed)
    : tasksStore.activeTasks
    ? tasksStore.allTasks.filter((task) => !task.completed)
    : tasksStore.allTasks;

  if (localTheme === 'dark' || (!localTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

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
  };
  localStorage.setItem('tasks', JSON.stringify(tasksStore.allTasks));

  function handleDragEnd(result: {
    destination: { index: number };
    source: { index: number };
  }) {
    if (!result.destination) return;
    console.log(result);

    const items = Array.from(tasksStore.allTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    tasksStore.allTasks = items;
  }

  return (
    <div className="bg-Very-Light-Grayish-Blue min-w-[375px] dark:bg-Very-Dark-Blue min-h-screen">
      <div className="bg-[url('assets/images/bg-desktop-light.jpg')] dark:bg-[url('assets/images/bg-desktop-dark.jpg')] bg-no-repeat bg-cover max-h-[300px]  min-h-[200px] min-w-[375px] pt-[4.375rem] px-[26px]">
        <header className="max-w-[541px] max-h-[48px] min-h-[20px] min-w-[325px] flex justify-between items-center mx-auto mb-[2.5rem]">
          <span className="uppercase tracking-[15px] max-w-[167px] text-[2.5rem] text-white font-[700] dark:text-black">
            todo
          </span>
          <button className="hover:cursor-pointer" onClick={toggleTheme}>
            {theme === 'light' ? (
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

      <main className="max-w-[540px]  min-h-[48px] min-w-[327px] mx-auto rounded-md  bg-white dark:bg-Very-Dark-Desaturated-Blue mb-[3.0625rem]">
        <section className="mb-[1rem]">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="tasks">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {items.map((item, index) => {
                    return (
                      <Draggable
                        key={item.id}
                        index={index}
                        draggableId={item.id}>
                        {(provided) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}>
                            <Items item={item} />
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </section>
        <Control />
      </main>
      <div className="text-center">
        <span className="font-[400] text-[0.875rem] tracking-[-0.19px] dark:text-Very-Dark-Grayish-Blue2 text-Dark-Grayish-Blue">
          Drag and drop to reorder list
        </span>
      </div>
    </div>
  );
}

export default App;
