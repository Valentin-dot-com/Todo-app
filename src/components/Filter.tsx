import type { ChangeEvent } from "react";
import type { FilterOption } from "../types/FilterOption";

type FilterProps = {
	filterValue: FilterOption;
    setFilterValue: (filterValue: FilterOption) => void;
}

export const Filter = ({setFilterValue, filterValue}: FilterProps) => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.target.value as FilterOption);
    }
	return (
		<>
        <div>
            <p>Show:</p>
			<select onChange={handleChange} value={filterValue}>
				<option value='all'>All tasks</option>
				<option value='notDone'>Not done tasks</option>
				<option value='done'>Done tasks</option>
			</select>
        </div>
		</>
	);
};
