import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Control from './Control';
import Items from './Items';
import { handleDragEnd } from '../lib/util';
import { StoreState } from '../types/type';

const Section: React.FC<{ items: StoreState }> = ({ items }) => {
  return (
    <main className="max-w-[540px]  min-h-[48px] min-w-[327px] mx-auto rounded-md  bg-white dark:bg-Very-Dark-Desaturated-Blue mb-[3.0625rem]">
      <section className="mb-[1rem]">
        <DragDropContext onDragEnd={(result) => handleDragEnd(result, items)}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items.allTasks.map((item, index) => {
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
  );
};

export default Section;
