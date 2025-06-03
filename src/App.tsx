import { useState } from "react";
import { Todo } from "./models/Todo";

export const App = () => {

  const [todos, setTodos] = useState<Todo[]>([
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
  ]);

	return (
    <>
      
    </>
  );
};
