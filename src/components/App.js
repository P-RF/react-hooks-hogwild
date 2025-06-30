import React, {useState} from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import NewHogForm from "./NewHogForm";

import hogs from "../porkers_data";

function App() {
	const [showGreasedHogsOnly, setShowGreasedHogsOnly] = useState(false); // add state to track the filter
	const [sortHogsBy, setSortHogsBy] = useState("name"); // add sorting to state
	const [allHogs, setAllHogs] = useState(hogs); // state variable to hold all hogs

	const handleGreasedHogsCheckbox = () => {
		setShowGreasedHogsOnly((prev) => !prev);
	}

	const filteredHogs = showGreasedHogsOnly ? allHogs.filter((hog) => hog.greased) : allHogs;

	const sortedHogs = [...filteredHogs];
		if (sortHogsBy === "name") {
			sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortHogsBy === "weight") {
			sortedHogs.sort((a, b) => a.weight - b.weight)
	}

	const addNewHog = (newHog) => {
		setAllHogs([...allHogs, newHog]);
	};

	return (
		<div className="App">
			<Nav />

			<NewHogForm onAddHog={addNewHog}/>

			<div className="sort-hogs">
				<label>
					Sort by:
					<select value={sortHogsBy} onChange={(e) => setSortHogsBy(e.target.value)}>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</label>
			</div>

			<div className="filter-hogs">
				<label>
					<input
						type="checkbox"
						checked={showGreasedHogsOnly}
						onChange={handleGreasedHogsCheckbox}
					/>
					Show only greased hogs
				</label>
			</div>

			<div className="ui grid container">
			{sortedHogs.map((hog) => (
				<HogTile key={hog.name} hog={hog} />
			))}
			</div>
		</div>
	);
}

export default App;
