import { type ChangeEvent } from "react";
import type { SortOptions } from "../types/SortOption";

type SortProps = {
	sortValue: SortOptions;
	setSortValue: (sortValue: SortOptions) => void;
}

export const Sort = ({sortValue, setSortValue}: SortProps) => {

	// const [sortValue, setSortValue] = useState<SortOptions>('default');

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortValue(e.target.value as SortOptions);
	}

	return (
		<>
			<div>
				<p className="mb-2 text-emerald-800 text-xl font-BNBergen tracking-wider">Sort:</p>
				<select onChange={handleChange} value={sortValue} className="p-2 rounded-lg bg-gray-100">
					<option value='default'>No sorting</option>
					<option value='asc'>By name: ascending</option>
					<option value='desc'>By name: descending</option>
				</select>
			</div>
		</>
	);
};
