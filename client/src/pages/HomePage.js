import React, { useState } from 'react';
import NoteSelector from '../components/NoteSelector';
import '../styles/HomePage.css';


const HomePage = () => {

	const [notes, updateNoteValues] = useState([true, false, true, false, true, true, false, true, false, true, false, true]);

	return (
		<div className="note-selector-container">
			<NoteSelector notes={notes} updateNoteValues={updateNoteValues} />
		</div>
	);
}

export default HomePage;