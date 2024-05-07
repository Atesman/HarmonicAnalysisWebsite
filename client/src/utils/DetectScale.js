

export function detectScale(notes){

	console.log(notes);
	const notesArray = notes.notes;

	return "Scale info here - " + notesArray.map(note => note ? '1' : '0').join('');
}