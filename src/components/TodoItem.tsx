import type { Todo } from '../models/Todo';

type TodoItemProps = {
	todoItem: Todo;
	toggleAsDone: (id: number) => void;
	deleteTodo: (id: number) => void;
};

export const TodoItem = ({ todoItem, toggleAsDone, deleteTodo }: TodoItemProps) => {
	return (
		<>
			<li>
				<h3>{todoItem.task}</h3>
				<input type='checkbox' checked={todoItem.done} onChange={() => toggleAsDone(todoItem.id)}/>
				<button onClick={() => deleteTodo(todoItem.id)}>Delete</button>
			</li>
		</>
	);
};
