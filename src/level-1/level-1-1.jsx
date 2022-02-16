/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './level-1-1.css'
// import Carousel from './Carousel';
// import InputImage from './InputImage';
// import { onDownload } from './check-images';

function createDataGrid(data)
{
	let sizeX = 12;
	let sizeY = 12;

	const grid = Array.from(Array(sizeY).keys()).map(() => Array.from(Array(sizeX).keys()));
	Array.from(Array(sizeY).keys()).forEach((i) => {
				Array.from(Array(sizeX).keys()).forEach((j) => {
			grid[i][j] = {value : data, initialState : false};
		})
	})
	return (grid);
}

const CellContent = ({cellData, x, y, onChange}) => {

	return <div className={`grid-cell-content ${cellData.initialState ? "grid-cell-selected" : ""}`} onClick={(e) => {
		// e.target.style.background = 'red';
		console.log("cellData :", cellData)
		onChange({x:x, y:y, 
			newValue: cellData.value == '0' ? '1' : '0',
			initialState: !cellData.initialState
		});
		}}
		>
		{cellData.value}
	</div>
}

CellContent.propTypes = {
	cellData: PropTypes.object,
	x: PropTypes.number,
	y: PropTypes.number,
}

CellContent.defaultProps = {
	cellData: null,
	x: 10,
	y: 10,
}

const RenderGrid = ({
	grid, onChange}
) => {
	return (
		<div className='grid'>
			{grid.map((row, y) => {
				return (
					<div key={y} className="grid-row">
					{/* bonjour {y} */}
						{row.map((cell, x) => {
							return (<div key={x} className="grid-cell">
								 <CellContent cellData={cell} x={x} y={y} onChange={(value) => onChange(value)}/>
							</div>)
						})}
				</div>)
			})}
		</div>
	);
}

RenderGrid.propTypes = {
	grid: PropTypes.array
}

RenderGrid.defaultProps = {
	grid: []
}

const Level1 = ({
	ckey,
	content,
	savedData,
	setDataToUse,
}) => {

	// const grid = createDataGrid();
	// console.log("Grid :", grid);
	// grid.map((row, i) => {console.log("Row :", row)})

  const [grid, setGrid] = useState(createDataGrid('0'));

	useEffect(() => {
    console.log("Grid has changed:", grid);
  }, [grid]);

	const printGrid = (grid) => {

		let text = ""
		grid.map((row, y) => {
			row.map((cell, x) => {
					// const { value, initialState } = cell.toJSON();
						text += cell.value + ' ';
					// console.log(cell)
					
					})
					text += '\n';
				})
			console.log(text);	
		}


	return (
		<div className='activity-div'>
		{/* HelloWorld */}
		{/* <div key='3'> */}
				{/* bonjour 3 */}
			{/* </div> */}
		<RenderGrid grid={grid} onChange={(value) => {
			console.log("Change Value :", value)
			const x = value.x;
			const y = value.y;
			let newarr = [...grid];
			newarr[y][x] = {value : value.newValue, initialState : value.initialState};
			setGrid(newarr);
			}}/>
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
	ckey: 'Grid',
	content: {
		itemNb: 3,
		savedData: [],
	},
};

export default Level1;
