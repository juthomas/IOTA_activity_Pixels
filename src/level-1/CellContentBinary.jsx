/* eslint-disable */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./level-1-1.css";

const CellContentBinary = ({ cellData, x, y, onChange }) => {
	return (
		<div
			className={`grid-cell-content ${
				cellData.value != '0' ? "grid-cell-selected" : ""
			}`}
			onClick={(e) => {
				// e.target.style.background = 'red';
				console.log("cellData :", cellData);
				onChange({
					x: x,
					y: y,
					newValue: cellData.value == "0" ? "1" : "0",
					initialState: cellData.initialValue,
				});
			}}
		>
			{cellData.initialValue}
		</div>
	);
};

CellContentBinary.propTypes = {
	cellData: PropTypes.object,
	x: PropTypes.number,
	y: PropTypes.number,
};

CellContentBinary.defaultProps = {
	cellData: null,
	x: 10,
	y: 10,
};

export default CellContentBinary;
