import React from 'react';

import * as S from './Login-page.styles';

export const LoginPage = ({className}) => {
  return (
    <S.Wrapper className={className}>
      <S.Title>Login</S.Title>
      <form>
        <S.SectionWrapper>
          <S.Label>
            Email:
            <S.Input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
          </S.Label>
        </S.SectionWrapper>
        <S.SectionWrapper>
          <S.Label>
            Senha:
            <S.Input
              lastInput
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </S.Label>
        </S.SectionWrapper>
        <S.SectionWrapper toTheEnd>
        <S.Button kind="secundary" type="submit" label="Cadastrar" />
          <S.Button kind="tertiary-variant" type="submit" label="Entrar" />
        </S.SectionWrapper>
      </form>
    </S.Wrapper>
  );
};
