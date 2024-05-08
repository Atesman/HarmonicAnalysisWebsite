import scaleDictionary from './ScaleDictionary';


export function detectScale(notes){

	console.log(notes);
	const notesArray = notes.notes;
	const notesString = notesArray.map(note => note ? '1' : '0').join('');
	console.log(notesString);

	let scaleInfo = ["N/A", "N/A"];


	if (scaleDictionary.has(notesString)) {
		console.log("we found a match");
		scaleInfo = scaleDictionary.get(notesString);
	}



	return scaleInfo[0] + "  /  " + scaleInfo[1];
}