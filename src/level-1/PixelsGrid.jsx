/* eslint-disable */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./level-1-1.css";

const PixelsGrid = ({ drawColNumber, grid, onChange, CellContent}) => {
	return (
		<div className="grid">
			{grid.map((row, y) => {
				return (
					<div className="row-align">
					{drawColNumber ? <div style={{width:"2em", fontSize:"0.5em"}}>{y+1}</div> : null}
					<div key={y} className="grid-row">
						{row.map((cell, x) => {
							return (
								<div key={x} className="grid-cell">
									<CellContent
										cellData={cell}
										x={x}
										y={y}
										onChange={(value) => onChange(value)}
										/>
								</div>
							);
						})}
					</div>
					</div>
				);
			})}
		</div>
	);
};

PixelsGrid.propTypes = {
	grid: PropTypes.array,
	onChange: PropTypes.func,
};

PixelsGrid.defaultProps = {
	grid: [],
};

export default PixelsGrid;
