import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import Footer from './components/Footer';
import Header from './components/Header';
import WeatherScreen from './screens/WeatherScreen';

// All typographies will have Montserrat font family
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Route path='/' component={WeatherScreen} exact />
          <Footer />
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;
