import React, { useState } from 'react';
import DisplayWindow from '../components/DisplayWindow';
import NoteSelector from '../components/NoteSelector';
import '../styles/HomePage.css';


const HomePage = () => {

	const [notes, updateNoteValues] = useState([true, false, true, false, true, true, false, true, false, true, false, true]);

	return (
		<div className="home-page-container">
			<div className="display-window-container">
				<DisplayWindow />
			</div>
			<div className="note-selector-container">
				<NoteSelector notes={notes} updateNoteValues={updateNoteValues} />
			</div>
		</div>
	);
}

export default HomePage;