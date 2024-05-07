import React, {useState, useEffect} from 'react';
import {detectScale} from '../utils/DetectScale.js'
import '../styles/InfoDisplay.css';


function InfoDisplay(notes){

	const [scaleInfo, updateInfo] = useState();
	

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
}

export default InfoDisplay;