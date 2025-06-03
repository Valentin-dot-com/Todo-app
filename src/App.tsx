import { useState } from 'react';
import { Todo } from './models/Todo';
import { Todos } from './components/Todos';
import { CreateTodo } from './components/CreateTodo';
import type { SortOptions } from './types/SortOption';

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

	const [sortedTodos, setSortedTodos] = useState<Todo[]>([...todos]);

	const sortTodos = (sortBy: SortOptions) => {
		const todosSorted = [...todos];
		if (sortBy === 'default') {
			setSortedTodos([...todos]);
		}
		if (sortBy === 'asc') {
			todosSorted.sort((a, b) => {
				if(a.task < b.task) {return -1; }
				if(a.task > b.task) {return 1; }
				return 0;
			});
		}
		if (sortBy === 'desc') {
			todosSorted.sort((a, b) => {
				if(a.task > b.task) {return -1; }
				if(a.task < b.task) {return 1; }
				return 0;
			});
		}
		setSortedTodos(todosSorted);
	};

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

	localStorage.setItem('todos', JSON.stringify(todos));

	return (
		<>
			<Todos todos={sortedTodos} toggleAsDone={toggleTodoAsDone} deleteTodo={deleteTodo} sortTodos={sortTodos} />
			<CreateTodo createTodo={createNewTodo} />
		</>
	);
};
