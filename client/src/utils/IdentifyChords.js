
const TONE_COUNT = 12;

const CHORD_DICTIONARY = [
    // Major chords
    [0, 4, 7],
    [0, 4, 7, 10],
    [0, 4, 7, 11],
    // Minor chords
    [0, 3, 7],
    [0, 3, 7, 10],
    [0, 3, 7, 11],
    // Diminished chords
    [0, 3, 6],
    [0, 3, 6, 10],
    [0, 3, 6, 9],
    [0, 3, 6, 11],
    // Augmented chords
    [0, 4, 8],
    [0, 4, 8, 10],
    [0, 4, 8, 11]
];


function identifyChords(notes){

	const scale = [...notes];
	const degrees = findDegrees(scale);

	const allChords = new Map();
	let currentMode = [];

	for(const degree of degrees){

		currentMode = calculateMode(scale, degree);
		const chords = [];

		for(let i = 0; i < CHORD_DICTIONARY.length; i++ ){
			if(chordExists(currentMode, CHORD_DICTIONARY[i])){
				chords.push(i);
			}
		}

		if(chords.length > 0){
			allChords.set(degree, chords);
		}
	}

	return allChords;
}


function findDegrees(scale){

	const degrees = [];

	for(let i = 0; i < TONE_COUNT; i++){
		if(scale[i] === true){
			degrees.push(i);
		}
	}

	return degrees;
}


function calculateMode(scale, degree){

	const currentMode = new Array(TONE_COUNT).fill(false);
	
	for(let i = 0; i < (TONE_COUNT - degree); i++){
		currentMode[i] = scale[degree + i]
	}
	for(let i = 0; i < degree; i++){
		currentMode[TONE_COUNT - degree + i] = scale[i];
	}

	return currentMode;
}


function chordExists(mode, chord){

	for(const note of chord){
		if(mode[note] === false){
			return false;
		}
	}
	return true;
}

export default identifyChords;