import type { Todo } from '../models/Todo';

type TodoItemProps = {
	todoItem: Todo;
	toggleAsDone: (id: number) => void;
	deleteTodo: (id: number) => void;
};

export const TodoItem = ({ todoItem, toggleAsDone, deleteTodo }: TodoItemProps) => {
	return (
		<>
			<li className='flex flex-row justify-between bg-gray-200 px-4 p-2 rounded-xl shadow-md'>
				<div className='flex flex-row gap-4 items-center'>
					<input type='checkbox' checked={todoItem.done} onChange={() => toggleAsDone(todoItem.id)} className='w-5 h-5 rounded-full accent-emerald-600 hover:ring-2 ring-emerald-600'/>
					<h3 className={todoItem.done ? "line-through text-gray-400 font-BNBergen tracking-wide transition duration-300 ease-in-out" : "font-BNBergen tracking-wide transition duration-300 ease-in-out"}>{todoItem.task}</h3>
				</div>
				<button onClick={() => deleteTodo(todoItem.id)} aria-label='delete this task' className='aspect-square p-2.5 text-red-700 rounded-xl hover:text-white hover:bg-red-700 cursor-pointer transition duration-300 ease-in-out'><span className="material-symbols-outlined">close</span></button>
			</li>
		</>
	);
};
