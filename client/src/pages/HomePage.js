import React, { useState } from 'react';
import MainDisplay from '../components/MainDisplay';
import KeySelector from '../components/KeySelector';
import NoteSelector from '../components/NoteSelector';
import SharpOrFlat from '../components/SharpOrFlat';
import DegreeDisplay from '../components/DegreeDisplay';
import InfoDisplay from '../components/InfoDisplay';
import '../styles/HomePage.css';


const HomePage = () => {

	const [notes, updateNoteValues] = useState([true, false, true, false, true, true, false, true, false, true, false, true]);
	const [tonic, changeKey] = useState("C");
	const [sharpOrFlat, changeSharpOrFlat] = useState("default");

	return (
		<div className="home-page-container">

			<div className="main-display-container">
				<MainDisplay />
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
			<div className="degree-display-container">
				<DegreeDisplay />
			</div>
			<div className="info-display-container">
				<InfoDisplay />
			</div>
		</div>
	);
}

export default HomePage;