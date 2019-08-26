import React from 'react';
import Piano from './components/Piano';
import Bass from './components/Bass';
import BassOptionsMenu from './components/BassOptionsMenu';
import styled from 'styled-components';
import circle from './images/circle.png'
// import {modes} from './lib/Utils';
//import {getMajorScale, getMinorScale, getMajorChord, getMinorChord} from './lib/Utils';
import './App.css';
import gotScales from 'got-scales'

const App = () => {

  const [bassMode, setBassMode] = React.useState('');
  const [bassNote, setBassNote] = React.useState('');
  const [displayStyle, setDisplayStyle] = React.useState('');
  const [displayInstrument, setDisplayInstrument] = React.useState('');

  const scale = bassMode ? gotScales.note(bassNote).scale(bassMode.split(","), true).notes.map(s => {
    return s && s.substring(0, 2)
  }) : [];

  // console.log("bassNote: " + bassNote);
  // console.log("bassMode: " + bassMode);
  // console.log("scale: " + scale);
  // console.log("displayStyle: " + displayStyle);

  const PianoContainer = styled.div`
    padding: 0px 0px 0px 40px;
  `;

  const InstructionsContainer = styled.div`
    padding: 0px 0px 0px 20px;
    margin: 0px;
    font-size: 1.4em;
    font-weight: bold;
  `;

  return (
    <div>
      <InstructionsContainer>
        Choose some options:
      </InstructionsContainer>

      <BassOptionsMenu 
        setBassNote={setBassNote} 
        setBassMode={setBassMode} 
        setDisplayStyle={setDisplayStyle}
        setDisplayInstrument={setDisplayInstrument}
        />
      <Bass scale={scale} displayInstrument={displayInstrument} displayStyle={displayStyle}/>

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
