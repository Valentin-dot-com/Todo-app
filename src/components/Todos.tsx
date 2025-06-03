import type { Todo } from '../models/Todo';
import { TodoItem } from './TodoItem';

type TodoPresentationProps = {
	todos: Todo[];
	toggleAsDone: (id: number) => void;
	deleteTodo: (id: number) => void;
};

export const Todos = ({ todos, toggleAsDone, deleteTodo }: TodoPresentationProps) => {
	return (
		<>
			<section>
				<h2>Todos</h2>
				<ul>
					{todos.map((t) => (
						<TodoItem todoItem={t} toggleAsDone={toggleAsDone} deleteTodo={deleteTodo} key={t.id}/>
					))}
				</ul>
			</section>
		</>
	);
};
