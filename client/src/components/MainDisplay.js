import React, {useState, useEffect} from 'react';
import identifyChords from '../utils/IdentifyChords.js'
import '../styles/MainDisplay.css';


function MainDisplay({notes, tonic, sharpOrFlat}){

	const [chordInfo, calculateChords] = useState([0, 4, 7]);


	useEffect(() => {
		const newChordInfo = identifyChords(notes);
		calculateChords(newChordInfo);
		newChordInfo.forEach((value, key) => {
			console.log(key+", " +value);
		});
	}, [notes]);


	return(
		<div className="main-display">
			<div>
				     C         C7        CM7       Cm        Cm7       CmM7      Cdim    Cdim7     CdimM7    C+        C+7       C+M7     
			</div>
		</div>
	);
}

export default MainDisplay;