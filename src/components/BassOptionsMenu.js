import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';
import { note_list, modes, display_styles, display_instruments } from '../lib/Utils';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function BassOptionsMenu(props) {

  const classes = useStyles();
  const [mode, setMode] = React.useState('0,2,4,5,7,9,11');
  const [note, setNote] = React.useState('C');
  const [style, setStyle] = React.useState('notes')
  const [instrument, setInstrument] = React.useState('guitar');

  console.log("mode: " + mode);
  console.log("note: " + note);
  console.log("style: " + style);
  console.log("instrument: " + instrument);

  props.setDisplayStyle(style);
  props.setDisplayInstrument(instrument);
  props.setBassNote(note);
  props.setBassMode(mode);
  

  const handleNoteChange = event => {
    setNote(event.target.value);
  };

  const handleModeChange = event => {
    setMode(event.target.value);
  };

  const handleStyleChange = event => {
    setStyle(event.target.value);
  };

  const handleInstrumentChange = event => {
    setInstrument(event.target.value);
  };

  const OptionsContainer = styled.div`
    text-align: center;
  `;

  return (
    <OptionsContainer>
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-native-simple">Note</InputLabel>
        <NativeSelect
          value={note}
          onChange={handleNoteChange}
          input={<BootstrapInput name="mode" id="age-customized-native-simple" />}
        >
          <option value="" />
          {
            Object.keys(note_list).map(note => {
              return <option value={note_list[note]}>{note_list[note]}</option>;
            })
          }
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-native-simple">Mode</InputLabel>
        <NativeSelect
          value={mode}
          onChange={handleModeChange}
          input={<BootstrapInput name="mode" id="age-customized-native-simple" />}
        >
          <option value="" />
          {
            Object.keys(modes).map((mode) => {
              return <option value={modes[mode]}>{mode}</option>;
            })
          }
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-native-simple">Display Style</InputLabel>
        <NativeSelect
          value={style}
          onChange={handleStyleChange}
          input={<BootstrapInput name="mode" id="age-customized-native-simple" />}
        >
          <option value="" />
          {
            display_styles.map((style) => {
              return <option value={style}>{style}</option>;
            })
          }
        </NativeSelect>
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-native-simple">Instrument</InputLabel>
        <NativeSelect
          value={instrument}
          onChange={handleInstrumentChange}
          input={<BootstrapInput name="mode" id="age-customized-native-simple" />}
        >
          <option value="" />
          {
            Object.keys(display_instruments).map((instrument) => {
              return <option value={display_instruments[instrument]}>{instrument}</option>;
            })
          }
        </NativeSelect>
      </FormControl>
    </form>
    </OptionsContainer>
  );
}
