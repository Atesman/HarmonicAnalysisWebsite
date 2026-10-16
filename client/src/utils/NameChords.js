
const TONE_COUNT = 12;

const BOTH_NOTE_NAMES = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
const SHARP_NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLAT_NOTE_NAMES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const SUFFIXES = ["", "7", "M7", "m", "m7", "mM7", "dim", "m7b5", "dim7", "dimM7", "+", "+7", "+M7"];


function nameChords(chordInfo, tonic, sharpOrFlat){

	const noteNames = assignNoteNames(sharpOrFlat);
	const tonicValue = BOTH_NOTE_NAMES.indexOf(tonic);
	const chordNames = [];

	chordInfo.forEach((value, key) => {
		const namedChords = [];
		value.forEach((chordShape) => {
			const chord = noteNames[(key + tonicValue) % TONE_COUNT] + SUFFIXES[chordShape];
			namedChords.push(chord);
		});
		if(namedChords.length > 0){
			chordNames.push(namedChords);
		}
	});

	return chordNames;
}


function assignNoteNames(sharpOrFlat){

	if(sharpOrFlat === "sharp"){
		return [...SHARP_NOTE_NAMES];
	}
	else if(sharpOrFlat === "flat"){
		return [...FLAT_NOTE_NAMES];
	}
	else if(sharpOrFlat === "both"){
		return [...BOTH_NOTE_NAMES];
	}
	else { 
		return [...FLAT_NOTE_NAMES];
	}
}

export default nameChords;