import React from 'react';
import '../styles/NoteSelector.css';


function NoteSelector({notes, updateNoteValues}) {

	const noteDegreeNames = ["1", "2b", "2", "b3", "3", "4", "#4/b5", "5", "b6", "6", "b7", "7"];

	const swapNoteValue = index => {
		if(index !== 0){
			const newNoteValues = [...notes];
			newNoteValues[index] = !newNoteValues[index];
			updateNoteValues(newNoteValues);
		}
	}

	return(
		<div className="note-selector">
			{notes.map((state, index) => (
				<button
					key={index}
					onClick={() => swapNoteValue(index)}
					className={`button ${state ? 'button-active' : ''}`}
				>
					{noteDegreeNames[index]}
				</button>
			))}
		</div>
	);
}

export default NoteSelector;