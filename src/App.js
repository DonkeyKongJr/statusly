import React from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

function App() {
  return (
    <Grommet theme={theme}>
      <header className="App-header">
        <p>Welcome to statusly.</p>
        <a
          className="GitHub"
          href="https://github.com/DonkeyKongJr/statusly"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show on GitHub
        </a>
        <Box
          tag="header"
          direction="row"
          align="center"
          justify="between"
          pad={{ vertical: 'small', horizontal: 'medium' }}
          elevation="medium"
        />
      </header>
      <AppBar>
        Statusly
        <Heading level="3" margin="none">
          Statusly
        </Heading>
        <Button icon={<Notification />} onClick={() => {}} />
      </AppBar>
    </Grommet>
  );
}

export default App;
