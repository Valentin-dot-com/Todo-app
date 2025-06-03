import type { Todo } from '../models/Todo';
import type { SortOptions } from '../types/SortOption';
import { Sort } from './Sort';
import { TodoItem } from './TodoItem';

type TodoPresentationProps = {
	todos: Todo[];
	toggleAsDone: (id: number) => void;
	deleteTodo: (id: number) => void;
    sortTodos: (sort: SortOptions) => void;
};

export const Todos = ({ todos, toggleAsDone, deleteTodo, sortTodos }: TodoPresentationProps) => {

	return (
		<>
			<section>
				<h2>Todos</h2>
				<div>
					<Sort sortTodos={sortTodos} />
				</div>
				<ul>
					{todos.map((t) => (
						<TodoItem todoItem={t} toggleAsDone={toggleAsDone} deleteTodo={deleteTodo} key={t.id}/>
					))}
				</ul>
			</section>
		</>
	);
};
