/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Set, List, setIn, fromJS } from 'immutable';
import './level-1-1.css'
// import Carousel from './Carousel';
// import InputImage from './InputImage';
// import { onDownload } from './check-images';

function createDataGrid(data)
{
	let sizeX = 10;
	let sizeY = 10;

	const grid = Array.from(Array(sizeY).keys()).map(() => Array.from(Array(sizeX).keys()));
	Array.from(Array(sizeY).keys()).forEach((i) => {
				Array.from(Array(sizeX).keys()).forEach((j) => {
			grid[i][j] = {value : data, initialState : false};
		})
	})
	return (fromJS(grid));
}

const CellContent = ({cellData, x, y, onChange}) => {

	const updateCell = (x, y) => {


	}
	const { value, initialState } = cellData.toJSON();
	
	return <div className='grid-cell-content' onClick={(e) => {
		e.target.style.background = 'red';
		console.log("cellData :", cellData)
		onChange({x:x, y:y});
		// cellData.set("value", 42);
		}}>
		{value}
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
	grid: PropTypes.object
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
					const { value, initialState } = cell.toJSON();
						text += value + ' ';
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
			
			let tmpgrid = grid;
			const x = value.x;
			const y = value.y;
			console.log("before",tmpgrid);
			printGrid(tmpgrid);
			// tmpgrid[value.x][value.y] = {value : '42', initialState : false};
			// tmpgrid = tmpgrid.set('grid', { x, y });
			tmpgrid = setIn(tmpgrid, [y, x], fromJS({value : '42', initialState : false}));
			// let cell = tmpgrid.getIn([x, y]);
			// console.log("Cell :", cell);
			console.log("after",tmpgrid);
			printGrid(tmpgrid);
			setGrid(tmpgrid);
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
