import { useState } from 'react';
import { Todo } from './models/Todo';
import { Todos } from './components/Todos';

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

	console.log(todos);

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

	localStorage.setItem('todos', JSON.stringify(todos));

	return (
		<>
			<Todos todos={todos} toggleAsDone={toggleTodoAsDone} deleteTodo={deleteTodo} />
		</>
	);
};
