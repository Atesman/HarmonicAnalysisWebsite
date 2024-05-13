

function calculateDegrees(notes){

	const scale = notes.notes;
	let noteDegreeNames = [];
	const degreeSymbols = {
		 1: 'b2',
		 2: '2',
		 4: '3',
		 5: '4',
		 7: '5',
		 9: '6',
		10: 'b7',
		11: '7'
	};

	for (let i = 0; i < scale.length; i++) {

	    // Tonic is hard-coded
	    if (i == 0) {
	        noteDegreeNames.push("1");
	        continue;
	    }

	    // #2/b3
	    if (i == 3 && scale[i] == 1) {
	        sharpTwoFlatThree(scale, noteDegreeNames);
	        continue;
	    }

	    // Tritone
	    if (i == 6 && scale[i] == 1) {
	        tritone(scale, noteDegreeNames);
	        continue;
	    }

	    // #5/b6
	    if (i == 8 && scale[i] == 1) {
	        sharpFiveFlatSix(scale, noteDegreeNames);
	        continue;
	    }
	    
	    // All other degrees
	    if (scale[i] == 1) {
	        noteDegreeNames.push(degreeSymbols[i]);
	        continue;
	    }
	}


	let degrees = noteDegreeNames.join(" - ");


	return degrees;
}


function sharpTwoFlatThree(scale, noteDegreeNames) {

    // If Major 3rd is present
    if (scale[4] == 1) {
        noteDegreeNames.push("#2");
    }

    // If NO Major 3rd is present
    else {
        noteDegreeNames.push("b3");
    }
}


function tritone(scale, noteDegreeNames) {

	//INCOMPLETE TRITONE LOGIC

    // If 4 = YES and 5 = NO
    if (scale[5] == 1 && scale[7] == 0) {
        noteDegreeNames.push("b5");
    }

    // If 4 = NO and 5 = YES
    else if (scale[5] == 0 && scale[7] == 1) {
        noteDegreeNames.push("#4");
    }

    // If 4 = YES and 5 = YES
    else if (scale[5] == 1 && scale[7] == 1) {

        // If Major 3 is present at all
        if (scale[4] == 1) {
            noteDegreeNames.push("#4");
        }
        // If ONLY Minor 3rd is present
        else if (scale[3] == 1) {
            noteDegreeNames.push("b5");
        }
        // If NO 3rd present
        else {
            noteDegreeNames.push("b5");
        }
        //INCOMPLETE TRITONE LOGIC
    }

    // If 4 = NO and 5 = NO
    else {
        noteDegreeNames.push("b5");
    }

    // INCOMPLETE TRITONE LOGIC
}


function sharpFiveFlatSix(scale, noteDegreeNames) {
    // If 5 = NO and 3 = YES
    if (scale[7] == 0 && scale[4] == 1) {
        noteDegreeNames.push("#5");
    } else {
        noteDegreeNames.push("b6");
    }
}


export default calculateDegrees;