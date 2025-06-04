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
			<section className="min-w-full bg-white rounded-xl shadow-md p-6 space-y-4 md:min-w-3/4 lg:min-w-1/2 2xl:min-w-1/3">
				<h2 className='text-2xl font-BNattica tracking-wider'>Your tasks:</h2>
				<div className='flex flex-row justify-between border-b-2 border-emerald-700 pt-2 pb-4 mb-4'>
					<Sort sortValue={sortValue} setSortValue={setSortValue} />
					<Filter filterValue={filterValue} setFilterValue={setFilterValue} />
				</div>
				<ul className='flex flex-col min-w-full gap-4'>
					{todos.map((t) => (
						<TodoItem todoItem={t} toggleAsDone={toggleAsDone} deleteTodo={deleteTodo} key={t.id}/>
					))}
				</ul>
			</section>
		</>
	);
};
