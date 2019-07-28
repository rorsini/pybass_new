import React from 'react';
const { Paper,Set,Rect } = require('react-raphael');
// const { Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line } = require('react-raphael');

const Piano = ({ scale }) => {

  let scale_index;
  let note_index;

  function getColor(note, scale) {
      let notes = note;

      if ( typeof note == "string" ) {
          notes = [note];
      }
      for ( note_index in notes ) {
          note = notes[note_index];
          for ( scale_index in scale ) {
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

  var chord_tones = [];
  for (scale_index in scale) {
      chord_tones[scale_index] = scale[scale_index];
      /*
      //Only show chord tones (1,3,5,7):
      if (scale_index % 2 != 0) {
          continue;
      } else {
          chord_tones[scale_index] = scale[scale_index];
      }
      */
  }
  // scale = chord_tones;

  chord_tones = [];
  for (scale_index in scale) {
      chord_tones[scale_index] = scale[scale_index];
      /*
      //Only show chord tones (1,3,5,7):
      if (scale_index % 2 != 0) {
          continue;
      } else {
          chord_tones[scale_index] = scale[scale_index];
      }
      */
  }
  scale = chord_tones;

  var xOffSet = 4;
  var yOffSet = 4;

  return (
    <div>
      <Paper width={300} height={100}>
        <Set>    
          <Rect x={xOffSet +   0} y={yOffSet} width={20} height={90} attr={{"fill":getColor('C', scale)}}/>
          <Rect x={xOffSet +  20} y={yOffSet} width={20} height={90} attr={{"fill":getColor('D', scale)}}/>
          <Rect x={xOffSet +  40} y={yOffSet} width={20} height={90} attr={{"fill":getColor('E', scale)}}/>
          <Rect x={xOffSet +  60} y={yOffSet} width={20} height={90} attr={{"fill":getColor('F', scale)}}/>
          <Rect x={xOffSet +  80} y={yOffSet} width={20} height={90} attr={{"fill":getColor('G', scale)}}/>
          <Rect x={xOffSet + 100} y={yOffSet} width={20} height={90} attr={{"fill":getColor('A', scale)}}/>
          <Rect x={xOffSet + 120} y={yOffSet} width={20} height={90} attr={{"fill":getColor('B', scale)}}/>

          <Rect x={xOffSet +  14} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['C#','Db'], scale)}}/>
          <Rect x={xOffSet +  34} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['D#','Eb'], scale)}}/>
          <Rect x={xOffSet +  74} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['F#','Gb'], scale)}}/>
          <Rect x={xOffSet +  94} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['G#','Ab'], scale)}}/>
          <Rect x={xOffSet + 114} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['A#','Bb'], scale)}}/>

          <Rect x={xOffSet + 140} y={yOffSet} width={20} height={90} attr={{"fill":getColor('C', scale)}}/>
          <Rect x={xOffSet + 160} y={yOffSet} width={20} height={90} attr={{"fill":getColor('D', scale)}}/>
          <Rect x={xOffSet + 180} y={yOffSet} width={20} height={90} attr={{"fill":getColor('E', scale)}}/>
          <Rect x={xOffSet + 200} y={yOffSet} width={20} height={90} attr={{"fill":getColor('F', scale)}}/>
          <Rect x={xOffSet + 220} y={yOffSet} width={20} height={90} attr={{"fill":getColor('G', scale)}}/>
          <Rect x={xOffSet + 240} y={yOffSet} width={20} height={90} attr={{"fill":getColor('A', scale)}}/>
          <Rect x={xOffSet + 260} y={yOffSet} width={20} height={90} attr={{"fill":getColor('B', scale)}}/>

          <Rect x={xOffSet + 154} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['C#','Db'], scale)}}/>
          <Rect x={xOffSet + 174} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['D#','Eb'], scale)}}/>
          <Rect x={xOffSet + 214} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['F#','Gb'], scale)}}/>
          <Rect x={xOffSet + 234} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['G#','Ab'], scale)}}/>
          <Rect x={xOffSet + 254} y={yOffSet} width={12} height={70} attr={{"fill":getColor(['A#','Bb'], scale)}}/>
        </Set>    
      </Paper>
    </div>
  );
};

export default Piano;
