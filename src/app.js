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
import { Incident } from './incident';
import './app.css';

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
        showSidebar: false,
        incidents: []
    };

    componentDidMount(){
        let incidents = [];

        for (let i = 1; i <= 10; i++) {
        incidents.push({
            title: 'Incident ' + i,
            content: 'Our server responded with an internal error',
            id: i,
            timestamp: new Date().setHours(new Date().getHours() - i + 1)
        });
        }

        this.setState({incidents: incidents});
    }

    render() {
        const { showSidebar } = this.state;

        const incidents = this.state.incidents.map((item, key) => (
        <Incident title={item.title} content={item.content} key={item.id} timestamp={item.timestamp}></Incident>
        ));

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
                <Box
                    className="block"
                    direction="row"
                    flex
                    overflow={{ horizontal: 'hidden' }}
                >
                    <Box className="content" flex align="center" justify="center">
                    {incidents}
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
