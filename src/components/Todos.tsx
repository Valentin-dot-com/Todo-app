import type { Todo } from '../models/Todo';
import type { FilterOption } from '../types/FilterOption';
import type { SortOptions } from '../types/SortOption';
import { Filter } from './Filter';
import { Sort } from './Sort';
import { TodoItem } from './TodoItem';

type TodoPresentationProps = {
	todos: Todo[];
	sortValue: SortOptions;
	filterValue: FilterOption;
	setSortValue: (sortValue: SortOptions) => void;
	toggleAsDone: (id: number) => void;
	deleteTodo: (id: number) => void;
	setFilterValue: (filterValue: FilterOption) => void;
};

export const Todos = ({ todos, toggleAsDone, deleteTodo, sortValue, setSortValue, setFilterValue, filterValue }: TodoPresentationProps) => {

	return (
		<>
			<section>
				<h2>Your tasks:</h2>
				<div>
					<Sort sortValue={sortValue} setSortValue={setSortValue} />
					<Filter filterValue={filterValue} setFilterValue={setFilterValue} />
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
