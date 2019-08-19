import gotScales from 'got-scales'

console.log(gotScales);

export const getMajorScale = (note) => {
  return gotScales.note(note).scale('major').getNotes().map((n) => n.substring(0, 2));
};

export const getMinorScale = (note) => {
  return gotScales.note(note).scale('minor').getNotes().map((n) => n.substring(0, 2));
};

export const getMajorChord = (note) => {
  return gotScales.chord(note + 'maj').getNotes().map((n) => n.substring(0, 2));
};

export const getMinorChord = (note) => {
  return gotScales.chord(note + 'm').getNotes().map((n) => n.substring(0, 2));
};

export const getColor = (note, scale) => {
  let notes = note;

  if ( typeof note == "string" ) {
    notes = [note];
  }
  for ( let note_index in notes ) {
    note = notes[note_index];
    for ( let scale_index in scale ) {
      if ( scale[scale_index] === note ) {
        if (scale_index === 0) {
          //return "#8833ff";
          return "#CC0000";
        }
        if ( note.length > 1 ) {
          return "#1199ff";
        } else {
          return "#77aaff";
        }
      }
    }
  }

  if ( note.length > 1 ) {
    return "#000";
  } else {
    return "#fff";
  }
};

// console.log(aCustomScale.scale([0, 3, 7, 10, 11], true).getNotes())
export const modes = {
  'Ionian': [0, 3, 5, 7],
  'Dorian': [0, 1, 2, 3, 4, 5, 6, 7],
  'Phrygian': [0, 1, 2, 3, 4, 5, 6, 7],
  'Lydian': [0, 1, 2, 3, 4, 5, 6, 7],
  'Mixolydian': [0, 1, 2, 3, 4, 5, 6, 7],
  'Aeolian': [0, 1, 2, 3, 4, 5, 6, 7],
  'Locrian': [0, 1, 2, 3, 4, 5, 6, 7]
};

export const notes = [
  'A',
  'B#',
  'C',
  'Db',
  'E',
  'F',
  'G'
];