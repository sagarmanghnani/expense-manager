import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// theming
import darkTheme from './modules/theme';

// import ExpenseToolbar from './components/Toolbar';
// import Home from './pages/Home';
import { ThemeProvider, Button, Box } from '@material-ui/core';

class Base extends React.Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Box component="span" m={1}>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Box>
      </ThemeProvider>
    );
  }
}

const renderApplication = () => {
  ReactDOM.render(
    <Base />,
    document.querySelector('#root')
  );
}

renderApplication();

if (module.hot) {
  module.hot.accept("./components/Home", () => {
    renderApplication();
  });
}
