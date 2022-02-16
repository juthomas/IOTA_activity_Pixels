/* eslint-disable */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./level-1-1.css";
import PixelsGrid from "./PixelsGrid";
import CellContentBinary from "./CellContentBinary";
import { step1 } from "./config/activity-data/level1-data";

function createDataGrid(data) {
	let sizeX = 18;
	let sizeY = 18;

	console.log("data :", data);
	const grid = Array.from(Array(sizeY).keys()).map(() =>
		Array.from(Array(sizeX).keys())
	);
	Array.from(Array(sizeY).keys()).forEach((i) => {
		Array.from(Array(sizeX).keys()).forEach((j) => {
			grid[i][j] = { value: data.initialValues[i][j], initialValue: data.initialGrid[i][j] };

		});
	});
	return grid;
}

const Level1 = ({ ckey, content, savedData, setDataToUse }) => {


	const [grid, setGrid] = useState(createDataGrid(step1));
	const [gridValid, setGridValid] = useState(false);

	const printGrid = (grid) => {
		let text = "[\n";
		grid.map((row, y) => {
			text += "[";
			row.map((cell, x) => {
				// const { value, initialValue } = cell.toJSON();
				text += cell.value + ", ";
				// console.log(cell)
			});
			text += "],\n";
		});
		text += "]\n";
		console.log(text);
	};

	const checkGridDone = (grid) => {
		let isValid = true;
		grid.map((row, y) => {
			row.map((cell, x) => {
				if (grid[y][x].value != grid[y][x].initialValue)
					isValid = false;
			})
		})
		return (isValid);
	}


	useEffect(() => {
		console.log("Grid has changed:", grid);
		printGrid(grid);
		setGridValid(checkGridDone(grid));
	}, [grid]);


	const updateGridState = (data) => {
		console.log("Change Value :", data);
		let newarr = [...grid];
		newarr[data.y][data.x]
			= { value: data.newValue, initialValue: data.initialState };
		setGrid(newarr);
	};

	return (
		<div className="activity-div">
			{gridValid ? <div>Grid completed</div> : null}
			<PixelsGrid drawColNumber={true} grid={grid} onChange={updateGridState} CellContent={CellContentBinary}/>
		</div>
	);
};

Level1.propTypes = {
	ckey: PropTypes.string,
	content: PropTypes.shape({
		itemNb: PropTypes.number,
		savedData: PropTypes.arrayOf(PropTypes.shape()),
	}),
};

Level1.defaultProps = {
	ckey: "Grid",
	content: {
		itemNb: 3,
		savedData: [],
	},
};

export default Level1;
