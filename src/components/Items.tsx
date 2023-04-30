import { Tasks } from '../types/type';
import { useTasksStore } from '../store/store';

const Items: React.FC<{ item: Tasks }> = ({ item }) => {
  const { removeTask, toggle } = useTasksStore();

  const handleClicked = () => {
    toggle(item);
  };
  const remove = () => {
    removeTask(item);
  };

  return (
    <div className=" group flex items-center gap-[1.5rem] pt-[1.3125rem] px-[1rem] pb-[1.5rem] border-b-2 border-grey-50 hover:cursor-pointer">
      <div
        className={
          item.clicked
            ? 'rounded-[50%]  px-[0.5rem] py-[0.5625rem] bg-gradient-to-tl from-checked1 to-checked hover:cursor-pointer w-[24px] h-[24px]'
            : 'rounded-[50%]  border-checked border-2 px-[0.5rem] py-[0.5625rem] hover:cursor-pointer w-[24px] h-[24px]'
        }
        onClick={handleClicked}>
        {item.clicked ? (
          <img src="src/assets/images/icon-check.svg" alt="check"></img>
        ) : (
          ''
        )}
      </div>
      <span
        className={
          item.clicked
            ? 'line-through font-[400] text-[1.125rem] tracking-[-0.25px] dark:text-Very-Dark-Grayish-Blue text-Dark-Grayish-Blue '
            : 'font-[400] text-[1.125rem] tracking-[-0.25px] text-Very-Dark-Grayish-Blue2 dark:text-Dark-Grayish-Blue'
        }>
        {item.task}
      </span>
      <div className="ml-auto hidden group-hover:block max-[676px]:block">
        <button onClick={remove}>
          <img src="src/assets/images/icon-cross.svg" alt="cross" />
        </button>
      </div>
    </div>
  );
};

export default Items;
