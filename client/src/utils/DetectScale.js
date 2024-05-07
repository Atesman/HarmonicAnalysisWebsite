

export function detectScale(notes){

	console.log(notes);
	const notesArray = notes.notes;
	const notesAsString = notesArray.join(", ");

	return "The Major Scale - " + notesAsString;
}