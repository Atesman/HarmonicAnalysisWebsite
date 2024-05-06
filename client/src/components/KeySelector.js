import React, { useState } from 'react';
import '../styles/KeySelector.css';


function KeySelector({tonic, changeKey}) {
    const [activeKey, setActiveKey] = useState(tonic);

    const handleClick = (keyName) => {

    	if (activeKey === keyName) return;
    	
        setActiveKey(keyName);
        changeKey(keyName);
    };

    const keyNames = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];

    return (
        <div className="key-selector">
            {keyNames.map((keyName) => (
                <button
                    key={keyName}
                    onClick={() => handleClick(keyName)}
                    className={`button ${activeKey === keyName ? 'button-active' : ''}`}
                >
                    {keyName}
                </button>
            ))}
        </div>
    );
}

export default KeySelector;