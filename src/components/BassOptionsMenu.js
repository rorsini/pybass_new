import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

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

export default function BassOptionsMenu() {
  const classes = useStyles();
  const [mode, setMode] = React.useState('');

  console.log("mode:");
  console.log(mode);

  const handleChange = event => {
    setMode(event.target.value);
  };

  const modes = [
    'Ionian',
    'Dorian',
    'Phrygian',
    'Lydian',
    'Mixolydian',
    'Aeolian',
    'Locrian'
  ];

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-native-simple">Mode</InputLabel>
        <NativeSelect
          value={mode}
          onChange={handleChange}
          input={<BootstrapInput name="mode" id="age-customized-native-simple" />}
        >
          <option value="" />
          {
            modes.map((mode) => {
              return <option value={mode}>{mode}</option>;
            })
          }
        </NativeSelect>
      </FormControl>
    </form>
  );
}