import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

// Create your first component
const Home = () => {
	const [ticTacToe, setTicTacToe] = useState([
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined]
	]);

	const [turn, setTurn] = useState("X");
	const [won, setWon] = useState(false);

	const changeTurn = () => setTurn(turn === "X" ? "O" : "X");

	const setValue = (rowIndex, colIndex) => {
		if (typeof ticTacToe[rowIndex][colIndex] === "undefined") {
			let aux = ticTacToe;
			aux[rowIndex][colIndex] = turn;
			setTicTacToe(aux);
			if (!checkWinner()) changeTurn();
		}
		else {
			alert("This place is taken... sorry!");
		}
	};

	const checkWinner = () => {
		let winnerFound = false;
		ticTacToe.forEach((row, i) => {
			row.forEach((col, j) => {
				// Filas
				if (
					typeof ticTacToe[i][j] !== "undefined" &&
					j > 0 && j < 2 &&
					ticTacToe[i][j] === ticTacToe[i][j + 1] &&
					ticTacToe[i][j] === ticTacToe[i][j - 1]
				) {
					console.log("Ganó");
					setWon(true);
					winnerFound = true;
				}
				// Columnas
				if (
					typeof ticTacToe[i][j] !== "undefined" &&
					i > 0 && i < 2 &&
					ticTacToe[i][j] === ticTacToe[i + 1][j] &&
					ticTacToe[i][j] === ticTacToe[i - 1][j]
				) {
					console.log("Ganó");
					setWon(true);
					winnerFound = true;
				}

				// Diagonales
				if (
					typeof ticTacToe[1][1] !== "undefined" &&
					ticTacToe[0][0] === ticTacToe[1][1] &&
					ticTacToe[0][0] === ticTacToe[2][2]
				) {
					console.log("Ganó");
					setWon(true);
					winnerFound = true;
				}
				if (
					typeof ticTacToe[1][1] !== "undefined" &&
					ticTacToe[0][2] === ticTacToe[1][1] &&
					ticTacToe[0][2] === ticTacToe[2][0]
				) {
					console.log("Ganó");
					setWon(true);
					winnerFound = true;
				}
			});
		});
		return winnerFound;
	};

	const reset = () => {
		setTicTacToe([
			[undefined, undefined, undefined],
			[undefined, undefined, undefined],
			[undefined, undefined, undefined]
		]);
		setWon(false);
		setTurn("X");
	};

	return (
		<div className="text-center d-flex flex-column w-50 mx-auto m-5">
			<h1 className="mb-4">It's {turn === "X" ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faCircle} />} turn</h1>
			<h2 className={won ? "show" : "hidden"}>{turn === "X" ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faCircle} />} is the winner!!</h2>
			<table className="mb-3">
				<tbody>
					{ticTacToe.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((col, colIndex) => (
								<td key={colIndex} onClick={() => setValue(rowIndex, colIndex)}>
									<div className="cell">
									{col === "X" ? <FontAwesomeIcon icon={faX} /> : (col === "O" ? <FontAwesomeIcon icon={faCircle} /> : "")}
									</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<button className="btn btn-outline-light" onClick={reset}>Play again</button>
		</div>
	);
};

export default Home;
