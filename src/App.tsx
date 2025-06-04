import { useState } from 'react';
import { Todo } from './models/Todo';
import { Todos } from './components/Todos';
import { CreateTodo } from './components/CreateTodo';
import type { SortOptions } from './types/SortOption';
import type { FilterOption } from './types/FilterOption';

export const App = () => {

	const [todos, setTodos] = useState<Todo[]>(
		JSON.parse(
			localStorage.getItem('todos') ||
				JSON.stringify([
					{
						id: 1,
						task: 'Damma & dammsuga hemma',
						done: false,
					},
					{
						id: 2,
						task: 'Gör klart portfolio-hemsidan',
						done: false,
					},
					{
						id: 3,
						task: 'Lär dig mer om react',
						done: false,
					},
					{
						id: 4,
						task: 'Handla mat och snacks till helgen',
						done: false,
					},
					{
						id: 5,
						task: 'Lämna in inlämningsuppgiften',
						done: false,
					},
				])
		)
	);

	/**
	 * State changes depending on what the user selects in dropdown
	 * If value is changed, the rendered copy of todo-list will sort accordingly
	 */

	const [sortBy, setSortBy] = useState<SortOptions>('default');

	const handleSortValue = (sortValue: SortOptions) => {
		setSortBy(sortValue);
	};

	/**
	 * 
	 */

	const [filter, setFilter] = useState<FilterOption>('all');

	const handleFilterValue = (filterValue: FilterOption) => {
		setFilter(filterValue);
	}

	/**
	 * Makes a copy of the todos-list
	 * if 'asc' or 'desc' is choosen in the dropdown the copied list
	 * will be sorted accordingly
	 * Whenever the original list is updated / rerendering,
	 * this copy will also be updated and rerendered
	 */
	let sortedTodos = [...todos];

	if (sortBy === 'asc') {
		sortedTodos.sort((a, b) => {
			if (a.task < b.task) {
				return -1;
			}
			if (a.task > b.task) {
				return 1;
			}
			return 0;
		});
	}

	if (sortBy === 'desc') {
		sortedTodos.sort((a, b) => {
			if (a.task > b.task) {
				return -1;
			}
			if (a.task < b.task) {
				return 1;
			}
			return 0;
		});
	}

	if (filter === 'done') {
		sortedTodos = sortedTodos.filter((t) => t.done === true);
	}

		if (filter === 'notDone') {
		sortedTodos = sortedTodos.filter((t) => t.done === false);
	}

	/**
	 * These are the function to handle the state of the todo-list
	 * and its items
	 */
	const toggleTodoAsDone = (id: number) => {
		setTodos(
			todos.map((t) => {
				if (t.id === id) {
					return { ...t, done: !t.done };
				}
				return t;
			})
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((t) => t.id !== id));
	};

	const createNewTodo = (todo: Todo) => {
		setTodos([...todos, todo]);
	};

	/**
	 * Always update localStorage to the newest version
	 */
	localStorage.setItem('todos', JSON.stringify(todos));

	return (
		<>
			<main>
				<header>
					<h1>ToDoIt</h1>
				</header>	
			</main>
			<Todos
				todos={sortedTodos}
				toggleAsDone={toggleTodoAsDone}
				deleteTodo={deleteTodo}
				sortValue={sortBy}
				setSortValue={handleSortValue}
				filterValue={filter}
				setFilterValue={handleFilterValue}
			/>
			<CreateTodo createTodo={createNewTodo} />
		</>
	);
};
