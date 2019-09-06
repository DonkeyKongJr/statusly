import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext
} from 'grommet';
import { Notification } from 'grommet-icons';
import { Incident } from './Incident';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    }
  }
};

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

class App extends Component {
  state = {
    showSidebar: false
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  Statusly
                </Heading>
                <Button
                  icon={<Notification />}
                  onClick={() =>
                    this.setState(prevState => ({
                      showSidebar: !prevState.showSidebar
                    }))
                  }
                />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align="center" justify="center">
                  <Incident
                    title="Incident 1"
                    content="Our service responded with an internal server error."
                  ></Incident>
                  <Incident
                    title="Incident 2"
                    content="Our service responded with an Bad Gateway error."
                  ></Incident>
                </Box>
                {size !== 'small' && (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
