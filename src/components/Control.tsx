import { useTasksStore } from '../store/store';

const Control = () => {
  const { allTasks, showAll, showActive, showCompleted, clearCompleted } =
    useTasksStore();

  return (
    <div className="flex items-center justify-between relative px-[1.5rem] pt-5  pb-[1.25rem]">
      <div className="min-w-[80px]">
        <span className="font-[400] text-[0.875rem]  dark:text-Very-Dark-Grayish-Blue2 dark:hover:text-Light-Grayish-Blue text-Dark-Grayish-Blue">
          {allTasks.length} items left
        </span>
      </div>
      <div className="flex items-center gap-4  max-w-[166px] max-[376px]:absolute max-[376px]:top-[72px] max-[376px]:right-[0px] max-[376px]:left-[-24px] max-[376px]:min-w-[327px] max-[376px]:justify-center  mx-[1.5rem]">
        <span
          onClick={showAll}
          className="hover:font-[700] hover:cursor-pointer text-[0.875rem]  dark:text-Very-Dark-Grayish-Blue2 dark:hover:text-Light-Grayish-Blue text-Dark-Grayish-Blue">
          All
        </span>
        <span
          onClick={showActive}
          className="hover:font-[700] hover:cursor-pointer text-[0.875rem]  dark:text-Very-Dark-Grayish-Blue2 dark:hover:text-Light-Grayish-Blue text-Dark-Grayish-Blue">
          Active
        </span>
        <span
          onClick={showCompleted}
          className="hover:font-[700] hover:cursor-pointer text-[0.875rem]  dark:text-Very-Dark-Grayish-Blue2 dark:hover:text-Light-Grayish-Blue text-Dark-Grayish-Blue">
          Complete
        </span>
      </div>
      <div className="min-w-[105px]">
        <span
          onClick={clearCompleted}
          className="hover:font-[400] hover:cursor-pointer text-[0.875rem] tracking-[-0.19px] dark:text-Very-Dark-Grayish-Blue2 dark:hover:text-Light-Grayish-Blue text-Dark-Grayish-Blue">
          Clear Completed
        </span>
      </div>
    </div>
  );
};

export default Control;
