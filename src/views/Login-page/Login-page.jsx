import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './Login-page.styles';

/**
 * Component that renders a login page. 
 * The login page contains a form to login and a button to register.
 */
export const LoginPage = ({className}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const history = useHistory();

  const regex = RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$");

 const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
 

 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  console.log('email', email);
  console.log('password', password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regex.test(email) && password.length > 6) {
      history.push('/home');
      console.log('success');
    } else {
      console.log('error');
    }
  }


  return (
    <S.Wrapper className={className}>
      <S.ContentLogin>
        <S.Title>SEU APP DE RECEITAS</S.Title>
        <S.Title>Login</S.Title>
        <form>
          <S.SectionWrapper>
            <S.Label>
              Email:
              <S.Input
                onChange={handleEmailChange}
                data-testid="email-input"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                value={email}
                error={regex.test(email) ? false : true}
              />
            </S.Label>
          </S.SectionWrapper>
          <S.SectionWrapper>
            <S.Label>
              Senha:
              <S.Input
                onChange={handlePasswordChange}
                value={password}
                data-testid="password-input"
                lastInput
                type="password"
                name="password"
                placeholder="Digite sua senha"
                disabled={password.length < 6}
                error={password.length < 6 ? 'Senha muito curta' : false}
              />
            </S.Label>
          </S.SectionWrapper>
          <S.SectionWrapper toTheEnd>
          <S.Button kind="secundary" type="submit" label="Cadastrar" />
            <S.Button 
            data-testid="login-submit-btn"
            kind="tertiary-variant"
            type="submit"
            label="Entrar"
            onClick={handleSubmit}/>
          </S.SectionWrapper>
        </form>
      </S.ContentLogin>
     
    </S.Wrapper>
  );
};
