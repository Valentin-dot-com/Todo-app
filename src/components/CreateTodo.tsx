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
			<section className='flex flex-col mt-4 min-w-full bg-white rounded-xl shadow-md p-6 space-y-4 md:min-w-3/4 lg:min-w-1/2 2xl:min-w-1/3'>
				<h2 className='text-2xl font-BNattica tracking-wider'>Add task:</h2>
				<form onSubmit={createNewTodo} className='flex flex-col items-end'>
					<label className='flex flex-col min-w-full'>
                        <span className='font-BNBergen font-black tracking-wider mb-2'>What do you need to do?</span>
                        <input type='text' id='task' value={newTodo.task} onChange={handleChange} required className='min-w-full bg-gray-200 rounded-xl p-1 px-4 font-BNBergen tracking-wide hover:bg-gray-300 cursor-text'></input>
                    </label>
                    <button className='w-50 bg-emerald-800 p-2 mt-4 font-BNBergen text-white rounded-xl hover:bg-emerald-950 transition duration-300 ease-in-out'>Add new task</button>
				</form>
			</section>
		</>
	);
};
