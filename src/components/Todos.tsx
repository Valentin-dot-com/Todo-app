import type { Todo } from '../models/Todo';
import type { SortOptions } from '../types/SortOption';
import { Sort } from './Sort';
import { TodoItem } from './TodoItem';

type TodoPresentationProps = {
	todos: Todo[];
	sortValue: SortOptions;
	setSortValue: (sortValue: SortOptions) => void;
	toggleAsDone: (id: number) => void;
	deleteTodo: (id: number) => void;
};

export const Todos = ({ todos, toggleAsDone, deleteTodo, sortValue, setSortValue }: TodoPresentationProps) => {

	return (
		<>
			<section>
				<h2>Your tasks:</h2>
				<div>
					<Sort sortValue={sortValue} setSortValue={setSortValue} />
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
