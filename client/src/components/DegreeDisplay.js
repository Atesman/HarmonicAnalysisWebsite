import React, {useState, useEffect} from 'react';
import calculateDegrees from '../utils/CalculateDegrees.js'
import '../styles/DegreeDisplay.css';


const DegreeDisplay = React.memo(function DegreeDisplay(notes){

	const [degreeInfo, updateInfo] = useState("1 - 2 - 3 - 4 - 5 - 6 - 7");


	useEffect(() => {
		const newDegreeInfo = calculateDegrees(notes);
		updateInfo(newDegreeInfo);
	}, [notes]);


	return(
		<div className="degree-display">
			<div>
				 	{degreeInfo}    
			</div>
		</div>
	);
});

export default DegreeDisplay;