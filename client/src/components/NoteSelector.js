import React, { useState } from 'react';
import '../styles/NoteSelector.css';


function NoteSelector() {

	const [buttonStates, setButtonStates] = useState([true, false, true, false, true, true, false, true, false, true, false, true]);
	const buttonNames = ["1", "2b", "2", "b3", "3", "4", "#4/b5", "5", "b6", "6", "b7", "7"];

	const handleButtonClick = index => {
		const newStates = [...buttonStates];
		newStates[index] = !newStates[index];
		setButtonStates(newStates);
	}

	return(
		<div className="note-selector">
			{buttonStates.map((state, index) => (
				<button
					key={index}
					onClick={() => handleButtonClick(index)}
					className={`button ${state ? 'button-active' : ''}`}
				>
				{buttonNames[index]}
				</button>
			))}
		</div>
	);
}

export default NoteSelector;