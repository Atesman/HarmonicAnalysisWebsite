
const scaleDictionary = new Map([


// PENTATONIC

  ["101010010100", ["Major Pentatonic", ""]],
  ["100101010010", ["Minor Pentatonic", ""]],


// HEXATONIC

  ["100110011001", ["Augmented", ""]],
  ["101110010100", ["Major Blues", ""]],
  ["100101110010", ["Minor Blues", ""]],
  ["101011010100", ["Major Hexatonic", ""]],
  ["101101010010", ["Minor Hexatonic", ""]],
  ["101010100110", ["Prometheus", "Mystic chord: 1-#4-b7-3-6-2"]], // b5 instead of #4
  ["101010101010", ["Whole Tone", ""]], // b5 instead of #4


// HEPTATONIC

  // Major
  ["101011010101", ["Major", "Ionian - 1st Mode of the Major Scale"]],
  ["101101010110", ["Dorian", "2nd Mode of the Major Scale"]],
  ["110101011010", ["Phrygian", "3rd Mode of the Major Scale"]],
  ["101010110101", ["Lydian", "4th Mode of the Major Scale"]],
  ["101011010110", ["Mixolydian", "5th Mode of the Major Scale"]],
  ["101101011010", ["Natural Minor", "Aeolian - 6th Mode of the Major Scale"]],
  ["110101101010", ["Locrian", "7th Mode of the Major Scale"]],

  //Harmonic Minor
  ["101101011001", ["Harmonic Minor", ""]],
  ["110101100110", ["Locrian Natural 6", "2nd Mode of the Harmonic Minor Scale"]],
  ["101011001101", ["Ionian #5", "3rd Mode of the Harmonic Minor Scale"]],
  ["101100110110", ["Dorian #11", "4th Mode of the Harmonic Minor Scale / aka Ukrainian Dorian or Romanian Minor"]],
  ["110011011010", ["Phyrgian Dominant", "5th Mode of the Harmonic Minor Scale"]],
  ["100110110101", ["Lydian #2", "6th Mode of the Harmonic Minor Scale"]],
  ["110110101100", ["Altered Diminished", "7th Mode of the Harmonic Minor Scale / aka Super Locrian bb7"]],

  //Melodic Minor
  ["101101010101", ["Melodic Minor", '"Ascending Melodic Minor"']],
  ["110101010110", ["Dorian b9", "2nd Mode of the Melodic Minor Scale"]],
  ["101010101101", ["Lydian Augmented", "3rd Mode of the Melodic Minor Scale"]],
  ["101010110110", ["Lydian Dominant", "4th Mode of the Melodic Minor Scale / aka Acoustic or Overtone"]],
  ["101011011010", ["Mixolydian b6", "5th Mode of the Melodic Minor Scale"]],
  ["101101101010", ["Aeolian b5", "6th Mode of the Melodic Minor Scale"]],
  ["110110101010", ["Altered", "7th Mode of the Melodic Minor Scale / aka Altered Dominant, Super Locrian, or Diminished Whole Tone"]],

  //Harmonic Major
  ["101011011001", ["Harmonic Major", ""]],
  ["101101100110", ["Dorian b5", "2nd Mode of the Harmonic Major Scale"]],
  ["110110011010", ["Phrygian b4", "3rd Mode of the Harmonic Major Scale"]],
  ["101100110101", ["Melodic Minor #4", "4th Mode of the Harmonic Major Scale"]],
  ["110011010110", ["Mixolydian b2", "5th Mode of the Harmonic Major Scale"]],
  ["100110101101", ["Lydian Augmented #2", "6th Mode of the Harmonic Major Scale"]],
  ["110101101100", ["Locrian bb7", "7th Mode of the Harmonic Major Scale"]],

  //Double Harmonic Major
  ["110011011001", ["Double Harmonic Major", "aka Byzantine or Gypsy Major"]],
  ["100110110011", ["Lydian #2 #6", "2nd Mode of the Double Harmonic Major Scale"]],
  ["110110011100", ["Ultraphrygian", "3rd Mode of the Double Harmonic Major Scale"]],
  ["101100111001", ["Double Harmonic Minor", "4th Mode of the Double Harmonic Major Scale / aka Hungarian Minor or Gypsy Minor"]],
  ["110011100110", ["Oriental", "5th Mode of the Double Harmonic Major Scale"]],
  ["100111001101", ["Ionian #2 #5", "6th Mode of the Double Harmonic Major Scale"]],
  ["111001101100", ["Locrian bb3 bb7", "7th Mode of the Double Harmonic Major Scale"]],


//OCTATONIC

  ["101101101101", ["Diminished", "Whole-Half Diminished"]],
  ["110110110110", ["Dominant Diminished", "Half-Whole Diminished"]],
  ["101011011101", ["Major Sixth Diminished", "Barry Harris's Sixth Diminished Scale"]],
  ["101101011101", ["Minor Sixth Diminished", "Barry Harris's Sixth Diminished Scale"]],


// DODECATONIC

  ["111111111111", ["Chromatic", ""]]

]);

export default scaleDictionary;