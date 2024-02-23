import React, { useState } from "react";

// Create your first component
const Home = () => {
	const [ticTacToe, setTicTacToe] = useState([
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined]
	]);

	const [turn, setTurn] = useState("X");

	const changeTurn = () => setTurn(turn === "X" ? "O" : "X"); 

	const setValue = ( rowIndex, colIndex) => {
		if (typeof ticTacToe[rowIndex][colIndex] === "undefined") {
			let aux = ticTacToe;
			aux[rowIndex][colIndex] = turn;
			setTicTacToe(aux);
			changeTurn();
		}
		else {
			alert("This place is taken... sorry!");
		}
	};

	return (
		<div className="text-center d-flex flex-column w-50 mx-auto m-5">
			<h1 className="mb-4">It's {turn} turn</h1>
			<table>
				<tbody>
					{ticTacToe.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((col, colIndex) => (
								<td key={colIndex} onClick={() => setValue(rowIndex, colIndex)}>
									<div className="cell">{col}</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Home;
