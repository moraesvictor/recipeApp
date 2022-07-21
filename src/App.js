import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from './server/context';
import styled, { ThemeProvider } from 'styled-components';

import mainTheme from './styles/themes/mainTheme';
import { LoginPage as _LoginPage } from './views/Login-page';
import { Home } from './views/Home';

const LoginPage = styled(_LoginPage)``;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  vertical-align: center;
  height: 100vh;
`;

function App() {
  return (
    <Provider>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Switch>
            <Wrapper>
              <Route exact path="/" component={Home} />
            </Wrapper>
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
   
  );
}

export default App;
