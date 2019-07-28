import gotScales from 'got-scales'

export const getMajorScale = (note) => {
  return gotScales.note(note).scale('major').getNotes().map((n) => n.substring(0, 2));
};

export const getMinorScale = (note) => {
  return gotScales.note(note).scale('minor').getNotes().map((n) => n.substring(0, 2));
};

export const getMajorChord= (note) => {
  return gotScales.chord(note + 'maj').getNotes().map((n) => n.substring(0, 2));
};

export const getMinorChord= (note) => {
  return gotScales.chord(note + 'm').getNotes().map((n) => n.substring(0, 2));
};
