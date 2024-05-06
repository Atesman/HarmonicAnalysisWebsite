import React, { useState } from 'react';
import '../styles/SharpOrFlat.css';


function SharpOrFlat({sharpOrFlat, changeSharpOrFlat}){

	const [currentChoice, updateChoice] = useState(sharpOrFlat);

	const handleClick = (choice) => {
    	if (currentChoice === choice) return;
        updateChoice(choice);
        changeSharpOrFlat(choice);
    };

    const choices = ["sharp", "flat", "both", "default"];

    return (
        <div className="sharp-or-flat">
            {choices.map((choice) => (
                <button
                    key={choice}
                    onClick={() => handleClick(choice)}
                    className={`button ${currentChoice === choice ? 'button-active' : ''}`}
                >
                    {choice === "sharp" ? "#" : 
	                 choice === "flat" ? "b" :
	                 choice === "both" ? "# / b" :
	                 choice === "default" ? "Default" : "Error"}
                </button>
            ))}
        </div>
    );

}

export default SharpOrFlat;