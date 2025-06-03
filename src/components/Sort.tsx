import { useState, type ChangeEvent } from "react";
import type { SortOptions } from "../types/SortOption";

type SortProps = {
    sortTodos: (sort: SortOptions) => void;
}

export const Sort = ({sortTodos}: SortProps) => {

	const [sortValue, setSortValue] = useState<SortOptions>('default');

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortValue(e.target.value as SortOptions);

		// Här skrivs inte variabeln sortValue eftersom den inte uppdateras förrän efter funktionen är klar...
		sortTodos(e.target.value as SortOptions);
	}

	return (
		<>
			<select onChange={handleChange} value={sortValue}>
				<option value='default'>No sorting</option>
				<option value='asc'>Ascending</option>
				<option value='desc'>Descending</option>
			</select>
		</>
	);
};
