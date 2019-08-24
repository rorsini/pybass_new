import React from 'react';
import Piano from './components/Piano';
import Bass from './components/Bass';
import BassOptionsMenu from './components/BassOptionsMenu';
import styled from 'styled-components';
import circle from './images/circle.png'
import {modes} from './lib/Utils';
//import {getMajorScale, getMinorScale, getMajorChord, getMinorChord} from './lib/Utils';
import './App.css';
import gotScales from 'got-scales'

const App = () => {

  // console.log("gotScales:");
  // console.log(gotScales);

  const [bassMode, setBassMode] = React.useState('');
  const [bassNote, setBassNote] = React.useState('C');
  const [displayStyle, setDisplayStyle] = React.useState('notes');

  const scale = bassMode ? gotScales.note(bassNote).scale(bassMode.split(","), true).notes.map(s => {
    return s && s.substring(0, 2)
  }) : [];

  console.log("bassNote: " + bassNote);
  console.log("bassMode: " + bassMode);
  console.log("scale: " + scale);
  console.log("displayStyle: " + displayStyle);

  const PianoContainer = styled.div`
    padding: 0px 0px 0px 40px;
  `;

  const InstructionsContainer = styled.div`
    padding: 0px 0px 0px 20px;
    margin: 0px;
    font-size: 1.4em;
    font-weight: bold;
  `;

  const NoteButtonContainer = styled.div`
    display: flexbox;
  `;

  const NoteButton = styled.button`
    font-weight: bold;
    font-size: 1.8em;
    padding: 10p 10p 10p 10px;
    margin: 20px;
    width: 60px;
    height: 60px;
    background-color: #008CBA;
    border-radius: 8px;
    border-color: black;
    flex: 1;
  `;

  const handleNoteChange = (note) => {
    console.log("clicked: " + note);
    setBassNote(note);
    setBassMode('0,2,4,6');
  };

  console.log("bassNote2: " + bassNote);

  return (
    <div>
      <InstructionsContainer>
        Choose some options:
      </InstructionsContainer>

      <NoteButtonContainer>
        <NoteButton onClick={(e) => {
          handleNoteChange('C');
        }}>C</NoteButton>
        <NoteButton onClick={(e) => {
          handleNoteChange('D');
        }}>D</NoteButton>
        <NoteButton onClick={(e) => {
          handleNoteChange('E');
        }}>E</NoteButton>
        <NoteButton onClick={(e) => {
          handleNoteChange('F');
        }}>F</NoteButton>
      </NoteButtonContainer>

      {/*<BassOptionsMenu setBassNote={setBassNote} setBassMode={setBassMode} setDisplayStyle={setDisplayStyle}/>*/}
      <Bass scale={scale} display_style={displayStyle}/>

      <PianoContainer>
        <Piano scale={scale}/>
      </PianoContainer>

      <center>
        <img src={circle} alt="Circle"/>;
      </center>

      {/*<Piano scale={getMinorScale('A')} />*/}
      {/*<Piano scale={getMajorChord('E')} />*/}
      {/*<Piano scale={getMinorChord('Ab')} />*/}
    </div>
  );
};

export default App;
