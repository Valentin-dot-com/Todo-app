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
				<p>Sort:</p>
				<select onChange={handleChange} value={sortValue}>
					<option value='default'>No sorting</option>
					<option value='asc'>By name: ascending</option>
					<option value='desc'>By name: descending</option>
				</select>
			</div>
		</>
	);
};
