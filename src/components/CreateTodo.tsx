import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Todo } from '../models/Todo';

type CreateTodoProps = {
	createTodo: (todo: Todo) => void;
};

export const CreateTodo = ({ createTodo }: CreateTodoProps) => {
	const [newTodo, setNewTodo] = useState<Todo>(new Todo('', false));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo({...newTodo, [e.target.id]: e.target.value});
    }

    const createNewTodo = (e: FormEvent) => {
        e.preventDefault();

        createTodo(newTodo);

		// För att rensa inputfältet och för att nytt unikt id med Date.now() ska sättas
		setNewTodo(new Todo('', false));
    }

	return (
		<>
			<section>
				<h2>Add new to-do:</h2>
				<form onSubmit={createNewTodo}>
					<label>
                        <span>Task:</span>
                        <input type='text' id='task' value={newTodo.task} onChange={handleChange} required></input>
                    </label>
                    <button>Add new to-do</button>
				</form>
			</section>
		</>
	);
};
