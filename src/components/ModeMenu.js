import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';

const ModeMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const ButtonContainer = styled.div`
    margin-bottom: 20px;
    margin-left: 20px;
  `;

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
    <div>
      <ButtonContainer>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Select mode
        </Button>
      </ButtonContainer>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          modes.map((mode) => {
            return <MenuItem onClick={handleClose}>{mode}</MenuItem>;
          })
        }
      </Menu>
    </div>
  );
};

export default ModeMenu;
