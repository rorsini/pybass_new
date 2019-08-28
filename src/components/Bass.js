import React from 'react';
// import gotScales from 'got-scales'
import { note_list } from '../lib/Utils';
// import {getColor} from '../lib/Utils';
// import {modes} from './lib/Utils';

const {Paper, Set, Circle, Rect, Text, Path} = require('react-raphael');

const Bass = ({scale, displayInstrument, displayStyle}) => {

  let fretboard_length = 1070;


  let fretboard_width;
  let numberOfStrings;
  if (displayInstrument === 'guitar'){
    fretboard_width = 152;
    numberOfStrings = 6;
  } else {
    fretboard_width = 100;
    numberOfStrings = 4;
  }

  let fb_length = fretboard_length;
  let fb_width = fretboard_width;

  function hPosOffset(pos) {
    return pos - 12;
  }

  const fret = [30, 114, 194, 269,
    339, 406, 469, 529,
    585, 638, 688, 735,
    780, 822, 862, 899,
    935, 968, 1000, 1029, 1058].map(hPosOffset);
  
    const strng = [12.5, 37.5, 62.5, 87.5, 112.5, 137.5];

  function mapCoords(coords) {
    return [fret[coords[1]], strng[coords[0]]];
  }

  const note_colors = {
    'C': '#ca0d3c', 'Cb': '#ca0d3c',
    'G': '#e43a23',
    'D': '#ec6f21',
    'A': '#f6ac1a',
    'E': '#ebda10',
    'B': '#97c82b',
    'Gb': '#36a938', 'F#': '#36a938',
    'Db': '#009a82', 'C#': '#009a82',
    'Ab': '#0084d4', 'G#': '#0084d4',
    'Eb': '#2f4d9e', 'D#': '#2f4d9e',
    'Bb': '#6d2a86', 'A#': '#6d2a86',
    'F': '#970a7c', 'E#': '#970a7c'
  };

  const scale_degree_color = '#2f4d9e';
  const scale_degree_root_color = '#69baea';

  const scale_degree_stroke_color = '#69baea';
  const scale_degree_root_stroke_color = '#333';

  const note_name_stroke_color = '#4b4b4b';
  const note_name_root_stroke_color = '#000';

  const guitar_notes_matrix = [
    ['E', 'F', 'F#','G', 'G#','A', 'A#','B' ,'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C' ],
    ['B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G' ],
    ['G', 'G#','A', 'A#','B', 'C', 'C#','D' ,'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#'],
    ['D', 'D#','E', 'F', 'F#','G', 'G#','A' ,'A#','B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#'],
    ['A', 'A#','B', 'C', 'C#','D', 'D#','E' ,'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#','E', 'F' ],
    ['E', 'F' ,'F#','G', 'G#','A', 'A#','B' ,'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C' ],
  ];

 let guitar_notes_with_positions = {};
  for (let i = 0; i < note_list.length; i++) {
    let positions = [];
    let this_note_name = note_list[i];
    for (let pos_string = 0; pos_string <= 5; pos_string++) {
      let guitar_string = guitar_notes_matrix[pos_string];
      for (let pos_fret = 0; pos_fret < 21; pos_fret++) {
        if (guitar_string[pos_fret] === this_note_name) {
          positions.push([pos_string, pos_fret]);
        }
      }
    }
    guitar_notes_with_positions[this_note_name] = positions;
  }

  const bass_notes_matrix = [
    ['G', 'G#','A', 'A#','B', 'C', 'C#','D' ,'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#'],
    ['D', 'D#','E', 'F', 'F#','G', 'G#','A' ,'A#','B', 'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#'],
    ['A', 'A#','B', 'C', 'C#','D', 'D#','E' ,'F', 'F#','G', 'G#','A', 'A#','B', 'C', 'C#','D', 'D#','E', 'F' ],
    ['E', 'F' ,'F#','G', 'G#','A', 'A#','B' ,'C', 'C#','D', 'D#','E', 'F', 'F#','G', 'G#','A', 'A#','B', 'C' ],
  ];

 let bass_notes_with_positions = {};
  for (let i = 0; i < note_list.length; i++) {
    let positions = [];
    let this_note_name = note_list[i];
    for (let pos_string = 0; pos_string <= 3; pos_string++) {
      let bass_string = bass_notes_matrix[pos_string];
      for (let pos_fret = 0; pos_fret < 21; pos_fret++) {
        if (bass_string[pos_fret] === this_note_name) {
          positions.push([pos_string, pos_fret]);
        }
      }
    }
    bass_notes_with_positions[this_note_name] = positions;
  }

  let notes = {};

  for (let i = 0; i < note_list.length; i++) {
    let this_note_name = note_list[i];
    if (displayInstrument === 'guitar') {
      notes[this_note_name] = {'coords': guitar_notes_with_positions[this_note_name].map(mapCoords)};
    } else {
      notes[this_note_name] = {'coords': bass_notes_with_positions[this_note_name].map(mapCoords)};
    }
  }

  // note aliases:
  notes['Eb'] = notes['D#'];
  notes['Fb'] = notes['E'];
  notes['Gb'] = notes['F#'];
  notes['Ab'] = notes['G#'];
  notes['Bb'] = notes['A#'];
  notes['Cb'] = notes['B'];
  notes['Db'] = notes['C#'];

  const string_spacing = 25;
  const total_frets = 20;
  const distance_above_nut = 30;
  const fret_marker_radius = 7;
  const fret_marker_color = '#000';
  const fret_marker_opacity = '1';
  // const position_color = 'green';

  const drawNote = (key_index, xpos, ypos, label, note_color, text_color, scale_degree, stroke_color) => {
    let elements = [];
    let stroke_width = 1;
    if (scale_degree === 1) {
      stroke_width = 3;
    }
    elements.push(<Rect x={xpos - 11} y={ypos - 10} width={20} height={20} r={5} attr={
      {
        'fill': note_color,
        'stroke': stroke_color,
        'stroke-width': stroke_width,
        'opacity': 1,
        'stroke-opacity': 1
      }
    }/>);
    let fontSize = '13px';
    let text_ypos = ypos - 2;
    if (label.length === 2) {
      fontSize = '10px';
      text_ypos += 1;
      text_color = '#eee';
    }
    elements.push(<Text key={key_index} x={xpos - 1} y={text_ypos + 2} text={label} attr={
      {
        'fill': text_color,
        'font-size': fontSize,
        'font-weight': 'bold'
      }
    }/>);
    return elements;
  }

  function drawNotes(this_scale, displayStyle) {
    let elements = [];
    let scale_degree = 1;
    let key_index = 0;
    for (let note_index in this_scale) {
      let note = this_scale[note_index];
      let note_coords = notes[note]['coords'];
      for (let index in note_coords) {
        let coords = note_coords[index];
        let x_coord = coords[0];
        let y_coord = coords[1];
        let note_color = note_colors[note];
        let note_label = note;
        let text_color = 'black';
        let stroke_color = note_name_stroke_color;
        if (displayStyle && (displayStyle === "degrees" || displayStyle === "chord")) {
          if (displayStyle === "chord") {
            if (scale_degree % 2 === 0) {
              continue;
            }
          }
          text_color = '#eee';
          if (scale_degree === 1) {
            note_color = scale_degree_root_color;
            stroke_color = scale_degree_root_stroke_color;
            text_color = '#000';
          } else {
            note_color = scale_degree_color;
            note_label = scale_degree;
            stroke_color = scale_degree_stroke_color;
          }
        } else {
          if (scale_degree === 1) {
            stroke_color = note_name_root_stroke_color;
          }
        }
        elements.push(drawNote(
          key_index,
          x_coord,
          y_coord,
          String(note_label),
          note_color,
          text_color,
          scale_degree,
          stroke_color));
        key_index++;
      }
      scale_degree++;
    }
    return elements;
  }

  return (
    <Paper width={fretboard_length} height={fretboard_width + 50}>
      <Set>
        {
          (() => {
            return [
              // background
              <Rect x={-10} y={0} width={fb_length + 8} height={fb_width - 1} r={10}
                    attr={{
                      stroke: '#d7b14a',
                      'stroke-width': '4',
                      gradient: '90-#e1b94e-#ffdd83'
                    }}/>,
              // background_bottom_border
              <Path d={"M 0 " + (fb_width - 1) + " l " + (fb_length - 7) + " 0"}
                    attr={{stroke: '#be8b00', 'stroke-width': '3'}}/>,
              // nut
              <Rect x={distance_above_nut} y={0} width={5} height={fb_width}
                    attr={{stroke: 'none', fill: '#444'}}/>,
              // nut_shadow
              <Path d={"M " + (distance_above_nut + 5) + " 0 l 0 " + fb_width}
                    attr={{
                      stroke: '#c5a54e',
                      'stroke-width': 2,
                      opacity: '0.5'
                    }}/>
            ];

          })()
        }
        {
          // Fret dots:
          (() => {
            let elements = [];
            let previous_d = 0;
            for (let fret = 0; fret < total_frets; fret += 1) {
              let fret_num = fret + 1;
              let length = 1500;
              let d = Math.round(length - (length / Math.pow(2, ((fret + 1) / 12))) + distance_above_nut);
              let p = " M " + d + " 0 l 0 " + fb_width;

              if (fret_num === 3) {
                elements.push(
                  <Circle x={previous_d + (d - previous_d) / 2} y={(fb_width / 2)}
                          r={fret_marker_radius} attr={{
                    fill: fret_marker_color,
                    stroke: 'none',
                    opacity: fret_marker_opacity
                  }}/>
                );
              }

              if (fret_num === 5) {
                elements.push(
                  <Circle x={previous_d + (d - previous_d) / 2} y={(fb_width / 2)}
                          r={fret_marker_radius} attr={{
                    fill: fret_marker_color,
                    stroke: 'none',
                    opacity: fret_marker_opacity
                  }}/>
                );
              }

              if (fret_num === 7) {
                elements.push(
                  <Circle x={previous_d + (d - previous_d) / 2} y={(fb_width / 2)}
                          r={fret_marker_radius} attr={{
                    fill: fret_marker_color,
                    stroke: 'none',
                    opacity: fret_marker_opacity
                  }}/>
                );
              }

              if (fret_num === 9) {
                elements.push(
                  <Circle x={previous_d + (d - previous_d) / 2} y={(fb_width / 2)}
                          r={fret_marker_radius} attr={{
                    fill: fret_marker_color,
                    stroke: 'none',
                    opacity: fret_marker_opacity
                  }}/>
                );
              }

              if (fret_num === 12) {
                elements.push(
                  <Circle x={previous_d + (d - previous_d) / 2} y={(fb_width / 4)}
                          r={fret_marker_radius} attr={{
                    fill: fret_marker_color,
                    stroke: 'none',
                    opacity: fret_marker_opacity
                  }}/>
                );
                elements.push(
                  <Circle x={previous_d + (d - previous_d) / 2} y={(fb_width - (fb_width / 4))}
                          r={fret_marker_radius} attr={{
                    fill: fret_marker_color,
                    stroke: 'none',
                    opacity: fret_marker_opacity
                  }}/>
                );
              }

              if (fret_num === 15) {
                elements.push(
                  <Circle x={previous_d + (d - previous_d) / 2} y={(fb_width / 2)}
                          r={fret_marker_radius} attr={{
                    fill: fret_marker_color,
                    stroke: 'none',
                    opacity: fret_marker_opacity
                  }}/>
                );
              }

              if (fret_num === 17) {
                elements.push(
                  <Circle x={previous_d + (d - previous_d) / 2} y={(fb_width / 2)}
                          r={fret_marker_radius} attr={{
                    fill: fret_marker_color,
                    stroke: 'none',
                    opacity: fret_marker_opacity
                  }}/>
                );
              }

              if (fret_num === 19) {
                elements.push(
                  <Circle x={previous_d + (d - previous_d) / 2} y={(fb_width / 2)}
                          r={fret_marker_radius} attr={{
                    fill: fret_marker_color,
                    stroke: 'none',
                    opacity: fret_marker_opacity
                  }}/>
                );
              }
              // bass_fret
              elements.push(<Path d={p} attr={{stroke: '#444', 'stroke-width': 2}}/>);
              // bass_fret_shadow
              elements.push(<Path d={"M " + (d + 1) + " 0 l 0 " + fb_width}
                                  attr={{stroke: '#222', 'stroke-width': 1}}/>);
              // bass_fret_shadow_two
              elements.push(<Path d={"M " + (d + 2) + " 0 l 0 " + fb_width} attr={{
                stroke: '#c5a54e',
                'stroke-width': 2,
                opacity: '0.5'
              }}/>);
              previous_d = d;
            }
            return elements;
          })()
        }
        {
          (() => {
            // Strings:
            let elements = [];
            let this_string_spacing = 12.5;
            for (let i = 0; i < numberOfStrings; i++) {
              elements.push(<Path d={"M 0 " + this_string_spacing + " l " + fb_length + " 0"}
                                  attr={{stroke: '#888', 'stroke-width': 4}}/>);
              elements.push(<Path d={"M 0 " + (this_string_spacing - 0.5) + " l " + fb_length + " 0"}
                                  attr={{stroke: '#e2e2e2', 'stroke-width': 0.8}}/>);
              this_string_spacing += string_spacing;
            }
            return elements;
          })()
        }
      </Set>
      <Set>
        {
          (() => {
            return drawNotes(scale, displayStyle);
          })()
        }
      </Set>
    </Paper>
  );
};

export default Bass;