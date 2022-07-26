import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from './server/context';
import styled, { ThemeProvider } from 'styled-components';

import mainTheme from './styles/themes/mainTheme';
import { LoginPage as _LoginPage } from './views/Login-page';
import { Home } from './views/Home';

const LoginPage = styled(_LoginPage)``;


function App() {
  return (
    <Provider>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
   
  );
}

export default App;
