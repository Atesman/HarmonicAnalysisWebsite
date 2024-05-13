import React, {useState, useEffect} from 'react';
import detectScale from '../utils/DetectScale.js'
import '../styles/InfoDisplay.css';


const InfoDisplay = React.memo(function InfoDisplay(notes){

	const [scaleInfo, updateInfo] = useState(["Major / Ionian - 1st Mode of the Major Scale"]);
	

	useEffect(() => {
		const newScaleInfo = detectScale(notes);
		updateInfo(newScaleInfo);
	}, [notes]);


	return(
		<div className="info-display">
			<div>
				    {scaleInfo}   
			</div>
		</div>
	);
});

export default InfoDisplay;