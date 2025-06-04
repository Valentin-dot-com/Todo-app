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
            <p className="mb-2 text-emerald-800 text-xl font-BNBergen tracking-wider text-right">Show:</p>
			<select onChange={handleChange} value={filterValue} className="p-2 rounded-lg bg-gray-100">
				<option value='all'>All tasks</option>
				<option value='notDone'>Not done tasks</option>
				<option value='done'>Done tasks</option>
			</select>
        </div>
		</>
	);
};
