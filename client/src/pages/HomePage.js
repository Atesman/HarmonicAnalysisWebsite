import React, { useState } from 'react';
import DisplayWindow from '../components/DisplayWindow';
import KeySelector from '../components/KeySelector';
import NoteSelector from '../components/NoteSelector';
import SharpOrFlat from '../components/SharpOrFlat';
import '../styles/HomePage.css';


const HomePage = () => {

	const [notes, updateNoteValues] = useState([true, false, true, false, true, true, false, true, false, true, false, true]);
	const [tonic, changeKey] = useState("C");
	const [sharpOrFlat, changeSharpOrFlat] = useState("default");

	return (
		<div className="home-page-container">
			<div className="display-window-container">
				<DisplayWindow />
			</div>
			<div className="note-selector-container">
				<NoteSelector notes={notes} updateNoteValues={updateNoteValues} />
			</div>
			<div className="key-selector-container">
				<KeySelector tonic={tonic} changeKey={changeKey} />
			</div>
			<div className="sharp-or-flat-container">
				<SharpOrFlat sharpOrFlat={sharpOrFlat} changeSharpOrFlat={changeSharpOrFlat} />
			</div>
		</div>
	);
}

export default HomePage;