import gotScales from 'got-scales'

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
}