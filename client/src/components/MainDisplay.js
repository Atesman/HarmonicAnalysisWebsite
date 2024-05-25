import React, {useState, useEffect} from 'react';
import identifyChords from '../utils/IdentifyChords.js'
import nameChords from '../utils/NameChords.js'
import '../styles/MainDisplay.css';


function MainDisplay({notes, tonic, sharpOrFlat}){

	const [chordInfo, updateChords] = useState(new Map());
	const [chordNames, updateChordNames] = useState([]);

	useEffect(() => {
		const newChordInfo = identifyChords(notes);
		updateChords(newChordInfo);

		newChordInfo.forEach((value, key) => {
			console.log(key+", " +value);
		});

		const tempNames = nameChords(newChordInfo, tonic, sharpOrFlat);
		updateChordNames(tempNames);

		tempNames.forEach((chordList) => {
			console.log(chordList.join(', '));
		});

	}, [notes]);

	useEffect(() => {
		const tempNames = nameChords(chordInfo, tonic, sharpOrFlat);
		updateChordNames(tempNames);
	}, [tonic, sharpOrFlat]);

	useEffect(() => {
	
	}, [chordNames]);




	return(
		<div className="main-display">
			<div>
				{chordNames.map((chordList, index) => (
                    <div key={index}>
                        {chordList.join(' - ')}
                    </div>
                ))}
			</div>
		</div>
	);
}

export default MainDisplay;