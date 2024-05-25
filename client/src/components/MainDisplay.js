import React, {useState, useEffect} from 'react';
import identifyChords from '../utils/IdentifyChords.js'
import nameChords from '../utils/NameChords.js'
import '../styles/MainDisplay.css';


function MainDisplay({notes, tonic, sharpOrFlat}){

	const [chordInfo, updateChords] = useState(new Map([
		[0, [0, 2]],
		[2, [3, 4]],
		[4, [3, 4]],
		[5, [0, 2]],
		[7, [0, 1]],
		[9, [3, 4]],
		[11, [6, 7]],
		]));
	const [chordNames, updateChordNames] = useState([]);

	useEffect(() => {
		const newChordInfo = identifyChords(notes);
		updateChords(newChordInfo);


		const tempNames = nameChords(newChordInfo, tonic, sharpOrFlat);
		updateChordNames(tempNames);

		

	}, [notes]);

	useEffect(() => {
		const tempNames = nameChords(chordInfo, tonic, sharpOrFlat);
		updateChordNames(tempNames);
	}, [tonic, sharpOrFlat]);





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